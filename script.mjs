// console.log("Hello World");
import * as weatherinfo from "./modules/functions.mjs";


// weatherinfo.addLocation("bengaluru", "karnataka", "India", 32, 92, 22, 100, "Cloudy");
weatherinfo.findLocation('new york')
// weatherinfo.deleteLocation('kolkata');
// weatherinfo.allCities();




//previous operation demo works
// import readline from "readline";
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// function getweatherdata(loc) {
// //   const result = weatherdata.filter((item) => item.location.name.toLowerCase() == loc.toLowerCase());
//   const result = weatherdata.find((item) => item.location.name.toLowerCase() == loc.toLowerCase());
// //  console.log(result[0].location.country);
//     // console.log(result);
//     // console.log(result.current.condition.text);
//   return result.current.humidity;
// }
// getweatherdata("london");
// console.log(getweatherdata("london"));
// let ch ="n",menuChoice,locationInfo,updateLocation;
  // console.log(typeof choice);

// do {
//   console.log("Menu");
//   console.log("1.AddLocation");
//   console.log("2.UpdateLocation");
//   console.log("3.SearchLocation");
//   console.log("4.DeleteLocation");
//   rl.question("Enter your choice\n", function(string){
//     menuChoice = string;
//     console.log(menuChoice);
//     rl.close();
//   });
//   menuChoice = parseInt(menuChoice, 10);
//   // console.log(typeof menuChoice);
//   // console.log(menuChoice);

//   switch (menuChoice) {
//     case 1:
//       rl.question("Enter the info of location\n", function(string){
//         locationInfo = string;
//         rl.close();
//       });
//       weatherinfo.addLocation(locationInfo);
//       break;
    
//     case 2:
//       console.log("enter what you want to update");
//       console.log("1.temp in celsius");
//       console.log("2.temp in farenheit");
//       console.log("3.humidity");
//       console.log("4.cloud");
//       console.log("5.condition");
//       rl.question("Enter your choice\n", function(string){
//         updateLocation = string;
//         rl.close();
//       });
//       switch (updateLocation) {
//         case 1:
//           rl.question("Enter the city and tempC\n", function(string){
//             locationInfo = string;
//             rl.close();
//           });
//           weatherinfo.updatetempcLocation(locationInfo);
//           break;
        
//         case 2:
//           rl.question("Enter the city and tempF\n", function(string){
//             locationInfo = string;
//             rl.close();
//           });
//           weatherinfo.updatetempfLocation(locationInfo);
//           break;
        
//         case 3:
//           rl.question("Enter the city and humidity\n", function(string){
//             locationInfo = string;
//             rl.close();
//           });
//           weatherinfo.updatehumidityLocation(locationInfo);
//           break;

//         case 4:
//           rl.question("Enter the city and cloud\n", function(string){
//             locationInfo = string;
//             rl.close();
//           });
//           weatherinfo.updatecloudLocation(locationInfo);
//           break;

//         case 5:
//           rl.question("Enter the city and condition\n", function(string){
//             locationInfo = string;
//             rl.close();
//           });
//           weatherinfo.updatetextLocation(locationInfo);
//           break;
//         default:
//           console.log("Enter correct values");
//           break;
//       }
//       break;

//     case 3:
//       rl.question("Enter the location\n", function(string){
//         locationInfo = string;
//         rl.close();
//       });
//       weatherinfo.findLocation(locationInfo);
//       break;

//     case 4:
//       rl.question("Enter the location\n", function(string){
//         locationInfo = string;
//         rl.close();
//       });
//       weatherinfo.deleteLocation(locationInfo);
//       break;
    
//     default:
//       console.log("Enter correct choices");
//       break;
//   }

//   rl.question("Do you want to continue y or Y\n", function(string){
//     ch = string;
//     rl.close();
//   });
// } while (ch.toLowerCase() == 'y');