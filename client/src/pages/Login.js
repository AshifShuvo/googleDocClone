//import { useNavigate } from "react-router-dom";

function Login(){
    
    // let nav = useNavigate();
    // const handleLogin = () => {
    //     navigate("/home");  
    // }
    
    return (
        <div className="page-container">
            <h1 className="login-label">Login</h1>

            <h6 className="input-label">Email</h6>
            
            <input className="input-input"></input>

            <h6 className="input-label">Password</h6>
            
            <input type = "password" className="input-input">
                
            </input>
            
            <button 
                className="button-primary" 
                aria-label="LOGIN"
                onClick={event =>  window.location.href='/home'} //Login e click korle Home e niye jabe
                >
                Login 
            </button>

            <h5 className="input-label" style={{marginTop: "4rem"}}>New Here?</h5>
            <button 
                className="button-primary"
                style={{marginTop: "0rem"}}
                onClick={event =>  window.location.href='/signup'} //Login e click korle Home e niye jabe
            >Sign Up</button>
        </div>

    );
}


export default Login;

