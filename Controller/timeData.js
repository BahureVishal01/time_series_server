const TimeSeries = require("../Model/timeData");

module.exports.addData = async (req, res) => {
  try {
    const body = {
        temperature: req.body.temperature,
      city: req.body.city,
      humidity: req.body.humidity,
      week_days: req.body.week_days,
      visibility: req.body.visibility,
      cloud_cover: req.body.cloud_cover,
      pressure: req.body.pressure,
      wind_direction: req.body.wind_direction,
      wind_speed: req.body.wind_speed,
      precipitation: req.body.precipitation
    };
    const createdData = await TimeSeries.create(body);
    res
      .status(201)
      .json({ message: "Data saved successfully", data: createdData });
  } catch (error) {
      res.status(500).json({
      result:false,
      message: "Error while saving data to the database",
      error: error.message
    });
  }
};

module.exports.getTimeData = async (req, res) => {
  try {

    let data = await TimeSeries.find({city: req.query.city });
    
    if (data.length > 0) {
        let arr = [];
        data.filter((ele)=>{
        arr.push(ele.week_days)
        })
        
      res
        .status(200)
        .json({ result: true, message: "All time data..!", data: data, arr });
    } else {
      res.status(404).json({ result: true, message: "No Time Data found..!" });
    }
  } catch (error) {
    res.status(500).json({
      result: false,
      message: "Some internal server error",
    });
  }
};

module.exports.getCityName = async(req, res)=>{
    try {

           let data = TimeSeries.distinct('city')
           .then(cities => {
            res
                .status(200)
                .json({ result: true, message: "All City names..!", data: cities });
            
          })
          .catch(err => {
            res.status(404).json({ result: true, message: "No Time Data found..!", err:err });
          });
               
    } catch (error) {
        res.status(500).json({
            result: false,
            message: "Some internal server error",
            error: error.message
    })
}
}

