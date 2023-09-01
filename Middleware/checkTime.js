

function checkFields(req, res, next){
      
    if(req.body.temperature == "" || req.body.temperature == undefined){
        return  res.status(400).json({
            result: false,
            message : "Please provide temperature"
        })
    }
    if(req.body.city == "" || req.body.city == undefined){
        return res.status(400).json({
            result: false,
            message : "Please provide city"
        })
    }
    if(req.body.humidity == "" || req.body.humidity == undefined){
        return  res.status(400).json({
            result: false,
            message : "Please provide humidity"
        })
    }
    if(req.body.precipitation == "" || req.body.precipitation == undefined){
        return  res.status(400).json({
            result: false,
            message : "Please provide precipitation"
        })
    }
    if(req.body.wind_speed == "" || req.body.wind_speed == undefined){
        return  res.status(400).json({
            result: false,
            message : "Please provide wind_speed"
        })
    }
    if(req.body.wind_direction == "" || req.body.wind_direction == undefined){
        return  res.status(400).json({
            result: false,
            message : "Please provide wind_direction"
        })
    }
    if(req.body.pressure == "" || req.body.pressure == undefined){
        return  res.status(400).json({
            result: false,
            message : "Please provide pressure"
        })
    }
    if(req.body.cloud_cover == "" || req.body.cloud_cover == undefined){
        return  res.status(400).json({
            result: false,
            message : "Please provide cloud_cover"
        })
    }
    if(req.body.visibility == "" || req.body.visibility == undefined){
        return  res.status(400).json({
            result: false,
            message : "Please provide visibility"
        })
    }
    if(req.body.week_days == "" || req.body.week_days == undefined){
        return res.status(400).json({
            result: false,
            message : "Please provide week_days"
        })
       
    }
    next();
}

module.exports = { checkFields}

