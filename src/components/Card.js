import React, { useState } from "react";
import '../assets/scss/card.scss' ;
import timeImg from '../assets/images/time_icon.png';
import locationImg from '../assets/images/location_icon.png';
import projectImg from '../assets/images/project_icon.png';
import zoomImg from '../assets/images/zoom_icon.png';
const Card = () => {
  const [isClicked,setIsClicked]=useState(false);
 
  return (
    <>
      <div className={`card-container ${isClicked?'clicked':''}`} onClick={()=>setIsClicked(!isClicked)}>
       
        <div className="card-container-left">
          <div className="card-container-left-title">Meeting Title</div>
          <div className="card-container-left-info-items">
            <div className="info-item">
              <div className="icon">
                <img src={timeImg} alt="time_icon" />
              </div>
              <div className="value">
                <span>Monday Feb 16 ,</span>
                <span>11 Am - 2Pm</span>
                <span>(2 hrs)</span>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">
                <img
                  src={projectImg}
                  alt="project_icon"
                />
              </div>
              <div className="value">project</div>
            </div>
            <div className="info-item">
              <div className="icon">
                <img
                  src={locationImg}
                  alt="location_icon"
                />
              </div>
              <div className="value">Location</div>
            </div>
          </div>
        </div>
        <div className="card-container-right">
            <span className="label">schedule</span>
          <div className="join-call">
            <img className="zoom-img" src={zoomImg} alt="zoom" />
            <span className="txt">Join Call</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
