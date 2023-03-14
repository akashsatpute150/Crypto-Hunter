
import { makeStyles } from "@material-ui/core";
import React from "react";
import './App.css'
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Header from "./components/Header"
import CoinPage from "./Pages/CoinPage";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App(){
  const classes = useStyles();

  return(
  <div className={classes.App}>
    
    <Router>
    <Header/>
  
      <Routes>
        <Route path='/' element={<Homepage/>} exact/>
        <Route path='/coins/:id' element={<CoinPage/>} exact/>
      </Routes>
    </Router>
  </div>);
}
export default App
