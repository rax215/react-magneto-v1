
const getDropDown = (attributes) => {

    let lebels = attributes.options
    let lebelName = lebels.split(',')
    return (
    `   <Paper variant="outlined" className="wrapper">
            <FormControl style={{minWidth:135}}> 
                <InputLabel id="${attributes.id}Label" required={${attributes.mandatory}}> ${attributes.label} </InputLabel>
                <Select id="${attributes.id}" value={values.${attributes.id}}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>    
                    {componentOptions.${attributes.id}Options.map(item =>
                        <MenuItem key={item} value={item}>{item}</MenuItem>        
                    )}
                </Select>
            </FormControl>
        </Paper>
    `    
    )
}

module.exports = {getDropDown}