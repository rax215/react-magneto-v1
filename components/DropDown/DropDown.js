const getDropDown = (attributes) => {
  let lebels = attributes.options;
  let lebelName = lebels.split(",");
  return ` <Grid item xs={2} alignItems="flex-start" className="wrapper">
        <InputLabel id="${attributes.id}Label" required={${attributes.mandatory}} className="formlabel"> ${attributes.label} </InputLabel>
        </Grid>
        <Grid item xs={4} alignItems="flex-start" className="wrapper">
        <Select id="${attributes.id}" value={values.${attributes.id}} variant="outlined" style={{ minWidth: 278 }}>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>    
            {componentOptions.${attributes.id}Options.map(item =>
                <MenuItem key={item} value={item}>{item}</MenuItem>        
            )}
        </Select>
   </Grid>
    `;
};

module.exports = { getDropDown };
