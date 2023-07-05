import React from "react";
import './image.css'
import MockUp from './Photos/to/MockUp.jpg';

const Photos = () =>{
    return(
        <div>
            <img src={MockUp.jpg} alt="My Image" />
        </div>
    )
}
export default Photos;