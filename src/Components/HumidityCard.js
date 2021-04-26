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
                      <img src={HumidIcon} className="w-Icon" alt="" srcset=""/>
                      <span className="fs-1">{props.humid}</span>
                      <span>%</span> 
                  </div>
                  <div className="d-flex flex-column justify-content-center ">
                      <button href="#" data-toggle="tooltip" data-placement="top" title="Precipitation is button form of water from the atmosphere" className="border-bottom border-2 border-warning clr-31 fw-bold text-decoration-none">Precipitation: <span className="clr-4">{props.preci} mb</span></button>
                      <button href="#" data-toggle="tooltip" data-placement="top" title="Visibility is button measure of the distance at which an object or light can be clearly discerned." className="border-bottom border-2 border-warning clr-31 fw-bold text-decoration-none">Visibiltiy: <span className="clr-4">{props.vis} k.m</span></button>
                      <button href="#" data-toggle="tooltip" data-placement="top" title="The dew point is the temperature the air needs to be cooled to (at constant pressure) in order to achieve button relative humidity (RH) of 100%" className="border-bottom border-2 border-warning clr-31 fw-bold text-decoration-none">Dew Point: <span className="clr-4">{props.dpt} ℃</span></button>
                    </div>
              </div>
        </div>
          </div>) : ``}
      </div>
    )
}

export default HumidityCard