import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import Chart from "./Chart";
import { ApiConfig } from "../ApiService";
import axios from "axios";

const HomePages = () => {
  const [validated, setValidated] = useState(false);
  const [cities, setcities] = useState([]);
  const [allData, setallData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Pune");
  const [days, setDays] = useState([]);
  useEffect(() => {
    getCities();
  }, [selectedCity]);
  const keys = ['temperature', "humidity", "visibility","cloud_cover","pressure","wind_direction","wind_speed","precipitation"]
  const obj = {temperature:100, humidity:100, visibility:1000,cloud_cover:100,pressure:100,wind_direction:360,wind_speed:1000,precipitation:1}

 
  const getCities = async () => {
    try {
      const allCities = await axios.get(ApiConfig.GET_CITY);
      const allData = await axios.get(
        ApiConfig.GET_ALL_DATA + `?city=${selectedCity}`
      );
     setcities(allCities.data.data);
      setallData(allData.data);
      setDays(allData.data.arr)
      //console.log("Days",allData.data.arr)
    } catch (error) {
      console.log("catch error,", error);
    }
  };

  const [wheatherData, setwheatherData] = useState({
    city: "",
    temperature: "",
    humidity: "",
    precipitation: "",
    wind_speed: "",
    wind_direction: "",
    pressure: "",
    cloud_cover: "",
    visibility: "",
    week_days: "",
  });
 // console.log("wheatherData,", wheatherData);
  const onChangeHandle = (e) => {
    const { value, name } = e.target;
    setwheatherData({
      ...wheatherData,
      [name]: name === "city" || name === "week_days" ? value : Number(value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // myFunction(event)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // myFunction(event)
    }

    setValidated(true);
  };



  const myFunction = async(event) => {
    event.preventDefault();
    // Define the API endpoint
    
    // Make a POST request to the API
  let result=await  axios
    .post(ApiConfig.ADD_NEW_DATA, wheatherData)
    // .then((response) => {
    //   console.log(response,"final response=======>")
    // setResponseMessage(response.data.message);
    // })
    // .catch((error) => {
    // // Handle any errors here
    // console.error('Error submitting data:', error);
    // });
    alert(result?.data?.message)
    //console.log(result,"final 00response=======>")
    };
 
  return (
    <React.Fragment>
      <div style={{ padding: "20px 30px" }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                name="city"
                onChange={onChangeHandle}
              />
              <Form.Control.Feedback type="invalid">
                Please add City name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Temperature</Form.Label>
              <Form.Control
                required
                type="number"
                name="temperature"
                placeholder="Enter number less than 100"
                onChange={onChangeHandle}
              />
              <Form.Control.Feedback type="invalid">
                Please add Temperature.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Humidity</Form.Label>
              <Form.Control
                required
                type="numeric"
                name="humidity"
                placeholder="Enter number less than 100"
                onChange={onChangeHandle}
              />
              <Form.Control.Feedback type="invalid">
                Please add humidity.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Precipitation</Form.Label>
              <Form.Control
                required
                type="numeric"
                name="precipitation"
                placeholder="Enter number less than 1 in point"
                onChange={onChangeHandle}
              />
              <Form.Control.Feedback type="invalid">
                Please add Precipitation.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Wind Speed</Form.Label>
              <Form.Control
                required
                type="numeric"
                name="wind_speed"
                placeholder="Enter number less than 1000"
                onChange={onChangeHandle}
              />
              <Form.Control.Feedback type="invalid">
                Please add Wind speed.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Wind Direction</Form.Label>
              <Form.Control
                required
                type="number"
                name="wind_direction"
                placeholder="Enter number less than 360"
                onChange={onChangeHandle}
              />
              <Form.Control.Feedback type="invalid">
                Please add wind direction.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Pressure</Form.Label>
              <Form.Control
                required
                type="numeric"
                name="pressure"
                placeholder="Enter number less than 1000"
                onChange={onChangeHandle}
              />
              <Form.Control.Feedback type="invalid">
                Please add pressure.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Cloud Cover</Form.Label>
              <Form.Control
                required
                type="number"
                name="cloud_cover"
                placeholder="Enter number less than 100"
                onChange={onChangeHandle}
              />
              <Form.Control.Feedback type="invalid">
                Please add cloud cover.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Visibility</Form.Label>
              <Form.Control
                required
                type="number"
                name="visibility"
                placeholder="Enter number less than 1000"
                onChange={onChangeHandle}
              />
              <Form.Control.Feedback type="invalid">
                Please add Visibility.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Week Days</Form.Label>
              <Form.Control
                required
                type="text"
                name="week_days"
                onChange={onChangeHandle}
              />
              <Form.Control.Feedback type="invalid">
                Please add day.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="button" onClick={(e)=>{myFunction(e)}}>Submit form</Button>
        </Form>
      </div>
      <div style={{ marginTop: "20px", padding: "20px 30px" }}>
        <Chart cities={cities} setSelectedCity={setSelectedCity} selectedCity={selectedCity}keys = {keys} days = {days} allData={allData} obj={obj} />
      </div>
    </React.Fragment>
  );
};

export default HomePages;
