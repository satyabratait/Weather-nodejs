import readline from "readline";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const __fileName = fileURLToPath(import.meta.url);
// console.log(__fileName);

const __dirname = path.dirname(__fileName);
// console.log(__dirname);

var pathName = __dirname;
var pathValue;

function menu() {
  console.log("Menu");
  console.log("1.Createfolder");
  console.log("2.Createfile");
  console.log("3.Deletefolder");
  console.log("4.Deletefile");
  console.log("5.Read contents of folder");
  console.log("6.Rename folder");
  console.log("7.Exit");
  rl.question("Enter your choice\n", function (choice) {
    work(choice);
  });
}

function work(ch) {
  ch = parseInt(ch);
  switch (ch) {
    case 1:
      createfolder();
      break;

    case 2:
      createfile();
      break;

    case 3:
      deletefolder();
      break;

    case 4:
      deletefile();
      break;

    case 5:
      readfolder();
      break;

    case 6:
      renamefolder();
      break;

    case 7:
      process.exit();
      break;

    default:
      console.log("Enter correct choices");

      break;
  }
}

function createfolder() {
  rl.question("Enter the pathname\n", function (input) {
    if (input != undefined && input.length > 0) {
      rl.question("Enter the folderName\n", function (folderName) {
        console.log(path.join(input, folderName));
        pathName = input;
        pathValue = path.join(input, folderName);
        try {
          if (!fs.existsSync(pathValue)) {
            fs.mkdirSync(pathValue, { recursive: true }, () => {});
          }
        } catch (err) {
          console.error(err);
        }
        menu();
      });
    } else {
      rl.question("Enter the folderName\n", function (folderName) {
        pathValue = path.join(pathName, folderName);
        try {
          if (!fs.existsSync(pathValue)) {
            fs.mkdirSync(pathValue, { recursive: true }, () => {});
          }
        } catch (err) {
          console.error(err);
        }
        console.log(pathName);
        menu();
      });
    }
  });
}

function createfile() {
  rl.question("Enter the pathname\n", function (input) {
    if (input != undefined && input.length > 0) {
      pathName = input;
      rl.question("Enter the fileName\n", function (fileName) {
        pathValue = path.join(input, fileName);
        rl.question("Enter the content\n", function (content) {
          try {
            if (!fs.existsSync(pathValue)) {
              fs.writeFile(pathValue, content, { flag: "a+" }, () => {});
            }
          } catch (err) {
            console.log(err);
          }
          menu();
        });
      });
    } else {
      rl.question("Enter the fileName\n", function (fileName) {
        pathValue = path.join(pathName, fileName);
        rl.question("Enter the content\n", function (content) {
          try {
            if (!fs.existsSync(pathValue)) {
              fs.writeFile(pathValue, content, { flag: "a+" }, () => {});
            }
          } catch (err) {
            console.log(err);
          }
          menu();
        });
      });
    }
  });
}

function deletefolder() {
  rl.question("Enter the pathname\n", function (input) {
    console.log(input.length);
    if (input != undefined && input.length > 0) {
      pathName = input;
      rl.question("Enter the folderName\n", function (folderName) {
        pathValue = path.join(input, folderName);
        console.log(pathValue, "path");
        try {
          if (fs.existsSync(pathValue)) {
            fs.rm(pathValue, { recursive: true, force: true }, (err) => {
              console.log(err, "err");
            });
          }
        } catch (err) {
          console.log(err);
        }
        menu();
      });
    } else {
      rl.question("Enter the fileName\n", function (folderName) {
        console.log(pathName, "empty");
        pathValue = path.join(pathName, folderName);
        try {
          if (fs.existsSync(pathValue)) {
            fs.rm(pathValue, { recursive: true, force: true }, (err) => {
              console.log(err);
            });
          }
        } catch (err) {
          console.log(err);
        }
        menu();
      });
    }
  });
}

function deletefile() {
  rl.question("Enter the pathname\n", function (input) {
    if (input != undefined && input.length > 0) {
      pathName = input;
      rl.question("Enter the fileName\n", function (fileName) {
        pathValue = path.join(input, fileName);
        try {
          if (fs.existsSync(pathValue)) {
            fs.unlinkSync(pathValue);
          }
        } catch (err) {
          console.log(err);
        }
        menu();
      });
    } else {
      rl.question("Enter the fileName\n", function (fileName) {
        pathValue = path.join(input, fileName);
        try {
          if (fs.existsSync(pathValue)) {
            fs.unlinkSync(pathValue);
          }
        } catch (err) {
          console.log(err);
        }
        menu();
      });
    }
  });
}

function readfolder() {
  rl.question("Enter the pathname\n", function (input) {
    if (input != undefined && input.length > 0) {
      pathName = input;
      rl.question("Enter the folderName\n", function (folderName) {
        pathValue = path.join(input, folderName);
        try {
          if (fs.existsSync(pathValue)) {
            console.log(fs.readdirSync(pathValue));
          }
        } catch (err) {
          console.log(err);
        }
        menu();
      });
    } else {
      rl.question("Enter the fileName\n", function (folderName) {
        pathValue = path.join(pathName, folderName);
        try {
          if (fs.existsSync(pathValue)) {
            console.log(fs.readdirSync(pathValue));
          }
        } catch (err) {
          console.log(err);
        }
        menu();
      });
    }
  });
}

function renamefolder() {
  rl.question("Enter the pathname\n", function (input) {
    if (input != undefined && input.length > 0) {
      pathName = input;
      rl.question("Enter the folderName\n", function (folderName) {
        pathValue = path.join(input, folderName);
        rl.question("Enter the new folderName\n", function (newfolderName) {
          try {
            if (fs.existsSync(pathValue)) {
              fs.rename(pathValue, path.join(input, newfolderName), () => {});
            }
          } catch (err) {
            console.log(err);
          }
          menu();
        });
      });
    } else {
      rl.question("Enter the fileName\n", function (folderName) {
        pathValue = path.join(pathName, folderName);
        rl.question("Enter the new folderName\n", function (newfolderName) {
          try {
            if (fs.existsSync(pathValue)) {
              fs.rename(
                pathValue,
                path.join(pathName, newfolderName),
                () => {}
              );
            }
          } catch (err) {
            console.log(err);
          }
          menu();
        });
      });
    }
  });
}

(() => {
  menu();
})();

//archives
// values = input.split(" ");
//     pathName = values[0];
//     folderName = values[1];
// data = fs.openSync(pathName,content,{flag: 'a+'},"utf8");
// console.log(1);
//               fs.openSync(pathName,{ flag: 'a+' }, err =>{
//                 if (err) {
//                   console.error.log(err);
//                 }
//                 console.log("file opened");
//                 fs.writeFileSync(pathName,content,()=>{});
//               });
//                 console.log("written success");
