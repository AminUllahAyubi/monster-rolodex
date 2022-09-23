import React from "react";
import "./card.style.css";
export const Card=(props)=>{
    return(
        <div className="card">
            <img alt='monster' src={`./images/${props.monster.img}`}/>
            <h2>
              {props.monster.name}
            </h2>
            <p>{props.monster.email}</p>
        </div>
    )
}