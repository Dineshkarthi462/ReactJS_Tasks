import React from 'react';
import './Style3.css';
import Img from './Images/Profile.jpg';
import Img1 from './Images/watch.jpg';
const Task1=()=>{
    return(
        <>
        <center>
            <div className="Bg">
            <h1>Congratulations</h1>
            <div className="Container">
            <img src={Img}/>
            <h1>Kiran V</h1>
            <p>Vishnu Institute of Computer Education and Technology,<br></br>Bhimavaram</p>
            <img src={Img1}/>
            </div>
            </div>
        </center>
        </>
    )
}
export default Task1;