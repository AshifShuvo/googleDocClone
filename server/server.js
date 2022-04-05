const mongoose = require("mongoose")
const Document = require("./Document")
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database/database.sqlite'
});

const DocumentS = sequelize.define('Document', {
  _id: Sequelize.DataTypes.STRING,
  data: Sequelize.DataTypes.JSON,
});

sequelize.sync()

mongoose.connect("mongodb+srv://ashifzahanshuvo:xiYv5B7SR4xSxnlQ@shuvo.6qyqd.mongodb.net/myFirstDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

const defaultValue = ""

io.on("connection", socket => {
  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId)
    const [documentS, created] = await DocumentS.findOrCreate({
      where: { _id: documentId }
    });
    console.log(documentS.data)
    socket.join(documentId)
    socket.emit("load-document", document.data)
    // socket.emit("load-document", JSON.parse(documentS.data))

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data })
      await DocumentS.update({data}, { where: { _id: documentId } });
    })
  })
})

async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document
  return await Document.create({ _id: id, data: defaultValue })
}