import React from 'react'
import TopBar from '../components/detection/TopBar'
import Carousel from '../components/detection/Carousel'
import CarouselVideo from "../components/detection/CarouselVideo"
import Video from '../components/detection/Video'
import Title from '../components/detection/Title'
import { Typography as Text, Container, Grid, Button, makeStyles } from "@material-ui/core";
import Into from "../components/detection/pictures/intro.jpg"
import Footer from '../components/gesture/Footer'
import Ability from '../components/detection/Ability'
const useStyles=makeStyles(()=>({
  root:{

  },
  topbar:{

  },
  media:{
    '& .title':{
      paddingTop:'50px'
    }
  },
  video:{
    maxWidth:'600px',
    margin:'0 auto',
    paddingTop:'50px',
    paddingBottom:'50px'
  },
  compare:{
    margin:'0 auto',
    width:'1200px',
    // backgroundColor:'red',
    textAlign:'center',
    '& img':{
       
    }
  },
  container:{
    paddingBottom:'30px',
    '& .title':{
      paddingTop:'30px',
      paddingBottom:'30px'
    }
  },
  footer:{
    backgroundColor: '#3f51b5',
    '& .MuiTypography-body2':{
        color: '#fafafa',
        paddingTop: '35px',
        textAlign: 'center',
    },
    '& .typo':{
        height:'100px',
    }
  },
  ability:{
    marginBottom:'80px',
    marginTop:'80px'
  }

}))
export default function Detection() {
  const classes=useStyles();
  // const Data= [
  //   {
  //    _id: '5fd025a181e2c80897c14ae1',
  //    videoUrl: 'https://cdn.dribbble.com/users/2146089/screenshots/12387473/media/bf9ffb522fe68ba57ebdc62bc3f16cc5.png'
  //   }
  // ];

  return (
    <div className={classes.root}>
        <div className={classes.topbar}>
            <TopBar/>
        </div>
        <div>
          <Title/>
        </div>
        <div className={classes.media}>
        <div className='title'>
        <Text variant="h4" color="textPrimary" align="center" gutterBottom>
        项目视频
      </Text>
        </div>
        <div className={classes.video}>
          <Video/>
        </div>
        </div>
        <div className={classes.container}>
        <div className='title'>
        <Text variant="h5" color="textPrimary" align="center" gutterBottom>
        能力介绍
      </Text>
      <Text variant="body1" color="textPrimary" align="center" gutterBottom>
        能力介绍
      </Text>
        </div>
        <div className={classes.compare}>
          <img src={Into}></img>
        </div>
        </div>
        <div className={classes.ability}>
        <Ability/>
        </div>
        <div className={classes.footer}>
            <Footer/>
        </div>
    </div>
  )
}
