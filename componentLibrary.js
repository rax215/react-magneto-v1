const TextInput = require('./components/TextInput/TextInput')
const RadioButton = require('./components/RadioButton/RadioGroup')
const DropDown = require('./components/DropDown/DropDown')
const CheckBox = require('./components/CheckBox/CheckBox')
const Container = require('./components/TextContainer/Container')
const Table = require('./components/Table/Table')

const textInputComponent = (attributes) => TextInput.getTextField(attributes);
const radioButtonComponent = (attributes) => RadioButton.getRadioGroup(attributes);
const dropDownComponent = (attributes) => DropDown.getDropDown(attributes);
const checkBoxComponent =  (attributes) => CheckBox.getCheckBox(attributes);
const textContainerComponent = (attributes) => Container.getTextContainer(attributes);
const tableComponent = (attributes) => Table.getTable(attributes);

module.exports = {textInputComponent, radioButtonComponent, dropDownComponent, checkBoxComponent, textContainerComponent, tableComponent}
