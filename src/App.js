import React from 'react';
import './main.css';

import loaderGIF from './gif/91.gif';
import rfIcon from './png/043-warm.png';
import huIcon from './png/025-humidity.png';
import presIcon from './png/050-windy-3.png';

import stormImg from './png/008-storm.png';
import rainImg from './png/003-rainy.png';
import snowImg from './png/012-snowy-1.png';
import fogImg from './png/017-foog.png';
import sunImg from './png/039-sun.png';
import cloudyImg from './png/011-cloudy.png';
import cloudImg from './png/001-cloud.png';

const axios = require('axios');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      temp: '',
      weathDesc: '',
      weathCode: '',
      rf: '',
      pres: '',
      hu: '',
      weathImg: '',
      quotes:[
        `“Every day is a good day. There is something to learn, care and celebrate.”― Amit Ray`,
        `“There is no good day or bad day, only good or bad actions.”― Amit Kalantri,`,
        `“Many bad days were preceded by a bad night’s sleep.”― Mokokoma Mokhonoana `,
        `“Even the worst days have an ending, and the best days have a beginning.”― Jennifer Coletta `,
        `“Tomorrow's a good day for dying.”― Anthony T.Hincks `,
        '“a bad day is just a filler episode in our lives”― nynetailed '
      ]
    };


    this.getWeather = this.getWeather.bind(this);
    this.setData = this.setData.bind(this);
    this.setWeathImg= this.setWeathImg.bind(this);
  }



setWeathImg(code){
  switch(code){
    case 200: case 201: case 202: case 230: case 231: case 232: case 233:
      return stormImg;
    case 500: case 501: case 502: case 511: case 520: case 521: case 522:
      return rainImg;
    case 601: case 602: case 610: case 611: case 612: case 621: case 622: case 623:
      return snowImg;
    case 700: case 711: case 721: case 731: case 741: case 751:
      return fogImg;
    case 800:
      return sunImg;
    case 801: case 802: case 803: case 804: case 900:
      return cloudyImg;
    default:
      return cloudImg;
  }
}


setData(data){
    let temp, weathDesc, weathCode, rf, pres, hu, weathImg, cityName, countryName, quote;
    cityName= data['city_name'];
    countryName= data['country_code'];
    weathDesc= data['weather']['description'];

    weathCode= data['weather']['code'];
    weathImg= this.setWeathImg(weathCode);
    temp= Math.round(data['temp'])
    rf= Math.round(data['app_temp'])
    hu= Math.round(data['rh'])
    pres= Math.round(data['pres'])
    quote= this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];

    this.setState({
      isLoading: false,
      temp: temp,
      cityName: cityName,
      countryName: countryName,
      weathDesc: weathDesc,
      weathCode: weathCode,
      weathImg: weathImg,
      rf: rf,
      pres: pres,
      hu: hu,
      quote: quote
    });
    document.querySelector('#main').classList.remove('hidden');
  }

  getWeather(){
    this.setState({
      isLoading: true
    })
    const apikey= 'e210c112d80b41728f2335ac11bcd82b';
    let city= document.querySelector('#cityInput').value;
    axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apikey}`)
      .then(resp => {
      this.setData(resp.data.data[0])})
      .catch(err=>{
        alert('Error City Not Found , Enter Valid CityName')
      });
  }
  render(){
    let btn= <i className="fas fa-2x fa-arrow-circle-right text-indigo-500"></i>;
    let loader= <img class="w-10" src={loaderGIF} alt="loader"/>;
    return (
    <div className="container-fluid">
      <div class="grid flex justify-center gap-4 mb-10 md:mb-0">
        <div class="mt-2 f-pacifico text-center text-white text-4xl">
          BlueWeather <sup class="text-red-400 f-jetBrains">V3</sup>
        </div>
        <div class="select-none bg-main rounded p-4 mt-1">

        <div className="">
            <div className="flex justify-center">
                <i className="fas fa-map-marker-alt fa-2x mr-2 text-indigo-500"></i>
                <input type="text" className="bg-transparent border-2 border-indigo-900 text-center rounded p-1" placeholder="City Name" name="" id="cityInput"/>
                <button className="px-2 ml-3  rounded" onClick={this.getWeather}>
                    {this.state.isLoading===true ? loader : btn}
                </button>
            </div>
        </div>

        <hr class="border-indigo-500 my-5"/>
        <div id="main" class="hidden mt-3">
          <div class="flex justify-start">

          <div className="flex justify-start">
            <div className="justify-start">
                <img id="weathImg" className="w-48" src={this.state.weathImg} alt="" />
                <div className=" inline-flex">
                  <i className="fas fa-map-marker-alt fa-2x mr-2 text-indigo-500"></i>
                  <h4 class="text-indigo-800 text-2xl">{this.state.cityName}, {this.state.countryName}</h4>
                </div>
            </div>
          </div>

            <div class="justify-end mx-5">
                <h1 id="weath" class="text-right text-7xl md:text-9xl text-blue-500 f-noto">{this.state.temp}<sup class="text-blue-400">&#8451;</sup></h1>
                <div id="weathDesc" class="text-right mt-5 text-2xl md:text-3xl f-lato">
                {this.state.weathDesc}
                </div>
            </div>

          </div>

          <div class="container text-center mt-2 italic">
              {this.state.quote}
          </div>

          <hr class="border-indigo-500 my-3"/>

          <div class="container flex justify-center">
             <div class="border-2 border-blue-300 p-2 mx-2">
                 <div class="text-left f-lato italic">RealFeel</div>
                 <img src={rfIcon} class="mx-auto w-10" alt=""/>
                 <div id="realFeel" class="text-center">{this.state.rf}<sup>&#8451;</sup></div>
             </div>
             <div class="border-2 border-blue-300 p-2 mx-2">
                 <div class="text-left f-lato italic">Humidity</div>
                 <img src={huIcon} class="mx-auto w-10" alt=""/>
                 <div id="humid" class="text-center">{this.state.hu}</div>
             </div>
             <div class="border-2 border-blue-300 p-2 mx-2">
                 <div class="text-left f-lato italic">Pressure</div>
                 <img src={presIcon} class="mx-auto w-10" alt=""/>
                 <div id="p" class="text-center">{this.state.pres}</div>
             </div>
          </div>

        </div>
      </div>
      <footer class="flex">
        <div class="mr-auto f-lato">
        Coded with 💜 in ReactJs
        </div>
        <div class="ml-auto">
        <i class="fab fa-github-square fa-2x" onClick={()=>{
          window.location.href='https://github.com/akshayitzme/blueweather-v3'
        }}></i>
        <i class="ml-2 tg-clr text-white fab fa-telegram fa-2x" onClick={()=>{
          window.location.href='https://t.me/akshayitzme'
        }}></i>
        </div>
      </footer>
      </div>

    </div>
  )}
}

export default App;
