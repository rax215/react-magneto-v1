const TextInput = require('./components/TextInput/TextInput')
const RadioButton = require('./components/RadioButton/RadioButton')
const DropDown = require('./components/DropDown/DropDown')

const textInputComponent = (attributes) => TextInput.getTextField(attributes);
const radioButtonComponent = (attributes) => RadioButton.getRadioButton(attributes);
const dropDownComponent = (attributes) => DropDown.getDropDown(attributes);

module.exports = {textInputComponent, radioButtonComponent, dropDownComponent}