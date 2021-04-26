const FormLabel = require('../FormLabel/FormLabel')

const getRadioButton = (attributes) => { 

  let lebels = attributes.radioButtonLabel
  let lebelName = lebels.split(',')
  

  if(attributes.radioButtonName === 'Gender') {
    return (
      `
            ${FormLabel.getFormLebel(attributes)}
            <RadioButton value="${lebelName[0]}" inputProps={{ 'aria-label': '${lebelName[0]}' }}/>
            <RadioButton value="${lebelName[1]}" inputProps={{ 'aria-label': '${lebelName[1]}' }}/>
            <RadioButton value="${lebelName[2]}" inputProps={{ 'aria-label': '${lebelName[2]}' }}/>
      `    
      )
  }

  else if(attributes.radioButtonName.match(/Do you/)) {
    return (
      `
            ${FormLabel.getFormLebel(attributes)}
            <RadioButton value="${lebelName[0]}" inputProps={{ 'aria-label': '${lebelName[0]}' }}/>
            <RadioButton value="${lebelName[1]}" inputProps={{ 'aria-label': '${lebelName[1]}' }}/>
      `    
      )
  }
 
}

module.exports = {getRadioButton}