import React from "react";
import Button from "./Button";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

function Graph(props) {
  // setting for Highcharts graph
  const options = {
    chart: {
      reflow: true,
    },
    rangeSelector: {
      inputEnabled: false,
      buttonTheme: {
        visibility: "hidden",
      },
      labelStyle: {
        visibility: "hidden",
      },
    },
    title: {
      text: "FX Empire - Stock API",
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      series: {
        showInLegend: true,
      },
    },
    series: [
      {
        type: "ohlc",
        id: "aapl",
        name: "AAPL Stock Price",
        data: props.data,
      },
    ],
    containerProps: {},
    credits: {
      text: "FX Empire",
      href: "https://www.fxempire.com/",
      style: {
        color: "grey",
        fontSize: "15px",
      },
    },
  };

  return (
    <section className="graph-section flex column align-center">
      <Button onChangeInterval={props.onChangeInterval} />

      <div className="graph-container">
        <HighchartsReact
          containerProps={{ style: { height: "100%" } }}
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        />
      </div>
    </section>
  );
}

export default Graph;
