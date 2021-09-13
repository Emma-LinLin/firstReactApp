import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {HomeView} from "../views/homeview/HomeView";
import {ShopView} from "../views/shopview/ShopView";
import { SignInView } from "../views/signinview/SignInView";
import RoutingPaths from "./RoutingPaths";

export const Routes = ({children}) => {
return(
    <BrowserRouter>
        {children}
        <Switch>
            <Route exact path={RoutingPaths.shopView} component ={ShopView} />
            <Route exact path={RoutingPaths.signInView} component ={SignInView} />
            <Route path={RoutingPaths.homeView} component ={HomeView} />
        </Switch>
    </BrowserRouter>
);
};
