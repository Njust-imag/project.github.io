import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Typography as Text, Container, Grid, Button, makeStyles } from "@material-ui/core";
import ReactCompareImage from 'react-compare-image';
import Left1 from "../colourize/pictures/left.jpg";
import Right1 from "../colourize/pictures/right.jpg"
import Module from "../colourize/pictures/pipeline.png"
import Left2 from "../colourize/pictures/left2.jpg"
import Right2 from "../colourize/pictures/right2.jpg"
import Left3 from "../colourize/pictures/left3.jpg"
import Right3 from "../colourize/pictures/right3.jpg"
import { useState } from 'react';
const images=[Left1,Right1,Left2,Right2,Left3,Right3];
const useStyles=makeStyles(()=>({
  root:{
    
  },
  title:{
    paddingTop:'50px'
  },
  content:{
    
    
  },
  module:{
    display:'table-cell',
    textAlign:'center',
    '& img':{
        width:'50%'
    }
  },
  thumbnail:{
    // backgroundColor:'red',
    height:'130px',
    display:'flex',
    justifyContent:'space-around',
  
    '& .son':{
      paddingTop:'20px',
      // backgroundColor:'blue',
      width:'25%',
      display:'inline-block',
      height:'100%',
      paddingBottom:'20px',
      // paddingLeft:'30px',
      // paddingRight:'30px',
    }
  },
  compare:{
    maxWidth:'600px',
    position:'absolute',
    margin:'auto',
    top:'0',
    left:'0',
    right:'0',
    left:'0'
  }
  
}))
export default function LatestTrek() {
  const classes=useStyles();
  const[index,setIndex]=useState(0);
  return (
    <div className={classes.root}>
    <div className={classes.content}>
      <div className={classes.title}>
      <Text variant="h4" color="textPrimary" align="center" gutterBottom>
        图像上色案例
      </Text>
      </div >
      <div className={classes.compare}>
      <ReactCompareImage leftImage={images[index]} rightImage={images[index+1]} height={'400px'}/>
      </div>
      <div className={classes.thumbnail}>
        <img id='0' className='son' src={Left1} onClick={(e)=>{setIndex(parseInt(e.target.id))}}></img>
        <img id='2' className='son' src={Left2}  onClick={(e)=>{setIndex(parseInt(e.target.id))}}></img>
        <img id='4' className='son' src={Left3}  onClick={(e)=>{setIndex(parseInt(e.target.id))}}></img>
      </div>
    </div>
    {/* <div className={classes.module}> 
      <div className={classes.title}>
        <Text variant="h4" color="textPrimary" align="center" gutterBottom>
          我们的模型
        </Text>
        </div>
        <img  src={Module}></img>
        
      
      </div> */}
      </div>
  )
}
