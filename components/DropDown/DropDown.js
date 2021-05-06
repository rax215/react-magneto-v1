
const getDropDown = (attributes) => {

    let lebels = attributes.options
    let lebelName = lebels.split(',')
    return (
        ` <Grid item lg={4} className="wrapper">
                <InputLabel id="${attributes.id}Label" required={${attributes.mandatory}}> ${attributes.label} </InputLabel>
                <Select id="${attributes.id}" value={values.${attributes.id}}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>    
                    {componentOptions.${attributes.id}Options.map(item =>
                        <MenuItem key={item} value={item}>{item}</MenuItem>        
                    )}
                </Select>
           </Grid>
    `
    )
}

module.exports = {getDropDown}