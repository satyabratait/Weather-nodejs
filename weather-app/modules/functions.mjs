import { weatherdata } from "./database.mjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);

const __dirname = path.dirname(__filename);
// console.log(__dirname);

// let filepath = "./weather-app/modules/database.txt",
let filepath = "./database.txt", encoding ="utf8";

let obj = {
  id: 17,
  location: {
    country: "",
    name: "",
    region: "",
  },
  current: {
    tempC: null,
    tempF: null,
    humidity: null,
    cloud: null,
    condition: {
      text: "",
    },
  },
};

//findlocation
export function findLocation(locationInfo) {
  // console.log(typeof locationInfo);
  let data = readfile(filepath,encoding);
  const result = data.find(
    (item) => item.location.name.toLowerCase() == locationInfo.toLowerCase()
  );
  console.log(result);
  return result;
}
// findLocation('oslo');

//addlocation
export function addLocation(
  loc,
  region,
  country,
  tempC,
  tempF,
  humidity,
  cloud,
  text
) {
  let data = readfile(filepath,encoding);

  let i = data.length;
  if (
    data.find((item) => item.location.name.toLowerCase() != loc.toLowerCase())
  ) {
    i += 1;
    obj.id = i;
    console.log(obj.id);
    obj.location.name = loc;
    obj.location.region = region;
    obj.location.country = country;
    obj.current.tempC = tempC;
    obj.current.tempF = tempF;
    obj.current.humidity = humidity;
    obj.current.cloud = cloud;
    obj.current.condition.text = text;

    data.push(obj);
    writefile(filepath,data);
    console.log(data);
  } else {
    console.log("location exists");
  }
}
// addLocation('bengaluru','karnataka','india',34,93,25,100,'cloudy');

//deletelocation
export function deleteLocation(locationInfo) {
  let data = readfile(filepath,encoding);
  let index = data.findIndex(
    (item) => item.location.name.toLowerCase() == locationInfo.toLowerCase()
  );
  if (index > -1) {
    data.splice(index, 1);
    writefile(filepath,data);
    console.log(data);
  } else {
    console.log("location not found");
  }
}
// deleteLocation('bengaluru')

//allcities
export function allCities() {
    let cities=[]
  const data = readfile(filepath,encoding);
  data.forEach((element) => {
    // console.log(element.location.name);
    cities.push(element.location.name)
  });
  console.log(cities);
  return cities
}
// allCities();

//read the txt file
function readfile(filepath,encoding) {
  try {
    const data = fs.readFileSync(path.resolve(__dirname,filepath), encoding);
    const obj = JSON.parse(data);
    return obj;
  } catch (err) {
    console.log(err);
  }
                                                                                                                                    
}


//write in file
function writefile(filepath,data) {
    fs.writeFileSync(path.resolve(__dirname,filepath), JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
      }
    });
}
  
  //updatelocation
  // export function updatetempcLocation(locationInfo) {
  //     let updatearray = locationInfo.split(" ");
  //     let index = weatherdata.findIndex(
  //       (item) => item.location.name.toLowerCase() == updatearray[0].toLowerCase()
  //     );
  //     if (index > -1) {
  //       weatherdata[index].current.tempC = updatearray[1];
  //     } else {
  //       console.log("location not found");
  //     }
  //   }
  
  //   export function updatetempfLocation(locationInfo) {
  //     let updatearray = locationInfo.split(" ");
  //     let index = weatherdata.findIndex(
  //       (item) => item.location.name.toLowerCase() == updatearray[0].toLowerCase()
  //     );
  //     if (index > -1) {
  //       weatherdata[index].current.tempF = updatearray[1];
  //     } else {
  //       console.log("location not found");
  //     }
  //   }
  
  //   export function updatehumidityLocation(locationInfo) {
  //     let updatearray = locationInfo.split(" ");
  //     let index = weatherdata.findIndex(
  //       (item) => item.location.name.toLowerCase() == updatearray[0].toLowerCase()
  //     );
  //     if (index > -1) {
  //       weatherdata[index].current.humidity = updatearray[1];
  //     } else {
  //       console.log("location exists");
  //     }
  //   }
  
  //   export function updatecloudLocation(locationInfo) {
  //     let updatearray = locationInfo.split(" ");
  //     let index = weatherdata.findIndex(
  //       (item) => item.location.name.toLowerCase() == updatearray[0].toLowerCase()
  //     );
  //     if (index > -1) {
  //       weatherdata[index].current.cloud = updatearray[1];
  //     } else {
  //       console.log("location exists");
  //     }
  //   }
  
  //   export function updatetextLocation(locationInfo) {
  //     let updatearray = locationInfo.split(" ");
  //     let index = weatherdata.findIndex(
  //       (item) => item.location.name.toLowerCase() == updatearray[0].toLowerCase()
  //     );
  //     if (index > -1) {
  //       weatherdata[index].current.condition.text = updatearray[1];
  //     } else {
  //       console.log("location exists");
  //     }
  //   }
  
  //file system
  // console.log(obj.toString());
  // fs.appendFile('./database.mjs',JSON.stringify(obj),err =>{
  //     console.log(1);
  //     if (err) {
  //         console.log(err);
  //     }
  // });
  // fs.readFile('./database.mjs','utf8', (err, data) => {
  //     if (err) {
  //         console.error(err);
  //         return;
  //       }
  //       console.log(data.toString());
  // });
  // fs.writeFile('./database.mjs',weatherdata.toString(), err => {
  //     if (err) {
  //         console.error(err);
  //       }
  // })
  // fs.readFile('./database.mjs', function(err, data) {
  // fs.appendFile('./database.mjs',obj.toString(),err =>{
  //     console.log(1);
  //     if (err) {
  //         console.log(err);
  //     }
  //     console.log(weatherdata);
  // });
  //   });
  
  // console.log(index);
  
  // function readfile() {
  //   // fs.readFile('./database.txt','utf8', (err, data) => {
  //   //     if (err) {
  //   //         console.error(err);
  //   //         return;
  //   //       }
  //   //   content = util.format(data);
  //   // performTask(data);
  //   //let obj = JSON.parse(data);
  //   //return obj;
  //   //console.log(obj);
  //   try {
  //     const data = fs.readFileSync("./database.txt", "utf8");
  //     const obj = JSON.parse(data);
  //     return obj;
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   // let obj = JSON.parse(data);
  //   // console.log(obj);
  //   //   console.log(data`                                                                                                                                                                        `);
  // }
  
  // function performTask(content){
  //     const obj = JSON.parse(content)
  //     // console.log(obj);
  //     console.log(obj.find((item) => item.id == 4));
  //     // console.log(typeof content);
  
  // }
  