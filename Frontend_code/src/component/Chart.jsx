import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Form } from "react-bootstrap";
import { useState } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = ({ cities, setSelectedCity ,selectedCity, keys, days, obj, allData}) => {
  const [selectedData,setSelectedData]=useState("temperature")

          let Min=0;
          let Max = 0;
          let  newData=[];

              allData?.data?.forEach((ele)=>{
                newData.push(ele[selectedData])
                Max= obj[selectedData]
               }
                )
  const data = {
    labels: days,//["Mon", "Tue", "Wed", "Thu", "Friday"],
    datasets: [
      {
        label: "Popularity of colours",
        data: newData,
        // backgroundColor: [
        //   "rgba(255, 255, 255, 0.6)",
        //   "rgba(255, 255, 255, 0.6)",
        //   "rgba(255, 255, 255, 0.6)",
        // ],
        backgroundColor: "black",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.4,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugin: {
      legend: true,
    },
    scales: {
      y: {
        min: Min,
        max: Max,
      },
    },
  };
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Form.Select
          aria-label="Default select example"
          style={{ width: "30%" }}
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value={""}>Select City</option>
          {cities &&
            cities.length > 0 &&
            cities.map((city) => {
              return <option value={city}>{city}</option>;
            })}
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          style={{ width: "30%" }}
          value={selectedData}
          onChange={(e) => setSelectedData(e.target.value)}
        >
          <option>Select whether type</option>
          {keys &&
            keys.length > 0 &&
            keys.map((key) => {
              return <option value={key}>{key}</option>;
            })}
        </Form.Select>
      </div>

      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
