import { useHistory } from "react-router-dom";
import Home from "../pages/Home";

function NavBar(){
    const history = useHistory()

    const goto_login = () => {
        history.push('/login');
    }

    
    
    return (
        <div 
          className="nav-bar"
          style={{
              backgroundColor: '#f5f5f5',
              height: '78px',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0px 0px',
          }}>
            <h5 
              className="document-title"
              style={{
                  color: "hsl(230, 60%, 30%);",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  cursor: "pointer",
              }}>Doogle Gocs</h5>
            <button 
              aria-label="LOGOUT"
              onClick={
                event => goto_login()
              }
              style={{
                  background: "hsl(230, 50%, 90%)",
                  color: "hsl(230, 60%, 30%)",
                  border: "0px solid hsl(230, 60%, 30%) !important",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginTop: "0px !important",
                  fontSize: "0.75rem",
              }}>Logout</button>
        </div>       
    );
}

export default NavBar;