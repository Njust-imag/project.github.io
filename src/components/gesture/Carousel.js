import React from 'react'
import { useEffect,useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import '../components/Pic.css'
// import im1 from '../assets/1.jpg'
// import im2 from '../assets/2.jpg'
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
// import i1 from './exam/11.jpg'
// import i2 from './exam/22.jpg'
import { Typography as Text, Container, Grid, Button } from "@material-ui/core";
import { Section } from 'react-scroll-section';
const useStyles=makeStyles(()=>({
    pic_title:{
        paddingTop:'50px',
    }
}))
export default function Carousel() {
  const classes=useStyles();
  
  const _renderVideo=(item)=> {
    return (
     
      <div>
        {
          // showVideo[item.embedUrl] ?
            <div className='video-wrapper'>
                <a
                  className='close-video'
                 
                >
                </a>
                <iframe
                  width='900'
                  height='547'
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                >
                </iframe>
            </div>
          //  :
          //   <a onClick={_toggleShowVideo(item.embedUrl)}>
          //     <div className='play-button'></div>
          //     <img className='image-gallery-image' src={item.original} />
          //     {
          //       item.description &&
          //         <span
          //           className='image-gallery-description'
          //           style={{right: '0', left: 'initial'}}
          //         >
          //           {item.description}
          //         </span>
          //     }
          //   </a>
        }
      </div>
      
    );
  }
  const images=[
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
      renderItem:_renderVideo
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/"
    } 
  ];
  return (
    
    <Container maxWidth="md">
      <div className={classes.pic_title}>
      <Text
      Text variant="h4" color="textPrimary" align="center" gutterBottom>
      项目展示
      </Text>
        <Text variant="h7" align="center" color="textSecondary" paragraph>
          检测手部位置，识别手部含义
        </Text>
        </div>
    <ImageGallery items={images} showThumbnails={true} showPlayButton={false} showFullscreenButton={false} /> 
    </Container>
    
  )
}



