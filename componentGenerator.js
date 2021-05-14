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

  let tableCmpList = masterLayout.componentList.filter(
    (comp) => comp.type == "Table"
  );

  let dateComp = masterLayout.componentList.filter(
    (comp) => comp.type == "DatePicker"
  );

  let componentOptions = {},
    initialValues = {},
    chartData = "",
    tableData = "";

  optList.forEach((comp) => {
    initialValues[comp.attributes.id] = "";
    componentOptions[comp.attributes.id + "Options"] =
      comp.attributes.options.split(",");
  });
  //console.log(componentOptions);

  const materialPicker = components.filter((comp) => comp.compPickerName);
  // console.log(materialPicker);
  const materialComponents = components.filter(
    (comp) => comp.compName !== "Chart"
  );

  //console.log(materialComponents);

  if (tableCmpList && tableCmpList.length > 0) {
    tableCmpList.forEach((comp) => {
      tableData =
        tableData +
        `let ${comp.attributes.id}Columns = JSON.parse(${JSON.stringify(
          comp.attributes.columns
        )})
      let ${comp.attributes.id}Rows = JSON.parse(${JSON.stringify(
          comp.attributes.rows
        )})
       `;
    });
  }
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

  if (dateComp) {
    jsxDateCode = `import { ${[
      ...new Set(materialPicker.map((comp) => comp.compPickerName)),
    ].join(", ")} } from '@material-ui/pickers';\n
    import DateFnsUtils from "@date-io/date-fns";\n`;
  }

  jsxCode =
    jsxCode +
    jsxDateCode +
    `import {useState} from 'react';
    import { ${[
      ...new Set(materialComponents.map((comp) => comp.compName)),
    ].join(", ")} } from '@material-ui/core';
    import './App.css';
   let componentOptions = ${JSON.stringify(componentOptions)} 
   ${chartData}
   ${tableData}  

 const ${name} = () => {
  let initialValues = ${JSON.stringify(initialValues)}
  const [values, setValues] = useState({initialValues});
  return (
    <div> 
      <Container maxWidth="lg"> 
      <Paper variant="outlined"> 
      <Grid container className="wrapper"> 
      <Grid container item lg={11} spacing={0}
      direction="column"
      alignItems="center"
      justify="center">
      <h1>Customer Info  </h1>  
      </Grid>  
        ${components.map((comp) => `${comp.jsx}`).join("\n")}
      </Grid>
      </Paper>
      </Container>
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
