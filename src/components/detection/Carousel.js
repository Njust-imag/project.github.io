import React from "react";
import { Carousel } from "react-responsive-carousel";
import BeforeAfterSlider from 'react-before-after-slider'
import Pic from "../gesture/pictures/title_Back.jpg"
export default () => (
  <Carousel autoPlay>
    <div>
    <img alt="" src={Pic}/>
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src={Pic}/>
      <p className="legend">Legend 1</p>
    </div>
  </Carousel>
);
