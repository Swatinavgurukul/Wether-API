
const request=require('request');

var readlineSync = require('readline-sync');
var cityName = readlineSync.question('Inter the city name : - ');
// console.log(cityName);

var url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4dd1ac5a32c35cde09f36265c3c2cf94`
console.log(url)
const callApiReq=(callback)=>{
    request(url,{json:true},(err,req,body)=>{
        if(err){
            return callback(err);
        }
        return callback(body);
    });
}
module.exports.callApi=callApiReq;