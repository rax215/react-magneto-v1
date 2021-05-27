const FormLabel = require("../FormLabel/FormLabel");

const getRadioGroup = (attributes) => {
  let component = "";

  if (attributes.library === "materialUi") {
    component = ` <Grid item lg={4} className="wrapper">
    ${FormLabel.getFormLebel(attributes)}
    <RadioGroup aria-label="${attributes.id}" name="${attributes.label}" row>
        {componentOptions.${attributes.id}Options.map((item) => (
            <FormControlLabel value={item} control={<Radio />} label={item} /> ))}
    </RadioGroup>
</Grid>
    `;
  } else if (attributes.library === "primeReact") {
    component = `<div>
    <div className="p-field p-grid">    
      <label htmlFor="${attributes.id}Label" className="p-col-fixed" style={{width:'250px'}}>${attributes.label}</label>
      <div className="p-col">
        <div className="p-formgroup-inline">
        {componentOptions.${attributes.id}Options.map((item) => (
          <div className="p-field-checkbox">
            <RadioButton value="{item}" onChange={handleChange} checked={values === { item }} />
            <label className='p-radiobutton-label'>{item}</label> 
          </div>   
          ))}
      </div>      
    </div>
  </div>
  </div>`;
  }

  return `${component}`;
};

module.exports = { getRadioGroup };
