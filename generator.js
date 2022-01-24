<<<<<<< HEAD
const { generateJSX, generateRouteJSX } = require("./generateJSX");
const fs = require("fs-extra");
const path = require("path");


const generateJSXCode = async (masterLayout, page, pageIndex) => {
  const result = await generateJSX(masterLayout, page, pageIndex);
  return result;
};

const reactAppGenerator = async (masterLayout) => {
  return new Promise((resolve, reject) => {
    let projName = masterLayout.appName
    const directory = `./output`;
=======
const { generateJSX } = require('./generateJSX');
const fs = require('fs');
const path = require('path');
const CommonUtil = require('./commonUtil');
const parser = new (require('simple-excel-to-json').XlsParser)();

let projName = '';

let indexImport = `import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';`;

const primeReactImport = `import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';`;

const indexImportAdd = `ReactDOM.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();`;

const materialUIDependencies = `"@material-ui/core": "^4.11.3",
"@material-ui/icons": "^4.11.2",
"@material-ui/pickers": "^3.3.10",`;

const primeReactDependencies = `"primeflex": "^2.0.0",
"primereact": "^6.3.2",
"primeicons": "^4.1.0",
"react-transition-group": "^4.4.2",`;

const getDependencies = (masterLayout) => {
  if (masterLayout.library === 'primeReact') {
    return primeReactDependencies;
  } else if (masterLayout.library === 'materialUI') {
    return materialUIDependencies;
  }
};

const getIndexData = (masterLayout) => {
  if (masterLayout.library === 'primeReact') {
    return indexImport + '\n' + primeReactImport + '\n' + indexImportAdd;
  } else {
    return indexImport + '\n' + indexImportAdd;
  }
};

const generateJSXFile = async (masterLayout) => {
  const result = await generateJSX(masterLayout);
  return result;
};

const readExcelFile = () => {
  // .xlsx file path
  const filePath = path.join(`${__dirname}/uploads`, 'react_template.xlsx');

  // parsing excel file
  var data = parser.parseXls2Json(filePath, {
    isNested: true,
  });

  // selecting the sheet
  const materialUiSheet = data[0];
  let masterLayout = CommonUtil.createMasterLayout(materialUiSheet);
  return masterLayout;
};

const reactGenerator = async () => {
  return new Promise((resolve, reject) => {
    const directory = './output/';
>>>>>>> bc595f06f7d67c132833100b75d0d738ffb7393a
    fs.mkdir(directory, (err) => {
      if (err) {
        console.log('error while creating project directory -1');
      } else {
<<<<<<< HEAD
        fs.mkdirSync(`./output/${projName}`)
        copyFiles('./template', `./output/${projName}`)
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
            let routesJsx='';
        masterLayout.pages.forEach((page, pageIndex) => {
          
          generateJSXCode(masterLayout, page, pageIndex).then((data) => {
            fs.writeFile(
                `./output/${projName}/src/views/${page.pageName.replace(/\s/g, '')}.js`        ,
              data,
              (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;

                // the file was saved
                console.log("jsx file contents written");
                resolve();
=======
        const masterLayout = readExcelFile();

        projName = masterLayout.componentName;
        let layout = masterLayout.layout || 'row';

        fs.mkdir(`./output/${projName}`, (err) => {
          if (err) {
            console.log('error while creating project directory -2');
          } else {
            console.log('project directory created');
            const dirName = __dirname;
            fs.mkdir(`./output/${projName}/src`, (err) => {
              if (err) {
                console.log('error while creating src directory -3');
              } else {
                console.log('src directory created');

                fs.copyFile(`${dirName}/template/App.css`, `./output/${projName}/src/App.css`, (err) => {
                  if (err) throw err;
                });

                fs.copyFile(`${dirName}/template/${layout}.css`, `./output/${projName}/src/${layout}.css`, (err) => {
                  if (err) throw err;
                });

                fs.copyFile(`${dirName}/template/App.js`, `./output/${projName}/src/App.js`, (err) => {
                  if (err) throw err;
                });

                // fs.copyFile(`${dirName}/template/index.js`, `./output/${projName}/src/index.js`, (err) => {
                //   if (err) throw err;
                // });

                fs.writeFile(`./output/${projName}/src/index.js`, getIndexData(masterLayout), (err) => {
                  if (err) throw err;
                });

                fs.copyFile(
                  `${dirName}/template/reportWebVitals.js`,
                  `./output/${projName}/src/reportWebVitals.js`,
                  (err) => {
                    if (err) throw err;
                  }
                );

                fs.mkdir(`./output/${projName}/public`, (err) => {
                  if (err) {
                    console.log('error while creating src directory -4');
                  } else {
                    console.log('public directory created');
                    fs.copyFile(`${dirName}/template/index.html`, `./output/${projName}/public/index.html`, (err) => {
                      if (err) throw err;

                      generateJSXFile(masterLayout).then((data) => {
                        fs.writeFile(path.join(`./output/${projName}/src/`, `${projName}.js`), data, (err) => {
                          // throws an error, you could also catch it here
                          if (err) throw err;

                          // the file was saved
                          console.log('jsx file contents written');
                          resolve();
                        });
                      });
                    });
                  }
                });

                //generate package.json
                fs.readFile(`${dirName}/template/package.json`, 'utf8', (err, data) => {
                  if (err) throw err;
                  let pkg = data.replace('<app-name>', projName);
                  let newPkg = pkg.replace('<app-dependencies>', getDependencies(masterLayout));
                  fs.writeFile(`./output/${projName}/package.json`, newPkg, (err) => {
                    if (err) throw err;
                  });
                });

                // fs.copyFile(`${dirName}/template/package.json`, `./output/${projName}/package.json`, (err) => {
                //   if (err) throw err;
                // });

                //generate Home.js
                fs.readFile(`${dirName}/template/Home.js`, 'utf8', (err, data) => {
                  if (err) throw err;
                  let pkg = data.replace(/<app-name>/g, projName);
                  fs.writeFile(`./output/${projName}/src/Home.js`, pkg, (err) => {
                    if (err) throw err;
                  });
                });

                // fs.copyFile(`${dirName}/template/package.json`, `./output/${projName}/package.json`, (err) => {
                //   if (err) throw err;
                // });

                // fs.copyFile(`${dirName}/template/.gitignore`,`./output/${projName}/.gitignore`, err => {
                //     if (err) throw err
                // })
>>>>>>> bc595f06f7d67c132833100b75d0d738ffb7393a
              }
            );
          });
        });
        generateRouteJSX(masterLayout).then((data) => {
          fs.writeFile(
              `./output/${projName}/route.js`,
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
      })

      }
    })
  })
}
    
 function copyFiles (source, dest) {
  try {
    fs.copySync(source, dest)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

module.exports = { reactAppGenerator };
