const FormLabel = require("../FormLabel/FormLabel");

const getCheckBox = (attributes) => {
  return `<Paper variant="outlined" className="wrapper">
            <Grid item xs>
            ${FormLabel.getFormLebel(attributes)}                   
                    <FormGroup>
                        {componentOptions.${
                          attributes.id
                        }Options.map((item) => (
                            <FormControlLabel control={<Checkbox name={item} />} label={item} />
                            ))}
                    </FormGroup>
            </Grid>  
        </Paper>
    `;
};

module.exports = { getCheckBox };
