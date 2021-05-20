const FormLabel = require("../FormLabel/FormLabel");

const getCheckBox = (attributes) => {
  return `<Grid item lg={8} alignItems="flex-start" className="wrapper">
  ${FormLabel.getFormLebel(attributes)}  
{/*<Grid item xs={2} alignItems="flex-start" className="wrapper">*/}                
          <FormGroup row="true">
              {componentOptions.${attributes.id}Options.map((item) => (
                  <FormControlLabel control={<Checkbox name={item} />} label={item} />
                  ))}
          </FormGroup>
</Grid>
    `;
};

module.exports = { getCheckBox };
