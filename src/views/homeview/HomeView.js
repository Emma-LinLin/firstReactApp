import rocket from "../../shared/images/rocket.png"
import "./HomeView.css"

export const HomeView = () =>{
    return(
        <div className="hw__container">
            <h1>Welcome to Swoobie!</h1><br/>
            <img className ="hw__rocket" src = {rocket} alt = "rocket"/>
            <p>Book your spacetravel today</p>
        </div>
    )
};