const FormLabel = require("../FormLabel/FormLabel");

const getTextField = (attributes) => {
  let component = ''
  let className = attributes.className || "child";
  if (attributes.library === 'materialUI') {
    component = `
    <div className="${className}">        
      ${FormLabel.getFormLebel(attributes)}       
     <TextField id="${attributes.id}" className="formlabel" variant="outlined" />
    </div>`;
  } else if (attributes.library === 'primeReact') {
    component = `<div className="${attributes.className}">
    <label htmlFor="${attributes.id}Label" className="p-col-fixed formlabel">${attributes.label}</label>
    <InputText id="${attributes.id}" name="${attributes.id}" onChange= {handleInputChange} variant="outlined" style={{ minWidth: 300 }}/>
    </div>`
  };

  return `${component}`
}
module.exports = { getTextField };