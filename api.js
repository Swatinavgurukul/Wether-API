const apiCallFromRequest=require('./request');
const http =require('http')
const fs = require('fs')
// console.log(apiCallFromRequest.callApi)
http.createServer((req,res)=>{
    if(req.url==="/request"){
        apiCallFromRequest.callApi(function(response){
            res.write(JSON.stringify(response));
            console.log("------");
            console.log(response)
            let data = JSON.stringify(response);
            // console.log(data)
            fs.writeFileSync('wetherData.json', data);
            res.end();
            
        });
        
    };
    
}).listen(3000);

console.log("service running on 3000 port....");

