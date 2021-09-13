import React from "react";
import {Link} from "react-router-dom";
import "./DesktopNavigation.css"

export const DesktopNavigation = () =>
{
    return (
        <div className ="navigationBarWrapper">
            <Link to= "/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/signin">Sign in</Link>
        </div>
    )
};