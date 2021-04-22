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
                        <img src={presIcon} className="w-Icon" alt="Pressure Icon" srcset=""/>
                        <span className="fs-1">{props.pres}</span>
                        <span>mb</span> 
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <button className="bg-transparent border-bottom border-0 border-warning clr-31 fw-bold text-decoration-none">Sea Level: <span className="text-white">{props.slp}</span></button>
                        <button className="bg-transparent border-bottom border-0 border-warning clr-31 fw-bold text-decoration-none">UV Index: <span className="text-white">{props.uvi}</span></button>
                        <button className="bg-transparent border-bottom border-0 border-warning clr-31 fw-bold text-decoration-none">Radiation: <span className="text-white">{props.sr}</span></button>
                    </div>
                    
                </div>

            </div>
        </div>): ``}
        </div>
    )
}

export default PressureCard;