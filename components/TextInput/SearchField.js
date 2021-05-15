const FormLabel = require("../FormLabel/FormLabel");
const getSearchField = (attributes) => {
    return `<Grid item lg={4} variant="outlined" className="wrapper">   
    ${FormLabel.getFormLebel(attributes)}    
    <OutlinedInput id="${attributes.id}" type="search"  placeholder="${attributes.placeHolder}"  variant="outlined"
    endAdornment={
      <InputAdornment sposition="end">
        <IconButton
          color="primary"
          aria-label="initiate search"
          type="submit"
        ><SearchIcon /></IconButton>
      </InputAdornment>
    }
  />
      </Grid>`;
  };
  
  module.exports = { getSearchField };