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
    component = `<label htmlFor="${attributes.id}Label">${attributes.label}</label>
      {componentOptions.${attributes.id}Options.map((item) => (
        <div>
        <RadioButton value="{item}" onChange={handleChange}
        checked={values == { item }} />
        <label className='p-radiobutton-label'>{item}</label> 
        </div>   
          ))}   
      `;

    console.log(component);
  }
  return `<div> 
       ${component}
    </div>`;
};

module.exports = { getRadioGroup };
