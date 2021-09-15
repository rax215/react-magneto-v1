const generateComponent = (masterLayout, components) => {
  const name = masterLayout.componentName;
  const layout = masterLayout.layout || 'horizontal';
  let labelComponent = masterLayout.componentList.filter(
    (comp) => comp.type == "TextContainer"
  );

  let label = labelComponent && labelComponent.length > 0 ? `<div><h1>${labelComponent[0].attributes.label}</h1></div>`:''
  
  let optList = masterLayout.componentList.filter(
    (comp) =>
      comp.type == "RadioButton" ||
      comp.type == "DropDown" ||
      comp.type == "CheckBox"
  );

  let chartCmpList = masterLayout.componentList.filter(
    (comp) => comp.type == "Chart"
  );

  let tableCompList = masterLayout.componentList.filter(
    (comp) => comp.type == "Table"
  );

  let componentOptions = {},
    initialValues = {},
    chartData = "", tableData = "";

  optList.forEach((comp) => {
    if(comp.type === 'CheckBox')
      initialValues[comp.attributes.id] = [];
    else
      initialValues[comp.attributes.id] = "";
    componentOptions[comp.attributes.id + "Options"] =
      comp.attributes.options.split(",");
  });

  const componentsArray = components.filter(
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
  if(tableCompList && tableCompList.length > 0) {
     tableData = `
  const [tableColumns, setTableColumns] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  useEffect(() => {
    fetch("${tableCompList[0].attributes.api}")
      .then((response) => response.json())
      .then((data) => {
        setTableColumns(data.columns);
        setTableRows(data.rows);
      });
  }, []); `;
  }
  var compArry = [...new Set(componentsArray.map((comp) => comp.compName))];
  if(masterLayout.library === 'primeReact') {
    compArry.forEach(function (comp) {
      const primeCompName = comp.toLowerCase();
      jsxCode =
        jsxCode + `import { ${comp} } from 'primereact/${primeCompName}';\n`;
    });
  }
  if(masterLayout.library === 'materialUI') {
    jsxCode = jsxCode + `import { ${[
      ...new Set(componentsArray.map((comp) => comp.compName)),
    ].join(", ")} } from '@material-ui/core';`
  }
  jsxCode =
    jsxCode +
    `
    import {useState, useEffect} from 'react';
    import './App.css';
    import './${layout}.css';
   let componentOptions = ${JSON.stringify(componentOptions)} 
   ${chartData}  

 const ${name} = () => {
  let initialValues = ${JSON.stringify(initialValues)}
  const [values, setValues] = useState(initialValues);
  ${tableData}

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleCheckBoxSelection = (e) => {
    const { name, value } = e.target;
    let selectedOptions = [...values[name]];
    if (e.checked) selectedOptions.push(value);
    else selectedOptions.splice(selectedOptions.indexOf(value), 1);
    setValues({ ...values, [name]: selectedOptions });
  };
  return (
    <div>
    ${label}
    <div className="parent">        
        ${components.map((comp) => `${comp.jsx}`).join("\n")}
    </div>
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
