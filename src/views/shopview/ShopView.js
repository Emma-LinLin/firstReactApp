import React, {useState} from 'react'
import spinner from "../../shared/images/spinner.gif"
import SwapiAPIService from "../../shared/api/service/SwapiAPIService"
import "./ShopView.css"

export const ShopView = () =>{
    const[responseDataPlanet, setResponseDataPlanet] = useState()
    const[responseDataPeople, setResponseDataPeople] = useState()
    const[count, setCount] = useState(1)

    const fetchData = async () =>{
        try{
            const planetData = await SwapiAPIService.getPlanet(count)
            setResponseDataPlanet(planetData)

            const driverData = await SwapiAPIService.getDriver(count)
            setResponseDataPeople(driverData)

            setCount(count+1)
        }catch(error){
            console.log(error)
        }
    }

    const displayData = () => {
        if(responseDataPlanet && responseDataPlanet.data 
            && responseDataPeople && responseDataPeople.data){
            return (
                <div className = "shopview__display">
                    <h3 className ="shopview__title">Available to destination</h3>
                    <hr/>
                    <h3>Name: {responseDataPlanet.data.name}</h3>
                    <h3>Diameter: {responseDataPlanet.data.diameter}</h3>
                    <h3>Climate: {responseDataPlanet.data.climate}</h3>
                    <h3>Terrain: {responseDataPlanet.data.terrain}</h3>
                    <br/>
                    <h3 className ="shopview__title">Available driver</h3>
                    <hr/>
                    <h3>Name: {responseDataPeople.data.name}</h3>
                    <br/>
                    <button className="btn__book">Book flight</button>

                </div>
            )
        }
        return(
            <div>
                {showLoadingIfNoAPICall()}
            </div>
        )
    }

    const showLoadingIfNoAPICall = () =>{
        return(
            <div className="shopview__loading">
                <h3>Loading...</h3>
                <img className="shopview__spinner" src={spinner} alt="spinner" />
            </div>
        )
    }

    return(
        <div className="shopview">
            <h1>Book a flight</h1>
            <br/>
            <button onClick={() => fetchData()}>Check available flights</button>
            <br/>
            {displayData()}
        </div>
    )
};