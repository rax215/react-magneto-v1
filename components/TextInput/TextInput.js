const FormLabel = require("../FormLabel/FormLabel");

const getTextField = (attributes) => {
  let component = ''
  if (attributes.library === 'materialUi') {
    component = `<Grid item xs={2} alignItems="flex-start" className="wrapper">   
  ${FormLabel.getFormLebel(attributes)} 
  </Grid>
  <Grid item xs={4} alignItems="flex-start" className="wrapper">       
        <TextField id="${attributes.id
      }" className="formlabel" variant="outlined" style={{ minWidth: 278 }}/>
    </Grid>`;
  } else if (attributes.library === 'primeReact') {
    component = `<label htmlFor="${attributes.id}Label">${attributes.label}</label>
    <TextField id="${attributes.id
      }" className="formlabel" variant="outlined" style={{ minWidth: 278 }}/>`

  };

  return (`<div>
  ${component}
  </div>`)
}
module.exports = { getTextField };
