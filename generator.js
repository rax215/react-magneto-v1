const { generateJSX, generateRouteJSX } = require("./generateJSX");
const fs = require("fs-extra");
const path = require("path");
const { copyFileSync } = require("fs");


const generateJSXCode = async (masterLayout, page, pageIndex) => {
  const result = await generateJSX(masterLayout, page, pageIndex);
  return result;
};

const reactAppGenerator = async (masterLayout) => {
  return new Promise((resolve, reject) => {
    let projName = masterLayout.appName;
    const directory = `./output`;
    fs.mkdir(directory, (err) => {
      if (err) {
        console.log('error while creating project directory -1');
      } else {
        fs.mkdirSync(`./output/${projName}`);
        copyFiles('./template/base-app', `./output/${projName}`);
        //generate package.json
        fs.readFile(`./output/${projName}/package.json`, 'utf8', (err, data) => {
          if (err) throw err;
          let pkg = data.replace('<app-name>', projName);
          fs.writeFile(`./output/${projName}/package.json`, pkg, (err) => {
            if (err) throw err;
          });
        });
        fs.mkdir(`./output/${projName}/src/views`, (err) => {
          if (err) {
            console.log("error while creating views directory -1");
          } else {
            fs.copyFile(`./template/Home.js`, `./output/${projName}/src/views/Home.js`, (err) => {
              if (err) throw err;
            });

            masterLayout.pages.forEach((page, pageIndex) => {
              if(page.pageName !== 'Home') {
              generateJSXCode(masterLayout, page, pageIndex).then((data) => {
                fs.writeFile(
                  `./output/${projName}/src/views/${page.pageName.replace(/\s/g, '')}.js`,
                  data,
                  (err) => {
                    // throws an error, you could also catch it here
                    if (err) throw err;

                    // the file was saved
                    console.log("jsx file contents written");
                    resolve();
                  }
                );
              });
            }
            });
            generateRouteJSX(masterLayout).then((data) => {
              fs.writeFile(
                `./output/${projName}/src/route.js`,
                data,
                (err) => {
                  // throws an error, you could also catch it here
                  if (err) throw err;

                  // the file was saved
                  console.log(" route jsx file contents written");
                  resolve();
                }
              );
            });
          }
        });

      }
    });
  });
};

function copyFiles(source, dest) {
  try {
    fs.copySync(source, dest);
    console.log('success!');
  } catch (err) {
    console.error(err);
  }
}

module.exports = { reactAppGenerator };
