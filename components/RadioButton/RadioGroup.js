const FormLabel = require("../FormLabel/FormLabel");

const getRadioGroup = (attributes) => {
  let component = "";
  let className = attributes.className || "child-row";
  if (attributes.library === "materialUI") {
    component = `<div className="${className}">
    ${FormLabel.getFormLebel(attributes)}
    <RadioGroup aria-label="${attributes.id}" name="${attributes.label}" row>
        {componentOptions.${attributes.id}Options.map((item) => (
            <FormControlLabel value={item} control={<Radio />} label={item} /> ))}
    </RadioGroup>
</div>`;
  } else if (attributes.library === "primeReact") {
    component = `<div className="${className}">  
      <label htmlFor="${attributes.id}Label" className="p-col-fixed formlabel">${attributes.label}</label>
      <div className="p-col p-formgroup-inline">
        {componentOptions.${attributes.id}Options.map((item) => (
          <div className="p-field-radiobutton">
          <RadioButton inputId={item} name="${attributes.id}" value={item} onChange={handleInputChange} checked={values.${attributes.id} === item} />
            <label className='p-radiobutton-label'>{item}</label> 
          </div>   
          ))}
      </div>
  </div>`;
  }

  return `${component}`;
};

module.exports = { getRadioGroup };