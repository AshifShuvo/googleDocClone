// import { useNavigate } from "react-router-dom";

function Signup(){
    
    // let nav = useNavigate();
    // const handleLogin = () => {
    //     navigate("/document");  
    // }
    
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
                >
                Signup 
            </button>
        </div>
    );
}


export default Signup;