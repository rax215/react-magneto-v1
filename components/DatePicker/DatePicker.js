const getDatePicker = (attributes) => {
  return `<Grid item lg={4} className="wrapper">
            <form noValidate>
                <TextField
                    id="date"
                    label="${attributes.label}"
                    type="date"
                    defaultValue="${attributes.format}"
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
