// use of callback fun for files -
const mainFile=require('./api');
const forParticularData=require('./particularData');

function callbackApi(firstFile, callback) {
    console.log(`raning my first file ${firstFile}.`);
    console.log("**************************************************")
    callback();
  }
  
  callbackApi(mainFile ,function() {
    console.log(`raning my secuond file ${forParticularData}`);

  });