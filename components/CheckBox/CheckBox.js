
const getCheckBox = (attributes) => { 

    let lebels = attributes.options
    let lebelName = lebels.split(',')
   
    return (
    `   <Paper variant="outlined" className="wrapper">
            <Grid item xs>
                <FormLabel className="formlabel">${attributes.label}</FormLabel>
                    <FormGroup>
                        ${lebelName.map(
                            lebelName => `          <FormControlLabel control={<Checkbox name="${lebelName}" />} label="${lebelName}" />`
                        ).join("\n")}
                    </FormGroup>
            </Grid>  
        </Paper>
    `    
    )
}

module.exports = {getCheckBox}