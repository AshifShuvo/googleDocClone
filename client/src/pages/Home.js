import { useHistory } from "react-router-dom";
import DocumentCard from "../components/DocumentCard";


function Home(){   
    const history = useHistory()

    const goto_doc = () => {
        history.push('/documents/a74f157d-bca3-4fb7-9424-e2d45a3f43b8')
    } 
    return (
        <div className="page-container">
            <h1>Welcome Back Madarchod</h1>
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
            </div>            
        </div>
    );
}

export default Home;