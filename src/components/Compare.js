import { makeStyles} from '@material-ui/core';
import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import "../../node_modules/animate.css/animate.css";
const useStyles=makeStyles(()=>({
    thumbnail:{
      height:'130px',
      display:'flex',
      justifyContent:'space-around',
      width:'600px',
      margin:'0 auto ',
      backgroundColor:'#ccc',
      padding:'20px 20px 20px 20px',
      '& .son':{
        // paddingTop:'20px',
        // width:'25%',
        top:'50%',
        display:'inline-block',
        height:'100%',
        // paddingBottom:'20px',
      }
    },
    compare:{
      maxWidth:'600px',
      margin:'0 auto '
    }
    
  }))
export default function Compare(images) {
    const [bordernum,setBordernum]=useState(0)
    const [line,SetLine]=useState(0.2)
    const classes=useStyles()
    const[index,setIndex]=useState(0);
    const imags=images.images
    const thumb=imags.map((item,key)=>(
        
        key%2===1? '':<img id={key} className='son' src={require(`../components/colourize/pictures/${item}`)} onClick={(e)=>{setIndex(key);setBordernum(key)}} style={{border:(key==bordernum?'2px solid #0073eb':'')}}></img>
        
    ))
  return (
    <React.Fragment>
        <div>
        <div className={classes.compare}>
        <ReactCompareImage leftImage={require(`../components/colourize/pictures/${imags[index]}`)} rightImage={require(`../components/colourize/pictures/${imags[index+1]}`)}/>
        </div>
        <div className={classes.thumbnail}>
        {thumb}
        </div>
        </div>
        
       
 
    </React.Fragment>
  )
}
