const getTextContainer = (attributes) => { 
    return (
        `<Grid container item lg={11} spacing={0}
      direction="column"
      alignItems="center"
      justify="center">
      <h1>${attributes.label}</h1>  
      </Grid> 
        ` 
    )
}

module.exports = {getTextContainer}