import { useHistory } from "react-router-dom";
import DocumentCard from "../components/DocumentCard";
import NavBar from "../components/NavBar";

function Home(){   

    const history = useHistory()
    const goto_doc = () => {
        history.push('/documents/a74f157d-bca3-4fb7-9424-e2d45a3f43b8')
    } 
    return(
        <div className="page-container">
            <NavBar/>
            {/* <h1 style={{
                fontSize: "2rem",}}>kichu na :)</h1> */}
            <h2>Documents</h2>
            <div className="document-container">
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
            </div>            
        </div>
    );
}

export default Home;
