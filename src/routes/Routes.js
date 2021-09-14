import React, {useContext} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView } from "../views/homeview/HomeView";
import { ShopView } from "../views/shopview/ShopView";
import { SignInView } from "../views/signinview/SignInView";
import {ProfileView} from "../views/authenticatedview/ProfileView"
import RoutingPaths from "./RoutingPaths";
import { UserContext } from "../shared/provider/UserProvider";
import  LocalStorage  from "../shared/storage/LocalStorage";



export const Routes = ({children}) => {
    const [authenticatedUser, SetAuthenticatedUser] = useContext(UserContext);

    const isUserAuthenticated = () =>{
        const userFromBrowserMemory = localStorage.getItem(LocalStorage.username);
        SetAuthenticatedUser(userFromBrowserMemory);
    }

return(
    <BrowserRouter>
        {children}
        <Switch>
            <Route exact path={RoutingPaths.shopView} component ={ShopView} />
            <Route exact path={RoutingPaths.signInView} component ={SignInView} />
            <Route exact path={RoutingPaths.profileView} component ={ProfileView} />
            <Route path={RoutingPaths.homeView} component ={HomeView} />
        </Switch>
    </BrowserRouter>
);
};
