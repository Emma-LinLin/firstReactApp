import React from "react";
import {Link} from "react-router-dom";

export const DesktopNavigation = () =>
{
    return (
        <div>
            <Link to= "/home">Home</Link>
            <Link to="/shop">Shop</Link>
        </div>
    )
};