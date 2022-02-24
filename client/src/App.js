import TextEditor from "./TextEditor"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

//

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/login`} />
        </Route>
        <Route path="/login" exact>
          {/* <Redirect to={`/documents/${uuidV4()}`} /> */}
          <Login/>
        </Route>
        <Route path="/signup" exact>
          <Signup/>
        </Route>
        <Route path="/home" exact>
          <Home/>
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
        
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
