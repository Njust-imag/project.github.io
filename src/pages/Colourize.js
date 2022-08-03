import React from 'react'
import TopBar from '../components/colourize/TopBar';
import { makeStyles } from "@material-ui/core/styles";
import Title from '../components/colourize/Title';
// import Slider from '../components/colourize/Slider';
import Footer from '../components/gesture/Footer';
// import Carousel from '../components/detection/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import LatestTrek from '../components/detection/LatestTrek';
import { Typography as Text, Container, Grid, Button} from "@material-ui/core";
import Compare from '../components/Compare';
import Card from '../components/colourize/Card';
import { Section } from 'react-scroll-section';
import Bibtex from '../components/colourize/Bibtex';
// import Left1 from '../components/colourize/pictures/left.jpg'
// import Left2 from '../components/colourize/pictures/left2.jpg'
// import Left3 from '../components/colourize/pictures/left3.jpg'
// import Right1 from '../components/colourize/pictures/right.jpg'
// import Right2 from '../components/colourize/pictures/right2.jpg'
// import Right3 from '../components/colourize/pictures/right3.jpg'
const useStyle=makeStyles(()=>({
    root:{

    },
    topbar:{

    },
    title:{
        // paddingRight:'10px'
        // width:'100%',
        // boxSizing:'border-box'
        // backgroundRepeat:'no-repeat',
        // backgroundSize:'100% 100%',
        // width:'100%',
        // minWidth:'1130px',
        // backgroundImage:`url(${title_Back})`
        // height:"500px"
    },
    compare:{
        // backgroundColor:'red',
        paddingTop:'70px',
        paddingBottom:'50px',
        '& .title':{
            paddingBottom:'30px'
        }

    },
    carousel:{

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
    card:{
        width:'1000px',
        // backgroundColor:'red',
        margin:'0 auto',
        

    }
}))
export default function Colourize() {
    const classes=useStyle();
    const imags=["left.jpg","right.jpg","left2.jpg",
    "right2.jpg","left3.jpg","right3.jpg"]
  return (
    <div className={classes.root}>
        <div className={classes.topbar}>
            <TopBar/>
        </div>
        <div className={classes.title}>
            <Title/>
        </div>
        <Section id='carousel'>
        <div className={classes.compare}>
            <div className='title'>
        <Text variant="h4" color="textPrimary" align="center" gutterBottom>
             项目案例
        </Text>
        </div>
        <Compare images={imags}/>
        </div>
        </Section>
        <div className={classes.card}>
        <Card/>
        </div>
        <div>
            <Bibtex/>
        </div>
        <Section id='contact'>
        <div className={classes.footer}>
            <Footer/>
        </div>
        </Section>
    </div>
  )
}
