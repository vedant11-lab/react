import React, {useState,useContext} from "react";
import UserContext from "../context/userContext";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        setUser({username, password});
    }
    return (
        <div>
            <h2>Login Page</h2>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            {" "}
            <input 
                type="password" 
                placeholder="Enter your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login