import { useHistory } from "react-router-dom";

function DocumentCard(){
    const history = useHistory()

    const goto_doc = () => {
        history.push('/documents/a74f157d-bca3-4fb7-9424-e2d45a3f43b8')
    }
    
    return (
        <div 
        className="document-card"
        onClick={event =>  goto_doc()}>
            <h5 className="document-title">Document Title</h5>
        </div>
        
    );
}

export default DocumentCard;