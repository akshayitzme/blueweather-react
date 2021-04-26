import React from 'react'
import HumidIcon from '../icons/humidity.svg'
const HumidityCard= (props)=>{
    return(
        <div>
        {props.isInit ? (
        <div className="bg-5 rounded p-2 mt-2">
        <div className="">
              <span className="fs-5 fw-bold clr-29">Humidity</span><br/>
              <div className="d-flex mt-2 justify-content-between">
                  
                  
                  <div className="d-flex align-items-center h-auto clr-12 bg-10 border border-2 border-warning rounded p-1 py-2">
                      <img src={HumidIcon} className="w-Icon" alt="HumidityIcon" srcset=""/>
                      <span className="fs-1">{props.humid}</span>
                      <span>%</span> 
                  </div>
                  <div className="d-flex flex-column justify-content-center ">
                      <button className="bg-transparent border-bottom border-0  border-warning clr-31 fw-bold text-decoration-none">Precipitation: <span className="text-white">{props.preci} mb</span></button>
                      <button  className="bg-transparent border-bottom border-0  border-warning clr-31 fw-bold text-decoration-none">Visibiltiy: <span className="text-white">{props.vis} k.m</span></button>
                      <button  className="bg-transparent border-bottom border-0  border-warning clr-31 fw-bold text-decoration-none">Dew Point: <span className="text-white">{props.dpt} ℃</span></button>
                    </div>
              </div>
        </div>
          </div>) : ``}
      </div>
    )
}

export default HumidityCard