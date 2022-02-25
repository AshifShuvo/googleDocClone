import { useHistory } from "react-router-dom";

function DocumentCard(){
    const history = useHistory()

    const goto_doc = () => {
        history.push('/documents/a74f157d-bca3-4fb7-9424-e2d45a3f43b8')
    }
    
    return (
        <div className="document-card">
            <h5 className="document-title">Document Title</h5>
            <button 
                className="button-primary" 
                aria-label="LOGIN"
                onClick={event =>  goto_doc()} //Login e click korle Home e niye jabe
                >
                Edit 
            </button>
        </div>
        
    );
}


export default DocumentCard;
