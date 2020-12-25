import React from 'react';

import rfIcon from './png/043-warm.png';
import huIcon from './png/025-humidity.png';
import presIcon from './png/050-windy-3.png';

const axios = require('axios');

var data;
const getWeather= ()=>{
  const apikey= 'e210c112d80b41728f2335ac11bcd82b';
  let city= document.querySelector('#cityInput').value;
  axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apikey}`).then(resp => {
    setData(resp.data.data[0]);
  })
}
var temp, weathDesc, weathCode, rf, pres, hu, img;
const setData= (data)=>{

  weathDesc= data['weather']['description'];

  weathCode= data['weather']['code'];

  temp= Math.round(data['temp'])
  rf= Math.round(data['app_temp'])
  pres= Math.round(data['pres'])

}

function CityInput(){
  return(
    <div className="">
        <div className="flex justify-center">
            <i className="fas fa-map-marker-alt fa-2x mr-2 text-indigo-500"></i>
            <input type="text" className="bg-transparent border-2 border-indigo-900 text-center rounded p-1" placeholder="City Name" name="" id="cityInput"/>
            <button className="px-2 ml-3 bg-white rounded" onClick={getWeather}>
                <i className="fas fa-arrow-circle-right text-indigo-500"></i>
            </button>
        </div>
    </div>
  )
}

class Weath extends React.Component{
  render(){
    return(
    <div class="justify-end mx-5">
        <h1 id="weath" class="text-right text-7xl md:text-9xl text-blue-500 f-noto">{temp}<sup class="text-blue-400">&#8451;</sup></h1>
        <div id="weathDesc" class="text-right mt-5 text-2xl md:text-3xl f-lato">
        {weathDesc}
        </div>
    </div>
  )}
}

class WeathImg extends React.Component{
  render(){
    return(
    <div className="flex justify-start">
      <div className="justify-start">
          <img id="weathImg" className="w-52" src={img} alt="" />
      </div>
    </div>
  )}
}

class Quote extends React.Component{
  render(){
    return(
    <div class="container text-center mt-5 italic">
        'Its a good day to die hard'
    </div>
  )}
}

class WeathCards extends React.Component{
  render(){
    return(
    <div class="container flex justify-center">
       <div class="border-2 border-blue-300 p-2 mx-2">
           <div class="text-left f-lato italic">RealFeel</div>
           <img src={rfIcon} class="mx-auto w-10" alt=""/>
           <div id="realFeel" class="text-center">{rf}</div>
       </div>
       <div class="border-2 border-blue-300 p-2 mx-2">
           <div class="text-left f-lato italic">Humidity</div>
           <img src={huIcon} class="mx-auto w-10" alt=""/>
           <div id="humid" class="text-center">{hu}</div>
       </div>
       <div class="border-2 border-blue-300 p-2 mx-2">
           <div class="text-left f-lato italic">Pressure</div>
           <img src={presIcon} class="mx-auto w-10" alt=""/>
           <div id="p" class="text-center">{pres}</div>
       </div>
    </div>
  )}
}
export {CityInput, WeathImg, Weath, Quote, WeathCards}
