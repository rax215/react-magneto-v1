const TextInput = require("./components/TextInput/TextInput");
const RadioButton = require("./components/RadioButton/RadioGroup");
const DropDown = require("./components/DropDown/DropDown");
const CheckBox = require("./components/CheckBox/CheckBox");
const Container = require("./components/TextContainer/Container");
const Table = require("./components/Table/Table");
const Chart = require("./components/Chart/Chart");
const DatePicker = require("./components/DatePicker/DatePicker");
const SearchField = require("./components/TextInput/SearchField")

const textInputComponent = (attributes) => TextInput.getTextField(attributes);
const radioButtonComponent = (attributes) =>
  RadioButton.getRadioGroup(attributes);
const dropDownComponent = (attributes) => DropDown.getDropDown(attributes);
const checkBoxComponent = (attributes) => CheckBox.getCheckBox(attributes);
const textContainerComponent = (attributes) =>
  Container.getTextContainer(attributes);
const tableComponent = (attributes) => Table.getTable(attributes);
const chartComponent = (attributes) => Chart.getChart(attributes);
const datePickerComponent = (attributes) =>
  DatePicker.getDatePicker(attributes);
  const searFieldComponent = (attributes) => SearchField.getSearchField(attributes);

module.exports = {
  textInputComponent,
  radioButtonComponent,
  dropDownComponent,
  checkBoxComponent,
  textContainerComponent,
  tableComponent,
  chartComponent,
  datePickerComponent,
  searFieldComponent
};
