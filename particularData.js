

const fs = require('fs');


fs.readFile('./wetherData.json', 'utf8', function(err, contents) {
  if (err) {
    console.log(err)
  } else {
    const data = JSON.parse(contents);
    console.log(data)
    var name=data["name"];
    console.log(name)
    var id = data["id"];
    console.log(id)
    var cod = data["cod"];
    console.log(cod)
    var lon = data.coord.lon;
    console.log(lon)
    var lat = data.coord.lat;
    console.log(lat)
    let wether = { 
        name:[name],
        id: id,
        cod:cod,
        lon: lon,
        lat: lat
};
      let dataWether = JSON.stringify(wether);
      console.log(dataWether)
      fs.writeFileSync('wetherParticularData.json', dataWether);
     
    // ... use the data object here ...
  }
});


