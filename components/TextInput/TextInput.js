const FormLabel = require("../FormLabel/FormLabel");

const getTextField = (attributes) => {
  let component = ''
  if (attributes.library === 'materialUi') {
    component = `<Grid item xs={2} alignItems="flex-start" className="wrapper">   
  ${FormLabel.getFormLebel(attributes)} 
  </Grid>
  <Grid item xs={4} alignItems="flex-start" className="wrapper">       
        <TextField id="${attributes.id}" className="formlabel" variant="outlined" style={{ minWidth: 278 }}/>
    </Grid>`;
  } else if (attributes.library === 'primeReact') {
    component = `<div>
    <div className="p-field p-grid">
    <label htmlFor="${attributes.id}Label" className="p-col-fixed" style={{width:'250px'}}>${attributes.label}</label>
    <div className="p-col">
      <InputText id="${attributes.id}" name="${attributes.id}" onChange= {handleInputChange} variant="outlined" style={{ minWidth: 300 }}/>
    </div>
    </div>
    </div>`
  };

  return `${component}`
}
module.exports = { getTextField };
