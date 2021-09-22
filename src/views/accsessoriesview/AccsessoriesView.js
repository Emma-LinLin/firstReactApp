import React, {useState, useEffect} from 'react'
import SwapiAPIService from '../../shared/api/service/SwapiAPIService'
import spinner from "../../shared/images/spinner.gif"
import "./AccessoriesView.css"

export const AccsessoriesView = () => {
    const [responseData, setResponseData] = useState()

    const fetchData = async () =>{
        try{
            const starshipData = await SwapiAPIService.getAllShips()
            setResponseData(starshipData)

        }catch(error){
            console.log(error)
        }
    }

    const showLoadingIfNoAPICall = () =>{
        return(
            <div className="shopview__loading">
                <h3>Loading...</h3>
                <img className="shopview__spinner" src={spinner} alt="spinner" />
            </div>
        )
    }

    const displayData = () =>{
        if(responseData && responseData.data){
            return responseData?.data.results.map((item, i) => (
                <p>{i + 1}. {item.name}</p>
            ))
        }
        return(
            <div>
                {showLoadingIfNoAPICall()}
            </div>
        )
        
    }

    useEffect (() => {
        fetchData();
    }, [])

    return (
        <div className="accessories">
            <h1>Available starships for hire!</h1>
            <h3>Note: talk to your driver on launch date</h3>
            <div className="display">{displayData()}</div>
        </div>
    )
}
