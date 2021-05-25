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
    component = ` 
    <label htmlFor="${attributes.id}Label">${attributes.label}</label>
    
    {componentOptions.${attributes.id}Options.map((item) => (
      <div>
      <Checkbox value={item} onChange={handleChange}
      checked={values == { item }}></Checkbox>
    <label className="p-checkbox-label">{item}</label>  
    </div>      
        ))}
 
`;
  }

  return `<div> 
       ${component}
    </div>`;
};

module.exports = { getCheckBox };
