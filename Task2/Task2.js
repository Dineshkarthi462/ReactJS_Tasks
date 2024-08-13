import React from "react";
import './Style.css';
import Img from './Images/rcb-img.png';
import Img1 from './Images/csk-img.png';
const Task2 = () => {
    return(
        <>
        <div className="bg">
            <div className="Container">
                <center>
                    <h1>Super Over League</h1>
                    <img src={Img}/>
                    <img src={Img1}/>
                </center>
            </div>
        </div>
        </>
    )
}
export default Task2;