import http from "http";
import url from "url";
import * as weatherdata from "./weather-app/modules/functions.mjs";
// import express from "express";
// const app = express();

// let weatherdata = require('./functions.mjs')

// console.log(path.resolve('./weather-app/modules/function.mjs'));
// function readfile(){
//     try {
//         const data = fs.readFileSync(path.resolve('./weather-app/modules/database.txt'), 'utf8');
//         console.log(data);
//         const obj = JSON.parse(data);
//         return obj;
//       } catch (err) {
//         console.log(err);
//       }
// }

// readfile();

http.createServer( function (req, res) {
    // app.get('/',
    // let data = weatherdata.readfile();
   try{
    res.setHeader('Access-Control-Allow-Origin','*')

    let q = url.parse(req.url, true);
    let path = q.pathname
    // console.log(typeof q.query.place);
    
   if(path==="/get"){
    let place = q.query.place;

    if (place!=undefined) {
       
      const result = weatherdata.findLocation(place);
      // console.log(typeof result);
      res.write(JSON.stringify(result));
      res.end()
  }
   }
   if(path=="/cities"){
    res.end(JSON.stringify(weatherdata.allCities()))
   }
   }
   catch(err){
    console.log(err);
   }
    // if (req.url === "/find") {
    //   // const result = data.find(
    //   //   (item) => item.location.name.toLowerCase() == place.toLowerCase()
    //   // );
    //   q = url.parse(req.url, true);
    //   console.log(1);
    //   console.log(q.search);
    // }

    // res.write("hello world");
    // res.end();
    // res.setHeader('Content-type','text/plain');
  })
  .listen(5050);
console.log("It's running at http://127.0.0.1:5050");
