const FormLabel = require("../FormLabel/FormLabel");

const getTextField = (attributes) => {
  return `<Grid item xs={2} alignItems="flex-start" className="wrapper">   
  ${FormLabel.getFormLebel(attributes)} 
  </Grid>
  <Grid item xs={4} alignItems="flex-start" className="wrapper">       
        <TextField id="${
          attributes.id
        }" className="formlabel" variant="outlined" style={{ minWidth: 278 }}/>
    </Grid>`;
};

module.exports = { getTextField };
