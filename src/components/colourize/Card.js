import { makeStyles } from '@material-ui/core'
import { width } from '@mui/system'
import React from 'react'
import { Typography as Text, Container, Grid, Button} from "@material-ui/core";
import card1 from "../../components/colourize/pictures/left.jpg"
const useStyles=makeStyles(()=>({
    root:{
        
       
        paddingBottom:'50px',
        paddingTop:'50px'
    },
    title:{
        paddingBottom:'50px'
    },
    container:{
        // backgroundColor:'red',
        height:'200px',
        // width:'1200px',
        borderBottom:'1px solid #eee',
        // backgroundColor:'blue',
        // margin:'0 ,auto',
        '& img':{
            height:'200px',
            float:'right',
            width:'300px'
        },
        '& .title':{
            marginRight:'400px'
        }
    }
}))
export default function Card() {
    const classes=useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.title}>
        <Text variant="h4" color="textPrimary" align="center" gutterBottom>
              我们的优势
       </Text>
        </div>
        <div className={classes.container}>
            <img src={card1}></img>
            <div className='title'>
            <Text variant="h5" color="textPrimary" align="left" gutterBottom>
              功能强大
           </Text>
           <Text variant="body1" color="textPrimary" align="left" gutterBottom>
           开展怀旧等主题活动时，可接入服务，开发活动小程序或网页等。参与活动者只需上传黑白照片，即可立刻获得彩色照片
           </Text>
           </div>
        </div>

    </div>
  )
}
