import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
    <Typography variant="h3" align='center' gutterBottom>
        项目列表
    </Typography>
    <ul>
        <li><Link to='/colourize'>图像上色</Link></li>
        <li><Link to='/gesture'>手势识别</Link></li>
        <li><Link to='/detection'>行人检测</Link></li>
    </ul>
      </div>
  )
}
