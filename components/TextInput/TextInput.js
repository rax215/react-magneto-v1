const getTextField = (attributes) => {
  return `<Grid item lg={4} variant="outlined" className="wrapper">       
        <TextField id="${attributes.id}" label="${attributes.label}" className="formlabel" variant="outlined" />
    </Grid>`;
};

module.exports = { getTextField };
