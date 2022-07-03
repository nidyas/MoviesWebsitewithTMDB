import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from "@material-ui/core/styles";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import TvIcon from "@material-ui/icons/Tv";
import { useNavigate } from "react-router-dom";
import { NavigateBefore } from '@material-ui/icons';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const useStyles=makeStyles({
    root:{
      width:500,
      position:"fixed",
      bottom:0,
      backgroundColor:'#2d313a',
      zIndex:100,
    },
  });

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  
  const history = useNavigate();

  React.useEffect(() => {
    if (value === 0) {
       history('/');
    } else if (value === 1) {
      history('/m');
    } else if (value === 2) {
      history('/s');
    } else if (value === 3) {
      history('/search');
    }
  }, [value, history]);


  return (
    <>
    <BottomNavigation 
    style={{  background:" linear-gradient(54deg, #196a7e, #205579)"}}
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    showLabels
    

  >
    <BottomNavigationAction
      style={{ color: "orange" }}
      label="Trending"
      icon={<WhatshotIcon />}
    />
    <BottomNavigationAction
      style={{ color: "black" }}
      label="Movies"
      icon={<MovieIcon />}
    />
    <BottomNavigationAction
      style={{ color: "white" }}
      label="TV Series"
      icon={<TvIcon />}
    />
      <BottomNavigationAction
      style={{ color: "red" }}
      label="TV Series"
      icon={<FavoriteIcon />}
    />

  </BottomNavigation>
  <div className='test'style={{
      display:'flex',
      backgroundColor:"black",
      color:"white"
      
               }} >
  <div className='SocialList' style={{
      display:'flex',
      backgroundColor:"black",
      color:"white"
      
               }}>
          <ul class="socials"  >
            <a href="https://www.facebook.com/yayadi2" ><FacebookIcon style={{color:"	white"}} ></FacebookIcon></a>
            <a href="https://github.com/nidyas"><GitHubIcon style={{color:"white"}}></GitHubIcon> </a>
            <a href="https://www.linkedin.com/in/yassine-ayadi-b5126a220/"><LinkedInIcon style={{ color:"white"}}></LinkedInIcon></a>
            <a href="https://twitter.com/JRssjtrunksJR"><TwitterIcon style={{color:"white"}}></TwitterIcon></a>
          </ul>
      </div>
   
      <div class="footer-bottom" style={{
        marginLeft:"100rem",
        backgroundColor:"black",
        fontFamily:"sans-serif",
        color:"white",
   
      }}>
          <p>Copyright&copy;2022  by <span>Unknown.EXE</span></p>
      </div>
      </div>
      
  </>
  );
}
