import React, { useState } from "react";
import axios from "axios";
import "./App.css";

// UI Components
import NavBar from "./Components/Navbar";
import WeathCard from "./Components/WeathCard";
import Quote from "./Components/Quote";
import PressureCard from "./Components/PressureCard";
import HumidityCard from "./Components/HumidityCard";
import WindSpdCard from "./Components/WindSpdCard";
import ReportCard from "./Components/ReportCard";
import Footer from "./Components/Footer";

import cloudImg from "./icons/001-cloud.png";
import rainImg from "./icons/003-rainy.png";
import stormImg from "./icons/008-storm.png";
import cloudyImg from "./icons/011-cloudy.png";
import snowImg from "./icons/012-snowy-1.png";
import fogImg from "./icons/017-foog.png";
import sunImg from "./icons/039-sun.png";
import loader from "./icons/810.gif";

function App() {
  // State
  const [isInit, setInit] = useState(0);
  const [isLoading, setLoading] = useState(0);
  const [temp, setTemp] = useState("");
  const [appTemp, setAppTemp] = useState("");
  const [weathDesc, setDesc] = useState("");
  const [cityName, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weathImg, setWeathImg] = useState("");
  const [pres, setPres] = useState("");
  const [slp, setSlp] = useState("");
  const [uvi, setUvi] = useState("");
  const [sr, setSr] = useState("");
  const [humid, setHumid] = useState("");
  const [preci, setPreci] = useState("");
  const [vis, setVis] = useState("");
  const [dpt, setDpt] = useState("");
  const [ws, setWs] = useState("");
  const [windDir, setWindDir] = useState("");
  const [cloudIndex, setCloudIndex] = useState("");
  const [airQuality, setAirQuality] = useState("");

  // Functions

  const pickWeathImg = (code) => {
    switch (code) {
      case 200:
      case 201:
      case 202:
      case 230:
      case 231:
      case 232:
      case 233:
        return stormImg;
      case 500:
      case 501:
      case 502:
      case 511:
      case 520:
      case 521:
      case 522:
        return rainImg;
      case 601:
      case 602:
      case 610:
      case 611:
      case 612:
      case 621:
      case 622:
      case 623:
        return snowImg;
      case 700:
      case 711:
      case 721:
      case 731:
      case 741:
      case 751:
        return fogImg;
      case 800:
        return sunImg;
      case 801:
      case 802:
      case 803:
      case 804:
      case 900:
        return cloudyImg;
      default:
        return cloudImg;
    }
  };

  const getWeather = async () => {
    let city = document.querySelector("#cityInput").value;
    console.log(city);
    if (city.length === 0) {
      alert("Phaa ! Enter Value");
    } else {
      if (!isLoading) setLoading(1);
      const apikey = "e210c112d80b41728f2335ac11bcd82b";
      await axios
        .get(
          `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apikey}`
        )
        .then((resp) => {
          setLoading(0);
          if (!isInit) setInit(1);
          setTemp(Math.round(resp.data.data[0]["temp"]));
          setWeathImg(pickWeathImg(resp.data.data[0]["weather"]["code"]));
          setAirQuality(resp.data.data[0]["aqi"]);
          setAppTemp(Math.round(resp.data.data[0]["app_temp"]));
          setDesc(resp.data.data[0]["weather"]["description"]);
          setCity(resp.data.data[0]["city_name"]);
          setCountry(resp.data.data[0]["country_code"]);
          setPres(Math.round(resp.data.data[0]["pres"]));
          setSlp(resp.data.data[0]["slp"]);
          setUvi(Math.round(resp.data.data[0]["uv"]));
          setSr(resp.data.data[0]["solar_rad"]);
          setHumid(Math.round(resp.data.data[0]["rh"]));
          setPreci(resp.data.data[0]["precip"]);
          setVis(resp.data.data[0]["vis"]);
          setDpt(resp.data.data[0]["dewpt"]);
          setWs(Math.round(resp.data.data[0]["wind_spd"]));
          setWindDir(resp.data.data[0]["wind_cdir_full"]);
          setCloudIndex(resp.data.data[0]["clouds"]);
          setAirQuality(resp.data.data[0]["aqi"]);
        })
        .catch((err) => {
          alert("Error City Not Found , Enter Valid CityName");
        });
    }
  };

  return (
    <div className="App">
      <div class="app user-select-none">
        <div class="row">
          <div class="col-sm-6 col-md-7 ml-2 mx-auto">
            <NavBar head="BlueWeather" />
            <div class=" bg-1 mt-2 p-2 w-full shadow rounded">
              <div className="weathCard shadow gbc-1  rounded p-2">
                <div className="input-group rounded input-group-sm mb-3">
                  <input
                    type="text"
                    id="cityInput"
                    className="form-control bg-transparent rounded cityIn"
                    placeholder="City / District"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />

                  <span for="" className="input-group-text bg-1 cityIn">
                    <button
                      id="subBtn"
                      className="btn border-none btn-sm"
                      onClick={getWeather}
                    >
                      {isLoading ? (
                        <img alt="loaderr" src={loader} className="loader"/>
                      ) : (
                        <i className="bi bi-caret-right fs-6"></i>
                      )}
                    </button>
                  </span>
                </div>

                <WeathCard
                  temp={temp}
                  appTemp={appTemp}
                  weathDesc={weathDesc}
                  cityName={cityName}
                  country={country}
                  weathImg={weathImg}
                  isInit={isInit}
                />
              </div>
              {/* WeathCard End */}

              <div class="mt-3">

                <ReportCard
                  isInit={isInit}
                  temp={temp}
                  ws={ws}
                  aqi={airQuality}
                  cloudIndex={cloudIndex}
                  desc={weathDesc}
                />

                <Quote />

                <PressureCard
                  isInit={isInit}
                  pres={pres}
                  slp={slp}
                  uvi={uvi}
                  sr={sr}
                />

                <HumidityCard
                  isInit={isInit}
                  humid={humid}
                  preci={preci}
                  vis={vis}
                  dpt={dpt}
                />

                <WindSpdCard
                  isInit={isInit}
                  ws={ws}
                  windDir={windDir}
                  cloudIndex={cloudIndex}
                  airQuality={airQuality}
                />
              </div>
              {/* mt-3 End */}
            </div>
            {/* bg-1 End */}
          </div>
          {/* Col End */}
        </div>
        {/* Row End */}
      </div>
      {/* App End */}
      <Footer />
    </div>
  );
}

export default App;
