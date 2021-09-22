import { useContext } from "react";
import { FlightContext } from "../../shared/provider/FlightProvider";
import "./Flights.css"

export const Flights= () =>{
    const [flights, setFlights] = useContext(FlightContext)

    const displayFlights = () =>{
        return flights.map((item, i) => <h3 key={i}>
            Details: Flight to {item}
            <br/>
            Launch: 2024-2025
            </h3>)
    }

    return(
        <div className="flights">
            {displayFlights()}
        </div>
    )
}