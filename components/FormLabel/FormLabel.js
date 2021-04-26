const getFormLebel = (attributes) => { 
    return (
    `<FormLabel component="${attributes.radioButtonName}">${attributes.radioButtonName}</FormLabel>`    
    )
}

module.exports = {getFormLebel}