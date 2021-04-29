const FormControlLabel = require('../FormLabel/FormControlLabel')
const FormLabel = require('../FormLabel/FormLabel')

const getRadioGroup = (attributes) => { 
    return (
    `   <Paper variant="outlined" className="wrapper">
            <Grid item xs>
                ${FormLabel.getFormLebel(attributes)}
                <RadioGroup aria-label="${attributes.id}" name="${attributes.label}" >
                ${FormControlLabel.getFormControlLabel(attributes)}
                </RadioGroup>
            </Grid>
        </Paper>
    `    
    )
}

module.exports = {getRadioGroup}