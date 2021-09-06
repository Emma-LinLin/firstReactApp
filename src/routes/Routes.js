import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {HomeView} from "../views/homeview/HomeView";
import {ShopView} from "../views/shopview/ShopView";
import RoutingPaths from "./RoutingPaths";

export const Routes = ({children}) => {
return(
    <BrowserRouter>
        {children}
        <Switch>
            <Route exact path={RoutingPaths.shopView} component ={ShopView} />
            <Route path={RoutingPaths.homeView} component ={HomeView} />
        </Switch>
    </BrowserRouter>
);
};
