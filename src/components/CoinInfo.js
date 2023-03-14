import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import { CryptoState } from "../CryptoContext";
import {
  CircularProgress,
  createTheme,
  
  ThemeProvider,
} from "@material-ui/core";
import useStyles from "./Styles";

const CoinInfo = ({coin}) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    //setflag(true);
    setHistoricData(data.prices);
  };
 console.log("data",historicData);

  const classes = useStyles();


  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);
  console.log(coin);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });



  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.cointainer}>
      {!historicData ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
          <Line />
          { historicData && historicData.map((coin) => (
               <div>

               </div>
            ))}
           
          </>
        )}
      </div>

    </ThemeProvider>
  )
}

export default CoinInfo