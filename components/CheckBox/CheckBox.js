const FormLabel = require("../FormLabel/FormLabel");

const getCheckBox = (attributes) => {
  return `<Grid item lg={12} alignItems="flex-start" className="columnMain">
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
};

module.exports = { getCheckBox };
