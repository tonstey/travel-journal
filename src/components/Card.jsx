import React from "react"
import marker from "../assets/icons8-map-marker-50.png"


function Card(props){
  return (
    <>
      <div class="card">
        <img src={props.imgUrl} class="image"/>
        <div class="information">
          
          <div class="location-container">
            <img src={marker} class="marker"/>
            <p class="location">
              {props.location} 
              <a href={props.linkUrl} class="google-maps" target='_blank'>View on Google Maps</a>
            </p>
          </div>
         
          <h2 class="title">{props.title}</h2>
          <h5 class="dates">{props.startDate} - {props.endDate}</h5>
          <p class="description">{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default Card