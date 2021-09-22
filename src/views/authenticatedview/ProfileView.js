import { useContext } from "react";
import {Flights} from "../../components/flights/Flights"
import { UserContext } from "../../shared/provider/UserProvider";
import "./ProfileView.css"

export const ProfileView = () =>{
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return(
        <main>
            <section className="section">
                <h1>Space traveler {authenticatedUser}</h1>
            </section>
            <div className="bookings">
                <Flights/>
            </div>
        </main>
    );
};