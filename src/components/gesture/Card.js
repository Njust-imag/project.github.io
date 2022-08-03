import React from 'react'
import card1 from '../../components/gesture/pictures/card1.jpg'
import module from "../../components/gesture/pictures/module.jpg"
import easy1 from "../../components/gesture/pictures/easy1.jpg"
import {
    Typography as Text,
    AppBar,
    CssBaseline,
    Toolbar,
    Grid,
    Container,
    Box,
    makeStyles
  } from "@material-ui/core";
const useStyles=makeStyles(()=>({
  root:{
    width:'1000px',
    margin:'0 auto',
    '& .header':{
      marginTop:'50px'
    },
    '& .sub_header':{
      width:'600px',
      margin:'0 auto',
      paddingBottom:'30px'
    }
  },
  container:{
    height:'200px',
    marginTop:'50px',
    '& img':{
        height:'200px',
        float:'right',
        width:'300px'
    },
    '& .title':{
        marginRight:'400px'
    }
  },
  containerl:{
    height:'200px',
    marginTop:'80px',
    '& img':{
        height:'200px',
        float:'left',
        width:'350px'
    },
    '& .title':{
        marginLeft:'500px'
    }
  },
  easy:{
    marginTop:'80px',
    marginBottom:'50px',
    width:'1000px',
    '& .content':{
      display:'flex',
      justifyContent:'space-around',
    },
    '& .son':{
      backgroundColor:'red',
      display:'inline-block',
      height:'100%',
      width:'25%',

    }
  }

}))
export default function Card() {
  const classes=useStyles();
  return (
    <div className={classes.root} >
      <div className="header">
        <Text variant="h3" color="textPrimary" align="center" gutterBottom>
          功能强大
        </Text>
      </div>
      <div className="sub_header">
        <Text variant="h6" align="center" color="textSecondary" paragraph>
        设计了一个桌面端控制程序作为手势控制应用
实例，实现了光标移动、点击操作、音量调节和识别进程控制等十类操作，证明了本文提
出的控制器架构的通用性和实用性
        </Text>
      </div>
      <div className={classes.container}>
            <img src={card1}></img>
            <div className='title'>
            <Text variant="h5" color="textPrimary" align="left" gutterBottom>
              桌面应用
           </Text>
           <Text variant="body1" color="textPrimary" align="left" gutterBottom>
           一个以单目彩色摄像头作为输入，能够在嵌入式设备上在线识别，利用Socket通信实现C/S架构，拥有友好图形用户界面以及多种用户选择模式的完备手势桌面控制应用
           </Text>
           </div>
        </div>
        <div className={classes.containerl}>
        <img src={module}></img>
            <div className='title'>
            <Text variant="h5" color="textPrimary" align="right" gutterBottom>
              模型
           </Text>
           <Text variant="body1" color="textPrimary" align="right" gutterBottom>
           系统的模型为 ANN + Softmax 多分类网络，输入经过全连接层 + ReLU 激活 + Dropout
+ 全连接层 + ReLU + 全连接层 + Softmax 输出的网络
           </Text>
           </div>
        </div>
      <div className={classes.easy}>
      <div className="header">
        <Text variant="h3" color="textPrimary" align="center" gutterBottom>
          使用简单
        </Text>
      </div>
      <div className="sub_header">
        <Text variant="h6" align="center" color="textSecondary" paragraph>
        手势桌面控制应用利用手势实现了模拟光标、控制音量等功能，同时包含应用的通用操
作，如暂停、继续、关闭。
        </Text>
      </div>
      <div className='content'>
      <img className='son' src={easy1}></img>
      <img className='son' src={easy1}></img>
      <img className='son' src={easy1}></img>
      </div>
      </div>
     
      
     
    
</div>


  )
}
