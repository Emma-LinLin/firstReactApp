import React, { useContext, useState } from 'react'
import { UserContext } from '../../shared/provider/UserProvider';
import { useHistory } from 'react-router-dom';
import LocalStorage from '../../shared/storage/LocalStorage'
import "./SignInView.css"

export const SignInView = () => {
    const [authenticatedUser, SetAuthenticatedUser] = useContext(UserContext);
    const [username, setUserName] = useState("Username");
    const [password, setPassword] = useState();

    const history = useHistory();
    const login = () => {
        SetAuthenticatedUser(username);
        localStorage.setItem(LocalStorage.username, username);
        history.goBack();
    };

    return (
        <div className ="signIn__wrapper">
            <div className="container">
            <h1>{username}</h1>
            <input placeholder = "Enter Username" onChange={(event) => setUserName(event.target.value)}></input><br/>
            <input placeholder = "Enter Password" type="password" onChange={(event) => setPassword(event.target.value)}></input><br/>
            <button onClick={() => login()}>Sign in</button>
            </div>
        </div>
    );
};
