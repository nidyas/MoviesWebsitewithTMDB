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
    <BottomNavigation 
    style={{'background-color':'black'}}
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    showLabels
    

  >
    <BottomNavigationAction
      style={{ color: "white" }}
      label="Trending"
      icon={<WhatshotIcon />}
    />
    <BottomNavigationAction
      style={{ color: "white" }}
      label="Movies"
      icon={<MovieIcon />}
    />
    <BottomNavigationAction
      style={{ color: "white" }}
      label="TV Series"
      icon={<TvIcon />}
    />
    <BottomNavigationAction
      style={{ color: "white" }}
      label="Search"
      icon={<SearchIcon />}
    />
  </BottomNavigation>
  );
}
