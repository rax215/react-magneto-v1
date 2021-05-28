const getTextContainer = (attributes) => {
  let component = ''
    if(attributes.library === 'materialUi') {
  component = `<Grid container item lg={11} spacing={0}
      direction="column"
      alignItems="center"
      justify="center">
      <h1>${attributes.label}</h1>  
      </Grid> 
        `;
      } else if(attributes.library === 'primeReact') {
        component = `<div>
        <h1>${attributes.label}</h1>
        </div>`  
      }
 return `${component}`
 }
module.exports = { getTextContainer };
