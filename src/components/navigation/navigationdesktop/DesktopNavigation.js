import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Profile} from "../../profile/Profile"
import { UserContext } from "../../../shared/provider/UserProvider";
import "./DesktopNavigation.css"


export const DesktopNavigation = () =>
{
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const renderLogin = () =>{
        if(authenticatedUser)
        return(
            <span className="navbar__login--desktop">
                <Profile></Profile>
            </span>
        )
        return(
            <div className="navigationBarWrapper">
                <Link to={"/signin"}>Sign in</Link>
            </div>
        )
    }
    return (
        <div className ="navigationBarWrapper">
            <Link to= "/">Home</Link>
            <Link to="/shop">Shop</Link>
            {renderLogin()}
        </div>
    )
};