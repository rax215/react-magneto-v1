const FormLabel = require("../FormLabel/FormLabel");

const getCheckBox = (attributes) => {
  let component = "";
  let className = attributes.className || "child-row";
  if (attributes.library === "materialUI") {
    component = `<div className="${className}">
            ${FormLabel.getFormLebel(attributes)}              
                    <FormGroup row="true" className="checkMargin">
                        {componentOptions.${
                          attributes.id
                        }Options.map((item) => (
                            <FormControlLabel control={<Checkbox name={item} />} label={item} />
                            ))}
                    </FormGroup>
          </div>`;
  } else if (attributes.library === "primeReact") {
    component = `<div className="${className}">
    <label htmlFor="${attributes.id}Label" className="p-col-fixed formlabel">${attributes.label}</label>
      <div className="p-formgroup-inline">
    {componentOptions.${attributes.id}Options.map((item) => (
        <div className="p-field-checkbox">
        <Checkbox value={item} inputId={item} onChange={handleCheckBoxSelection} id="${attributes.id}" name="${attributes.id}" checked={values.${attributes.id}.includes(item)}></Checkbox>
         <label className="p-checkbox-label">{item}</label>  
        </div>      
        ))}
        </div>
      </div>`;
  }

  return `${component}`;
};

module.exports = { getCheckBox };