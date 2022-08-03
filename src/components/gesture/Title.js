import React from "react";
import { Typography as Text, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Divider from '@material-ui/core/Divider';
const useStyles=makeStyles(()=>({
    sub_header:{
        paddingBottom: '50px',
    },
    sub_title:{
        paddingBottom:'80px',
        ' & h4':{
            lineHeight:'30px',
        }
    },
    header:{
        '& h1':{
            paddingTop:'100px',
            paddingBottom:'50px',
        }
    }
}))
const Title = () => {
    const classes =useStyles();
  return (
    <>
      <Container maxWidth="sm">
        <div className={classes.header}>
          <Text variant="h1" color="textPrimary" align="center" gutterBottom>
            手势识别
          </Text>
        </div>
        <div className={classes.sub_header}>
        <Text variant="h5" align="center" color="textSecondary" paragraph>
        设计了一种通用的视觉手势控制器架构，它包含四个层次，其中前三层系统层、
手部检测层、手势识别层封装为固定模块，而最后的应用控制层则可以根据应用需求自定
义适配替换。利用该通用控制器架构，本文设计了一个桌面端控制程序作为手势控制应用
实例，实现了光标移动、点击操作、音量调节和识别进程控制等十类操作，证明了本文提
出的控制器架构的通用性和实用性。
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
      <Divider />
    </>
  );
};

export default Title;