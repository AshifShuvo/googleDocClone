// import { useNavigate } from "react-router-dom";

function Login(){
    
    // let nav = useNavigate();
    // const handleLogin = () => {
    //     navigate("/document");  
    // }
    
    return (
        <div className="page-container">
            <h1 className="login-label">Login</h1>
            <h6 className="input-label">Email</h6>
            <input className="input-input"></input>
            <h6 className="input-label">Password</h6>
            <input className="input-input"></input>
            <button 
                className="button-primary" 
                aria-label="LOGIN"
                >
                Login 
            </button>
        </div>
    );
}


export default Login;

