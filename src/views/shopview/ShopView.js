import React from 'react'
import spinner from "../../shared/images/spinner.gif"
import "./ShopView.css"

export const ShopView = () =>{

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
            {showLoadingIfNoAPICall()}
        </div>
    )
};