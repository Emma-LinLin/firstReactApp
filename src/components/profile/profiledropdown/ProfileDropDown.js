import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import RoutingPaths from '../../../routes/RoutingPaths'
import {UserContext} from '../../../shared/provider/UserProvider'
import LocalStorage from '../../../shared/storage/LocalStorage'
import {useHistory} from 'react-router'
import "./ProfileDropDown.css"

export const ProfileDropDown = () =>{
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const history = useHistory();

    const logout = () =>{
        localStorage.removeItem(LocalStorage.username);
        setAuthenticatedUser(false);
        history.push(RoutingPaths.homeView);
    };

    return (
        <div className="profiledropdown">
            <p>Firstname Lastname</p>
            <p>email@email.email</p>
            <hr/>
            <button>
            <Link to ={RoutingPaths.profileView}>Profile</Link>
            </button>
            <br/>
            <button onClick={() => logout()}>Log out</button>
        </div>
    )
}
