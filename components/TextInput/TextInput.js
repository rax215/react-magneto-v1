const getTextField = (attributes) => { 
    return (
    `
            <TextField id="${attributes.id}" label="${attributes.label}" className="${attributes.className}" variant="outlined" />
    `    
    )
}

module.exports = {getTextField}