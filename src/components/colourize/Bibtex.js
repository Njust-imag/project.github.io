import { makeStyles } from '@material-ui/core'
import React from 'react'
import {
    Typography as Text
  } from "@material-ui/core";
const useStyles=makeStyles(()=>({
    root:{
        width:'600px',
        margin:'0 auto',
        marginBottom:'80px'
    },
    title:{
        paddingBottom:'20px'
    },
    content:{
        backgroundColor:'#f5f5f5',
        padding:'1.5em 1.5em',
        height:'200px',
        alignItems:'center',
        display:'-webkit-flex'

    }
    
}))
export default function Bibtex() {
    const classes=useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.title}>
        <Text variant="h5" >
             BibTex
        </Text>
        </div>
        <div className={classes.content}>
        @article{'{'}wan2022oldfilm,<br/>
  title={'{'}Bringing Old Films Back to Life{'}'},<br/>
  author={'{'}Wan, Ziyu and Zhang, Bo and Chen, Dongdong and Liao, Jing{'}'},<br/>
  journal={'{'}CVPR{'}'},<br/>
  year={'{'}2022{'}'}<br/>
{'}'}

        </div>
    </div>
  )
}
