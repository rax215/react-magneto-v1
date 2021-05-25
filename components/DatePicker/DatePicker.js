const FormLabel = require("../FormLabel/FormLabel");

const getDatePicker = (attributes) => {
  return `<Grid item xs={2} alignItems="flex-start" className="wrapper">   
  ${FormLabel.getFormLebel(attributes)} 
  </Grid>
  <Grid item xs={4} alignItems="flex-start" className="wrapper">
            <form noValidate>
                <TextField
                    id="date"
                    type="date"
                    defaultValue="${attributes.format}"
                    variant="outlined"
                    style={{ minWidth: 278 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </form>
          {/*       This new component does not work when change the date value as we required to introduce the onChange function
            <MuiPickersUtilsProvider utils={DateFnsUtils}> 
                <KeyboardDatePicker
                    variant="inline"
                    format="${attributes.format}"
                    margin="normal"
                    id="${attributes.id}"
                    label="${attributes.label}"
                    KeyboardButtonProps={{
                        'aria-label': 'change date'
                    }}
                /> 
                </MuiPickersUtilsProvider>     */  }                
        </Grid>
    `;
};

module.exports = { getDatePicker };
