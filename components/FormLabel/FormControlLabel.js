const getFormControlLabel = (attributes) => { 

    let lebels = attributes.options
    let lebelName = lebels.split(',')
    
        return (
            ` ${lebelName.map(
                lebelName => `          <FormControlLabel value="${lebelName}" control={<Radio />} label="${lebelName}" />`
                ).join("\n")}   
            `    
            )
    
}

module.exports = {getFormControlLabel}