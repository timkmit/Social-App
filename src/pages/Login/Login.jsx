import React from "react";
import { Link } from "react-router-dom";
import './login.scss'

const Login = () => {
    return ( 

       <div className="login" >
        <div className="card">
            <div className="left">
                <h1>Hello Wordl!</h1>
                <p>A lot of text u can fiil it</p>
                <span>Don't you have an accout?</span>

                <Link to="/register">
                    <button>Register</button>
                </Link>
                
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
            </div>
        </div>
       </div>
        
     );
}
 
export default Login;