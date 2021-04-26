const FormLabel = require('../FormLabel/FormLabel')

const getCheckBox = (attributes) => { 

    let lebels = attributes.checkBoxLabel
    let lebelName = lebels.split(',')

    return (
    `
        ${FormLabel.getFormLebel(attributes)}
        <Checkbox value="${lebelName[0]}" required="${attributes.mandatory}" inputProps={{ 'aria-label': '${lebelName[0]}' }}/>
        <Checkbox value="${lebelName[1]}" required="${attributes.mandatory}" inputProps={{ 'aria-label': '${lebelName[1]}' }}/>
        <Checkbox value="${lebelName[2]}" required="${attributes.mandatory}" inputProps={{ 'aria-label': '${lebelName[2]}' }}/>
        <Checkbox value="${lebelName[3]}" required="${attributes.mandatory}" inputProps={{ 'aria-label': '${lebelName[3]}' }}/>
        <Checkbox value="${lebelName[4]}" required="${attributes.mandatory}" inputProps={{ 'aria-label': '${lebelName[4]}' }}/>
    `    
    )
}

module.exports = {getCheckBox}