import React, {useState} from 'react'
import spinner from "../../shared/images/spinner.gif"
import "./ShopView.css"
import axios from 'axios';

export const ShopView = () =>{
    const[responseData, setResponseData] = useState()
    const[count, setCount] = useState(1)
    const API_URL = "https://swapi.dev/api/planets/" + count;

    const fetchData = async () =>{
        try{
            const response = await axios.get(API_URL)
            setResponseData(response)
            setCount(count+1)
        }catch(error){
            console.log(error)
        }
    }

    const displayData = () => {
        if(responseData && responseData.data){
            return (
                <div>
                    <h3>Available flight found to</h3>
                    <hr/>
                    <h3>Name: {responseData.data.name}</h3>
                    <h3>Diameter: {responseData.data.diameter}</h3>
                    <h3>Climate: {responseData.data.climate}</h3>
                    <h3>Terrain: {responseData.data.terrain}</h3>
                    <br/>
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
            <button onClick={() => fetchData()}>Check for nearest department</button>
            {displayData()}
        </div>
    )
};