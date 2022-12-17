import React from 'react'
import data from './data'

import { MdLocationPin } from "react-icons/md";

{/* <MdLocationPin /> */}
export default function (){
    const cardElements = data.map(ele=>{
        return (
            <div className = "card">
                <div className='card--image'>
                    <img src={ele.imageUrl} />
                </div>
                <div className='card--details'>
                    <div className='location'>
                        <MdLocationPin className='pink'/>
                        <p className='location--name capital spaces-out'>{ele.location}</p>
                        <a href={ele.googleMapsUrl} target='_blank' className='location--google'>View On Google Maps</a>
                    </div>
                    <h1 className='detail--title'>{ele.title}</h1>
                    <h3 className='detail--date'>{ele.startDate} - {ele.endDate}</h3>
                    <p className='detail-desc'>{ele.description}</p>
                </div>
            </div>
        )
    })
    return (
        <div className = "card-container">
            {cardElements}
        </div>
    )
}