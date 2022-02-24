import { useHistory } from "react-router-dom";
import DocumentCard from "../components/DocumentCard";


function Home(){    
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
            </div>            
        </div>
    );
}

export default Home;