const FormLabel = require("../FormLabel/FormLabel");

const getCheckBox = (attributes) => {
  let component = "";

  if (attributes.library === "materialUi") {
    component = `<Grid item lg={12} alignItems="flex-start" className="columnMain">
    ${FormLabel.getFormLebel(attributes)}  
        <TableBody>
          <TableRow>              
            <FormGroup row="true">
                {componentOptions.${attributes.id}Options.map((item) => (
                  <TableCell className="column">
                    <FormControlLabel control={<Checkbox name={item} />} label={item} />
                  </TableCell>  
                    ))}
            </FormGroup>
          </TableRow>
        </TableBody>
  </Grid>
  `;
  } else if (attributes.library === "primeReact") {
    component = `<div>
    <div className="p-field p-grid"> 
    <label htmlFor="${attributes.id}Label" className="p-col-fixed" style={{width:'250px'}}>${attributes.label}</label>
    <div className="p-col">
      <div className="p-formgroup-inline">
    {componentOptions.${attributes.id}Options.map((item) => (
        <div className="p-field-checkbox">
         <Checkbox value={item} onChange={handleChange} checked={values === { item }}></Checkbox>
         <label className="p-checkbox-label">{item}</label>  
        </div>      
        ))}
        </div>
      </div>  
 </div>
 </div>
`;
  }

  return `${component}`;
};

module.exports = { getCheckBox };
