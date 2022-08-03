import React from 'react'
import TopBar from '../components/gesture/TopBar'
import Footer from '../components/gesture/Footer'
import Carousel from '../components/gesture/Carousel'
import Card from '../components/gesture/Card'
import Title from '../components/gesture/Title'
import { makeStyles } from "@material-ui/core/styles";
import title_Back from "../components/gesture/pictures/title_Back.jpg"
import { Section } from 'react-scroll-section'
const useStyle=makeStyles(()=>({
    root:{

    },
    topbar:{

    },
    title:{
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%',
        width:'100%',
        minWidth:'1130px',
        backgroundImage:`url(${title_Back})`
        
    },
    card:{
        '& .header':{
            paddingTop:'40px'
        },
        '& .sub_header':{

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
    }
})

)
export default function Demo() {
    const classes=useStyle();
  return (
    <div className={classes.root}>
        <div className={classes.topbar}>
            <TopBar/>
        </div>
        <div className={classes.title}>
            <Title/>
        </div>
        <Section id='carousel'>
        <div className={classes.carousel}>
            <Carousel/>
        </div>
        </Section>
        <Section id='trou'>
        <div className={classes.card}>
            <Card/>
        </div>
        </Section>
        <Section id='contact'>
        <div className={classes.footer}>
            <Footer/>
        </div>
        </Section>
    </div>
  )
}
