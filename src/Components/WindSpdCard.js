import React from 'react'
import windSpdIcon from '../icons/anemometer.svg'

const WindSpdCard= (props)=>{
    return(
        <div>
            { props.isInit ? (
        <div className="bg-5 rounded p-2 mt-2">
            <div className="">
                    <span className="fs-5 fw-bold clr-29">Wind Speed</span><br/>
                    <div className="d-flex mt-2 justify-content-between">
                        
                        
                        <div className="d-flex align-items-center h-auto clr-12 bg-10 border border-2 border-warning rounded p-1 py-2">
                            <img src={windSpdIcon} className="w-Icon" alt="" srcset=""/>
                            <span className="fs-1">{props.ws}</span>
                            <span>m/s</span> 
                        </div>
                        <div className="d-flex flex-column justify-content-center ">
                            <button data-toggle="tooltip" data-placement="top" title="direction the wind is coming from" className="border-bottom border-2 border-warning text- clr-31 fw-bold text-decoration-none text-capitalize">Direction: <span className="clr-4">{props.windDir}</span></button>
                            <button data-toggle="tooltip" data-placement="top" title="refers to the fraction of the sky obscured by clouds when observed from button particular location" className="border-bottom border-2 border-warning clr-31 fw-bold text-decoration-none">Clouds: <span className="clr-4">{props.cloudIndex}</span></button>
                            <button data-toggle="tooltip" data-placement="top" title="Air quality is button measure of how clean or polluted the air is" className="border-bottom border-2 border-warning clr-31 fw-bold text-decoration-none">Air Quality: <span className="clr-4">{props.airQuality}</span></button>
                        </div>
                    </div>

                </div>
            </div>) : ``}
            </div>
    )
}

export default WindSpdCard;