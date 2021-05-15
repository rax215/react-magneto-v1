const FormLabel = require("../FormLabel/FormLabel");

const getCheckBox = (attributes) => {
  return `<Grid item lg={4} className="wrapper">
            ${FormLabel.getFormLebel(attributes)}                   
                    <FormGroup>
                        {componentOptions.${
                          attributes.id
                        }Options.map((item) => (
                            <FormControlLabel control={<Checkbox name={item} />} label={item} />
                            ))}
                    </FormGroup>
            </Grid>
    `;
};

module.exports = { getCheckBox };
