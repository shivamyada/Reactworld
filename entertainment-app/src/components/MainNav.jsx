
import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';

export default function SimpleBottomNavigation() {
  
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  style={{colour:"white"}}label="movies" icon={<MovieIcon />} />
        <BottomNavigationAction  style={{colour:"white"}}label="trending" icon={<WhatshotIcon/>} />
        <BottomNavigationAction  style={{colour:"black"}}label="tvseries" icon={<LiveTvIcon />} />
        <BottomNavigationAction  style={{colour:"white"}}label="search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}