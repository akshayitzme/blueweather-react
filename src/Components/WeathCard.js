import React from "react";

const WeathCard = (props) => {
  return (
    <div>
      {props.isInit ? (
        <div>
          <div className="d-flex justify-content-between">
            <span className="celFont fw-bold text-white">
              {props.temp}
              <sup>℃</sup>
            </span>
            <img src={props.weathImg} alt="Weather Icon" className="weathImage" srcset="" />
          </div>

          <span className="clr-3 fw-bold">Feels like {props.appTemp}℃</span>

          <div className="d-flex justify-content-between">
            <div className="fw-">
              <i className="bi bi-geo-alt-fill clr-32"></i>
              <label for="" className="clr-3 fw-bold">
                {props.cityName}, {props.country}
              </label>
            </div>
            <span className="fs-5 clr-31 fw-bold">{props.weathDesc}</span>
          </div>
        </div>
      ) : (
        ``
      )}
    </div>
  );
};

export  default WeathCard;
