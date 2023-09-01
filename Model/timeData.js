const mongoose = require('mongoose');
const timeSeriesSchema = new mongoose.Schema({
    temperature: {
      type: Number,
      required: true,
    },
   city : {
      type: String,
      required: true,
    },
    humidity: {
        type: Number,
        required: true,
    }, 
    precipitation: {
        type: Number,
        required: true,
    }, 
    visibility: {
        type: Number,
        required: true,
    },  
    wind_speed: {
        type: Number,
        required: true,
    },  
    wind_direction: {
        type: Number,
        required: true,
    }, 
    cloud_cover: {
        type: Number,
        required: true,
    },  
    pressure: {
        type: Number,
        required: true,
    }, 
    week_days: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now();
        }

    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }
  });
  
  const TimeSeries = mongoose.model('TimeSeries', timeSeriesSchema);

  module.exports = TimeSeries;

 