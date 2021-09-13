const ComponentLibrary = require('./componentLibrary');
const MuiComponentGenerator = require('./componentGenerator');
const PrimeComponentGenerator = require('./primeReactCompGenerator');

const generateComponent = (componentName, componentData, componentGenerator) => {
  const res = componentGenerator.generateComponent(componentName, componentData);
  return res;
};

const generateJSX = (masterLayout) => {
  return new Promise((resolve, reject) => {
    let componentData = [],
      library = masterLayout.library,
      componentGenerator;

    if (library === 'materialUi') {
      componentGenerator = MuiComponentGenerator;
      componentData.push({ compName: 'Grid', jsx: '' });
      componentData.push({ compName: 'Paper', jsx: '' });
      componentData.push({ compName: 'Container', jsx: '' });

      masterLayout.componentList.forEach((component) => {
        if (component.type === 'TextInput') {
          componentData.push({ compName: 'FormLabel', jsx: '' });
          componentData.push({
            compName: 'TextField',
            jsx: ComponentLibrary.textInputComponent(component.attributes),
          });
        } else if (component.type === 'RadioButton') {
          componentData.push({ compName: 'FormLabel', jsx: '' });
          componentData.push({
            compName: 'RadioGroup',
            jsx: ComponentLibrary.radioButtonComponent(component.attributes),
          });
          componentData.push({ compName: 'FormControlLabel', jsx: '' });
          componentData.push({ compName: 'Radio', jsx: '' });
        } else if (component.type === 'DatePicker') {
          componentData.push({ compName: 'TextField', jsx: '' });
          componentData.push({
            compPickerName: 'KeyboardDatePicker',
            jsx: ComponentLibrary.datePickerComponent(component.attributes),
          });
          componentData.push({
            compPickerName: 'MuiPickersUtilsProvider',
            jsx: '',
          });
        } else if (component.type === 'DropDown') {
          componentData.push({
            compName: 'Select',
            jsx: ComponentLibrary.dropDownComponent(component.attributes),
          });
          componentData.push({ compName: 'MenuItem', jsx: '' });
          componentData.push({ compName: 'InputLabel', jsx: '' });
          componentData.push({ compName: 'FormControl', jsx: '' });
        } else if (component.type === 'CheckBox') {
          componentData.push({
            compName: 'Checkbox',
            jsx: ComponentLibrary.checkBoxComponent(component.attributes),
          });
          componentData.push({ compName: 'FormGroup', jsx: '' });
          componentData.push({ compName: 'FormControlLabel', jsx: '' });
        } else if (component.type === 'TextContainer') {
          componentData.push({
            compName: 'Container',
            jsx: ComponentLibrary.textContainerComponent(component.attributes),
          });
          componentData.push({ compName: 'Paper', jsx: '' });
          componentData.push({ compName: 'Grid', jsx: '' });
        } else if (component.type === 'Table') {
          componentData.push({
            compName: 'Table',
            jsx: ComponentLibrary.tableComponent(component.attributes),
          });
          componentData.push({ compName: 'TableBody', jsx: '' });
          componentData.push({ compName: 'TableCell', jsx: '' });
          componentData.push({ compName: 'TableContainer', jsx: '' });
          componentData.push({ compName: 'TableHead', jsx: '' });
          componentData.push({ compName: 'TableRow', jsx: '' });
        } else if (component.type === 'Chart') {
          componentData.push({
            compName: 'Container',
            jsx: ComponentLibrary.chartComponent(component.attributes),
          });
        } else if (component.type === 'SearchField') {
          componentData.push({
            compName: 'OutlinedInput',
            jsx: ComponentLibrary.searFieldComponent(component.attributes),
          });
          componentData.push({ compName: 'InputAdornment', jsx: '' });
          componentData.push({ compName: 'IconButton', jsx: '' });
        }
      });
    } else if (library === 'primeReact') {
      componentGenerator = PrimeComponentGenerator;
      masterLayout.componentList.forEach((component) => {
        if (component.type === 'TextInput') {
          componentData.push({
            compName: 'InputText',
            jsx: ComponentLibrary.textInputComponent(component.attributes),
          });
        } else if (component.type === 'DropDown') {
          componentData.push({
            compName: 'Dropdown',
            jsx: ComponentLibrary.dropDownComponent(component.attributes),
          });
        } else if (component.type === 'Chart') {
          componentData.push({
            compName: 'Chart',
            jsx: ComponentLibrary.chartComponent(component.attributes),
          });
        } else if (component.type === 'Table') {
          componentData.push({
            compName: 'DataTable',
            jsx: ComponentLibrary.tableComponent(component.attributes),
          });
          componentData.push({ compName: 'Column', jsx: '' });
        } else if (component.type === 'RadioButton') {
          componentData.push({
            compName: 'RadioButton',
            jsx: ComponentLibrary.radioButtonComponent(component.attributes),
          });
        } else if (component.type === 'CheckBox') {
          componentData.push({
            compName: 'Checkbox',
            jsx: ComponentLibrary.checkBoxComponent(component.attributes),
          });
        }
      });
    }
    const jsxFile = generateComponent(masterLayout, componentData, componentGenerator);
    resolve(jsxFile);
  });
};

module.exports = { generateJSX };
