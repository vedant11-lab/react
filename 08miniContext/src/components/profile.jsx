import React, {useContext} from "react";
import UserContext from "../context/userContext";

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <p>Please log in to see your profile information.</p>;

    return (
        <div>
            <h2>Profile Page</h2>
           
                <div>
                    <p>Username: {user.username}</p>
                    <p>Password: {user.password}</p>
                </div>
        
        </div>
    )
}

export default Profile          