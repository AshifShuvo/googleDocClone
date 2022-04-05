import { useHistory } from "react-router-dom";

// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Signup(){
    
    // let nav = useNavigate();
    // const handleLogin = () => {
    //     navigate("/document");  
    // }

    const history = useHistory()

    const goto_signup = () => {
        // history.push('/srte_hobe')
    }
    
    return (
        <div className="page-container">
            <h1 className="login-label">Signup</h1>
            <h6 className="input-label">Name</h6>
            <input className="input-input"></input>
            <h6 className="input-label">Email</h6>
             
            <input className="input-input"></input>
            <h6 className="input-label">Password</h6>
            <input className="input-input"></input>
            <h6 className="input-label">Re-Enter Password</h6>
            <input className="input-input"></input>
            <button 
                className="button-primary" 
                aria-label="LOGIN"
                onClick={e => goto_signup()}
                >
                Signup 
            </button>
        </div>
    );
}


export default Signup;