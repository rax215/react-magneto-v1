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
  let componentOptions = {},
    initialValues = {},
    chartData = "";
  optList.forEach((comp) => {
    initialValues[comp.attributes.id] = "";
    componentOptions[
      comp.attributes.id + "Options"
    ] = comp.attributes.options.split(",");
  });
  console.log(componentOptions);
  const materialComponents = components.filter(
    (comp) => comp.compName !== "Chart"
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
    jsxCode = `import {useState} from 'react';
    import { ${[
      ...new Set(chartCmpList.map((comp) => comp.attributes.type)),
    ].join(", ")} } from 'react-chartjs-2';\n`;
  }

  jsxCode =
    jsxCode +
    `import { ${[
      ...new Set(materialComponents.map((comp) => comp.compName)),
    ].join(", ")} } from '@material-ui/core'
   let componentOptions = ${JSON.stringify(componentOptions)} 
   ${chartData} 

 const ${name} = () => {
  let initialValues = ${JSON.stringify(initialValues)}
  const [values, setValues] = useState({initialValues});
  return (
    <div>            
      ${components.map((comp) => `${comp.jsx}`).join("\n")}
    </div>
  )
}
export default Employee`;

  return jsxCode;
};

// fs.writeFile(path.join(__dirname, `${name}.js`), jsxCode, (err) => {
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // the file was saved
//     console.log('file contents written');
//   })

module.exports = { generateComponent };
