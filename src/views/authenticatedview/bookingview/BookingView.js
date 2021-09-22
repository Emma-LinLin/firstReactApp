import React, {useContext} from 'react'
import { useLocation } from 'react-router'
import { FlightContext } from '../../../shared/provider/FlightProvider'
import "./BookingView.css"

export const BookingView = () => {
    const location = useLocation()
    console.log(location)
    const [flights, setFlights] = useContext(FlightContext)

    const displayData = () =>{
        if(location){
            return(
                <div className ="bookingview">
                    <h2>Your bookings</h2>
                    <div className="bookingview__success">
                        <h2>Success!</h2>
                        <p>Your flight to {location?.state?.Planet} has been successfully booked. 
                        Driver {location?.state?.People} will be picking you up in approximately 3-4 light years</p>
                        <br/>
                        <h3>Happy space travels!</h3>
                        <br/>
                        <p>Note: We have a strict no snacks policy, snacks will be flinged to nearest orbit</p>
                        <br/>
                        <p>Best whishes Swoobie</p>
                    </div>
                    <button onClick={() => setFlights([...flights, location.state.Planet])}>Store flight details in profile</button>
                </div>
            )
        }
        return(
            <div>
                <h2>Nothing to see here!</h2>
            </div>
        )
    }

    return (
        <div>
            {displayData()}
        </div>
    )
}
