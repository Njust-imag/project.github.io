import React from 'react'
import { Typography as Text, Container, Grid, Button, makeStyles } from "@material-ui/core";
const useStyles=makeStyles(()=>({
    root:{

    },
    body:{
        margin:'0 auto',
        width:'1200px',
        border:'1px solid #ccc',
        // backgroundColor:'red',
        height:'180px',
        marginTop:'50px',
        marginBottom:'50px',
        '& .left':{
            height:'180px',
            float:'left',
            width:'50%',
            padding:'25px 25px 35px',
            borderRight:'1px solid #ccc',
            '& .content':{
                marginTop:'30px'
            }
        },
        '& .right':{
            height:'180px',
            width:'50%',
            padding:'25px 25px 35px',
            float:'left',
            boxSizing:'border-box',
            '& .content':{
                marginTop:'30px'
            }
        }
    },
    title:{

    }
}))
export default function Ability() {
    const classes=useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.title}>
        <Text variant="h4" color="textPrimary" align="center" gutterBottom>
        应用场景
      </Text>
      </div>
      <div className={classes.body}>
        <div className='left'>
            <div className='title'>
            <Text variant="h5" color="textPrimary" gutterBottom>
            应用场景
            </Text>
            </div>
            <div className='content'>
            <Text variant="body1" color="textPrimary"  gutterBottom>
            利用宠物识别技术，对照片进行检测及识别，并根据识别结果对照片进行分类。
            </Text>
            </div>
        </div>
        <div className='right'>
        <div className='title'>
            <Text variant="h5" color="textPrimary" gutterBottom>
            应用场景
            </Text>
            </div>
            <div className='content'>
            <Text variant="body1" color="textPrimary"  gutterBottom>
            利用宠物识别技术，对照片进行检测及识别，并根据识别结果对照片进行分类。
            </Text>
            </div>
        </div>
      </div>
    </div>
  )
}
