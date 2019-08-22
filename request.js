const request=require('request');
var url="https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=4dd1ac5a32c35cde09f36265c3c2cf94"

const callApiReq=(callback)=>{
    request(url,{json:true},(err,req,body)=>{
        if(err){
            return callback(err);
        }
        return callback(body);
    });
}
module.exports.callApi=callApiReq;