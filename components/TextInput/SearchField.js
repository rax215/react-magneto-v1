const FormLabel = require("../FormLabel/FormLabel");
const getSearchField = (attributes) => {
  let className = attributes.className || "child";
  return `
  <div class="${className}">  
    ${FormLabel.getFormLebel(attributes)}
    <OutlinedInput id="${attributes.id}" type="search"  placeholder="${
    attributes.placeHolder
  }"  variant="outlined"
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          color="primary"
          aria-label="initiate search"
          type="submit"
        ><SearchIcon /></IconButton>
      </InputAdornment>
    }
  />
      </div>`;
};

module.exports = { getSearchField };