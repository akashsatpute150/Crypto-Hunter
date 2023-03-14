import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
//import { makeStyles } from "@material-ui/core";
import {  Typography } from "@material-ui/core";
import React from "react";
import { numberWithCommas } from "../components/CoinsTable";
import { LinearProgress } from "@material-ui/core";
const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();
  
  const fetchCoin = async () => {
    const { data } =  await axios.get(SingleCoin(id));
    

    setCoin(data);
  };
  console.log(coin);
 useEffect(() => {
     fetchCoin();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;


 return(
    <div 
    style={{ display: "flex",
    
      flexDirection: "column",
      alignItems: "center",
    }}
    >
        <div 
        style={{display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25,
      //  borderRight: "2px solid grey",
    }}
        >
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" 
        style={{
            fontWeight: "bold",
            marginBottom: 20,
           fontFamily: "Montserrat",
        }}
        >
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" 
        style={{
         width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
        }}
        >
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div>
            <spam style={{ display: "flex" }}>
                <Typography style={{fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",}}>
                Rank:
                
                </Typography>
                &nbsp; &nbsp;
                <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
               {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
                
            </spam>
            <span style={{ display: "flex" }}>
            <Typography variant="h5" >
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" >
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>

        </div>
        </div>
         {/* <CoinInfo coin={coin}/> */}
    </div>
 );


  };

  

export default CoinPage;