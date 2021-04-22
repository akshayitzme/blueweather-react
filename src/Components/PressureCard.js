import React from 'react'
import presIcon from '../icons/pressure-gauge.svg'

const PressureCard= (props)=>{
    return(
        <div>
            {props.isInit ? (
        <div className="bg-5 rounded p-2 mt-2">
            <div className="">
                <span className="fs-5 fw-bold clr-29">Pressure</span><br/>
                <div className="d-flex mt-2 justify-content-between">
                    
                    
                    <div className="d-flex align-items-center h-auto clr-12 bg-10 border border-2 border-warning rounded p-1 py-2">
                        <img src={presIcon} className="w-Icon" alt="" srcset=""/>
                        <span className="fs-1">{props.pres}</span>
                        <span>mb</span> 
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <a data-toggle="tooltip" data-placement="top" title="atmospheric pressure at mean sea level" className="border-bottom border-2 border-warning clr-31 fw-bold text-decoration-none">Sea Level: <span className="text-white">{props.slp}</span></a>
                        <a data-toggle="tooltip" data-placement="top" title="The UVI is a measure of the level of UV radiation" className="border-bottom border-2 border-warning clr-31 fw-bold text-decoration-none">UV Index: <span className="text-white">{props.uvi}</span></a>
                        <a data-toggle="tooltip" data-placement="top" title="electromagnetic radiation emitted by the sun" className="border-bottom border-2 border-warning clr-31 fw-bold text-decoration-none">Radiation: <span className="text-white">{props.sr}</span></a>
                    </div>
                    
                </div>

            </div>
        </div>): ``}
        </div>
    )
}

export default PressureCard;