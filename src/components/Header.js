import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { AppBar, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { CryptoState } from "../CryptoContext";


const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "yellow",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  const classes = useStyles();
  const navigate=useNavigate();
  const{currency,setCurrency }=CryptoState();
  console.log(currency);
  
  return (
    <ThemeProvider theme={darkTheme}>
   <AppBar color='transparent' position='static'>
    <cointainer>
      
      <Toolbar>
        <Typography  
        onClick={() => navigate('/')} 
        variant="h6" 
        className={classes.title}
        >     Crypto Hunter    </Typography>
        <Select 
        variant="outlined" 
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        style={{ width: 100, height: 40, marginRight: 15 }}>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"INR"}>INR</MenuItem>
          </Select> 
      </Toolbar>
     
    </cointainer>
    
   </AppBar>
   </ThemeProvider>
  )
}


export default Header