import http from "http";
import url from "url";
import * as weatherdata from "./weather-app/modules/functions.mjs";

// readfile();
function getData(req, res) {
  let q = url.parse(req.url, true);
  let path = q.pathname;

  if (path === "/get") {
    let place = q.query.place;

    if (place !== undefined) {
      const result = weatherdata.findLocation(place);
      res.write(JSON.stringify(result));
      res.end();
    }
  }
  if (path === "/cities") {
    res.end(JSON.stringify(weatherdata.allCities()));
  }
}

http
  .createServer(function (req, res) {
    try {
      res.setHeader("Access-Control-Allow-Origin", "*");

      getData(req, res);
    } catch (err) {
      console.log(err);
    }
  })
  .listen(5050);
console.log("It's running at http://127.0.0.1:5050");
