const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json(url).then(function(receivedData){
    loc=receivedData.map(row => row.location);
    lat=receivedData.map(row => row.location.latitude);
    long=receivedData.map(row => row.location.longitude);
    coords=[{
        coords[element] = {loc[index], lat[index], long[index];
    });
