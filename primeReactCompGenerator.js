const generateComponent = (masterLayout, components) => {
  const name = masterLayout.componentName;
  let optList = masterLayout.componentList.filter(
    (comp) =>
      comp.type == "RadioButton" ||
      comp.type == "DropDown" ||
      comp.type == "CheckBox"
  );

  let chartCmpList = masterLayout.componentList.filter(
    (comp) => comp.type == "Chart"
  );

  let tableDataApi = masterLayout.componentList.filter(
    (comp) => comp.type == "Table"
  );

  let componentOptions = {},
    initialValues = {},
    chartData = "";

  optList.forEach((comp) => {
    initialValues[comp.attributes.id] = "";
    componentOptions[comp.attributes.id + "Options"] =
      comp.attributes.options.split(",");
  });

  const primeComponents = components.filter(
    (comp) => comp.compName && comp.compName !== "Chart"
  );
  let jsxCode = "";

  if (chartCmpList && chartCmpList.length > 0) {
    chartCmpList.forEach((comp) => {
      let options = comp.attributes.options ? comp.attributes.options : "";
      chartData =
        chartData +
        `let ${comp.attributes.type}ChartData = JSON.parse(${JSON.stringify(
          comp.attributes.data
        )})
      let ${comp.attributes.type}ChartOptions = JSON.parse(${JSON.stringify(
          options
        )})
       `;
    });
    jsxCode = `import { ${[
      ...new Set(chartCmpList.map((comp) => comp.attributes.type)),
    ].join(", ")} } from 'react-chartjs-2';\n`;
  }
  var compArry = [...new Set(primeComponents.map((comp) => comp.compName))];
  compArry.forEach(function (comp) {
    const primeCompName = comp.toLowerCase();
    jsxCode =
      jsxCode + `import { ${comp} } from 'primereact/${primeCompName}';\n`;
  });
  jsxCode =
    jsxCode +
    `import 'primereact/resources/themes/saga-blue/theme.css';
    import 'primereact/resources/primereact.css';
    import {useState, useEffect} from 'react';
    import './App.css';
   let componentOptions = ${JSON.stringify(componentOptions)} 
   ${chartData}  

 const ${name} = () => {
  let initialValues = ${JSON.stringify(initialValues)}
  const [values, setValues] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  useEffect(() => {
    fetch("${tableDataApi[0].attributes.api}")
      .then((response) => response.json())
      .then((data) => {
        setTableColumns(data.columns);
        setTableRows(data.rows);
      });
  }, []); 
  
  const handleChange = (event) => {
    setValues(event.target.values);
  };
  return (
    <div>            
        ${components.map((comp) => `${comp.jsx}`).join("\n")}
    </div>
  )
}
export default ${name}`;

  return jsxCode;
};

// fs.writeFile(path.join(__dirname, `${name}.js`), jsxCode, (err) => {
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // the file was saved
//     console.log('file contents written');
//   })

module.exports = { generateComponent };
