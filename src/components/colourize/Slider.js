import React from 'react'
import { useState } from 'react';
import BeforeAfterSlider from 'react-before-after-slider'
import Pic from "../gesture/pictures/title_Back.jpg"
import { makeStyles } from "@material-ui/core/styles";
import 'react-slider-light/lib/index.css';
export default function Slide() {
    
  return (
    
    <BeforeAfterSlider
      before={Pic}
      after={Pic}
      width={640}
      height={480} />
     
  )
}
