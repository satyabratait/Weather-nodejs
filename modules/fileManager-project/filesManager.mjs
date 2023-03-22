import readline from "readline";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const __fileName = fileURLToPath(import.meta.url);

const __dirName = path.dirname(__fileName);

let homePath = __dirName;
let pathValue;

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
      createFolder();
      break;

    case 2:
      createFile();
      break;

    case 3:
      deleteFolder();
      break;

    case 4:
      deleteFile();
      break;

    case 5:
      readFolder();
      break;

    case 6:
      renameFolder();
      break;

    case 7:
      process.exit();
      break;

    default:
      console.log("Enter correct choices");
      break;
  }
}

function createFolder() {
  rl.question("Enter the homePath\n", function (input) {
    if (input !== undefined && input.length > 0) {
      rl.question("Enter the folderName\n", function (folderName) {
        homePath = input;
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
        pathValue = path.join(homePath, folderName);
        try {
          if (!fs.existsSync(pathValue)) {
            fs.mkdirSync(pathValue, { recursive: true }, () => {});
          }
        } catch (err) {
          console.error(err);
        }
        console.log(homePath);
        menu();
      });
    }
  });
}

function createFile() {
  rl.question("Enter the homePath\n", function (input) {
    if (input !== undefined && input.length > 0) {
      homePath = input;
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
        pathValue = path.join(homePath, fileName);
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

function deleteFolder() {
  rl.question("Enter the homePath\n", function (input) {
    console.log(input.length);
    if (input !== undefined && input.length > 0) {
      homePath = input;
      rl.question("Enter the folderName\n", function (folderName) {
        pathValue = path.join(input, folderName);
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
      rl.question("Enter the folderName\n", function (folderName) {
        pathValue = path.join(homePath, folderName);
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

function deleteFile() {
  rl.question("Enter the homePath\n", function (input) {
    if (input !== undefined && input.length > 0) {
      homePath = input;
      rl.question("Enter the fileName with extension\n", function (fileName) {
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
      rl.question("Enter the fileName with extension\n", function (fileName) {
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

function readFolder() {
  rl.question("Enter the homePath\n", function (input) {
    if (input !== undefined && input.length > 0) {
      homePath = input;
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
      rl.question("Enter the folderName\n", function (folderName) {
        pathValue = path.join(homePath, folderName);
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

function renameFolder() {
  rl.question("Enter the homePath\n", function (input) {
    if (input !== undefined && input.length > 0) {
      homePath = input;
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
      rl.question("Enter the folderName\n", function (folderName) {
        pathValue = path.join(homePath, folderName);
        rl.question("Enter the new folderName\n", function (newfolderName) {
          try {
            if (fs.existsSync(pathValue)) {
              fs.rename(
                pathValue,
                path.join(homePath, newfolderName),
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