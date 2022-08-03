import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pic from "../gesture/pictures/title_Back.jpg"
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { Typography as Text, Container, Grid, Button } from "@material-ui/core";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
const useStyles=makeStyles(()=>({
    root:{
        position:'relative',
        width:'100%',
        
        '& img':{
           margin:'0 auto',
           width:'100%',
           
            // width:"100%",
            // paddingBottom:"0px",
            height:"650px",
        }
        
    },
    title:{
        position:'absolute',
        top:"50%",
        left:"50%",
        transform: 'translate(-50%, -50%)',
    },
    sub_header:{
        paddingBottom: '50px',
    },
    sub_title:{
        paddingBottom:'30px',
        ' & h4':{
            lineHeight:'30px',
        }
    },
    header:{
        '& h1':{
            paddingTop:'20px',
            paddingBottom:'50px',
        }
    },
    slider:{
      
      
    }
}))
export default function Title() {
    const classes=useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.slider}>
        <Slider {...settings}>
          <div >
          <img src={Pic}></img>
          </div>
          <div>
            <img src={Pic}></img>
          </div>
        </Slider>
        </div>
        <div className={classes.title} >
        <Container maxWidth="sm">
        <div className={classes.header}>
          <Text variant="h1" color="textPrimary" align="center" gutterBottom>
            图像上色
          </Text>
        </div>
        <div className={classes.sub_header}>
        <Text variant="h5" align="center" color="textSecondary" paragraph>
        智能识别黑白图像内容并填充色彩，使黑白图像变得鲜活
        </Text>
        </div>
        <div className={classes.sub_title}>
          <Grid container spacing={3} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" startIcon={ <PictureAsPdfIcon/>} size='medium'>
                  Paper
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" startIcon={ <GitHubIcon/>} size='medium'>
                Code
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" startIcon={ <GitHubIcon/>} size='medium'>
                Data
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
        </div>
      </div>
  )
}
