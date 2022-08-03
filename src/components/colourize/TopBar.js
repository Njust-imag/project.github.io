import React from "react";
import {
  Typography as Text,
  AppBar,
  CssBaseline,
  Toolbar,
  Box
} from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import { PhotoCamera } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
// import Pic from "./Pic";
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
// import Item from "@material-ui/core/ListItem";
// import { SectionLink } from "react-scroll-section";
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import MenuItem from '@mui/material/MenuItem';
import {
  useScrollSections,
  ScrollingProvider,
  Section,
} from "react-scroll-section";
import Scrollspy from 'react-scrollspy'
import PropTypes from 'prop-types';
// const homeSection = useScrollSection();
const TopBar = (props) => {
  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  return (
    <>
    <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar >
          <PhotoCamera />
          <Text variant="h6" align="center" style={{ marginLeft: 10 }} >
             图像上色
          </Text>
          <div className="topbar_button">
          <Scrollspy items={ ['carousel', 'trou', 'contact'] } currentClassName="is-current">
          <Button  color="inherit" href="#carousel" className="button" size='large' >
          项目展示
        </Button> 
        <Button  color="inherit" href="#trou" size='large' className="button" >
          项目介绍
        </Button>
        <Button  color="inherit" href="#contact" size='large' className="button" >
          关于我们
        </Button>
        </Scrollspy> 
        </div>
          </Toolbar>
          
        </AppBar>
      </ElevationScroll>
      <Toolbar />
     
    </>
  );
};

export default TopBar;