import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
let filepath = "./database.txt",
  encoding = "utf8";

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
  let data = readfile(filepath, encoding);
  const result = data.find(
    (item) => item.location.name.toLowerCase() === locationInfo.toLowerCase()
  );
    console.log(result);
    return result;
}

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
  let data = readfile(filepath, encoding);

  let i = data.length;
  if (
    data.find((item) => item.location.name.toLowerCase() !== loc.toLowerCase())
  ) {
    i += 1;
    obj.id = i;
    obj.location.name = loc;
    obj.location.region = region;
    obj.location.country = country;
    obj.current.tempC = tempC;
    obj.current.tempF = tempF;
    obj.current.humidity = humidity;
    obj.current.cloud = cloud;
    obj.current.condition.text = text;

    data.push(obj);
    writefile(filepath, data);
    console.log(data);
  } else {
    console.log("location exists");
  }
}

//deletelocation
export function deleteLocation(locationInfo) {
  let data = readfile(filepath, encoding);
  let index = data.findIndex(
    (item) => item.location.name.toLowerCase() === locationInfo.toLowerCase()
  );
  if (index > -1) {
    data.splice(index, 1);
    writefile(filepath, data);
    console.log(data);
  } else {
    console.log("location not found");
  }
}

//allcities
export function allCities() {
  let cities = [];
  const data = readfile(filepath, encoding);
  data.forEach((element) => {
    cities.push(element.location.name);
  });
  console.log(cities);
  return cities;
}

//read the txt file
function readfile(filepath, encoding) {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, filepath), encoding);
    const obj = JSON.parse(data);
    return obj;
  } catch (err) {
    console.log(err);
  }
}

//write in file
function writefile(filepath, data) {
  fs.writeFileSync(
    path.resolve(__dirname, filepath),
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
}
