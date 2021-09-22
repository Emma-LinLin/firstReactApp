import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Profile} from "../../profile/Profile"
import { UserContext } from "../../../shared/provider/UserProvider";
import "./DesktopNavigation.css"
import RoutingPaths from "../../../routes/RoutingPaths";
import rocket from "../../../shared/images/rocket.png"



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
            <button
             className="navbar__login--desktop">
            <Link to={RoutingPaths.signInView}>Sign in</Link>
            </button>
        )
    }
    return (
        <div>
            <nav className ="navigation--desktop">
                <p className ="navbar__logo--desktop">
                    <img className ="navbar__rocket" src = {rocket} alt = "rocket"/>
                    <h2>Swoobie</h2>
                </p>
                <ul className ="navbar__list--desktop">
                    <li><Link to= {RoutingPaths.homeView}>Home</Link></li>
                    <li><Link to= {RoutingPaths.shopView}>Shop</Link></li>
                    <li><Link to= {RoutingPaths.accessoriesView}>Accessories</Link></li>
                </ul>
                {renderLogin()}
            </nav>
        </div>
    )
};