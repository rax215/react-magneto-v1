const FormLabel = require("../FormLabel/FormLabel");

const getRadioGroup = (attributes) => {
  return `   <Paper variant="outlined" className="wrapper">
            <Grid item xs>
                ${FormLabel.getFormLebel(attributes)}
                <RadioGroup aria-label="${attributes.id}" name="${
    attributes.label
  }" >
                    {componentOptions.${attributes.id}Options.map((item) => (
                        <FormControlLabel value={item} control={<Radio />} label={item} /> ))}
                </RadioGroup>
            </Grid>
        </Paper>

    `;
};

module.exports = { getRadioGroup };
