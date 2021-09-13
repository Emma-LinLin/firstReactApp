import React, { useContext, useState } from 'react'
import { UserContext } from '../../shared/provider/UserProvider';

export const SignInView = () => {
    const [authenticatedUser, SetAuthenticatedUser] = useContext(UserContext);
    const [username, setUserName] = useState("Username");
    const [password, setPassword] = useState();

    const login = () => {
        SetAuthenticatedUser(username);
    };

    return (
        <div>
            <h1>{username}</h1>
            <input placeholder = "Enter Username" onChange={(event) => setUserName(event.target.value)}></input><br/>
            <input placeholder = "Enter Password" type="password" onChange={(event) => setUserName(event.target.value)}></input>
            <button onClick={() => login()}>Sign in</button>
        </div>
    );
};
