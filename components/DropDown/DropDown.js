const getDropDown = (attributes) => {
    let component = ''
    if(attributes.library === 'materialUi') {
        component = ` <Grid item lg={4} className="wrapper">
        <InputLabel id="${attributes.id}Label" required={${attributes.mandatory}}> ${attributes.label} </InputLabel>
        <Select id="${attributes.id}" value={values.${attributes.id}}>
            <MenuItem value="" disabled>
                <em>- Select -</em>
            </MenuItem>    
            {componentOptions.${attributes.id}Options.map(item =>
                <MenuItem key={item} value={item}>{item}</MenuItem>        
            )}
        </Select>
   </Grid>
`
    } else if(attributes.library === 'primeReact') {
        component = `<label htmlFor="${attributes.id}Label">${attributes.label}</label>
        <Dropdown value={values.${attributes.id}} options={componentOptions.${attributes.id}Options.map(item => {let resp = {}
            resp.label = item
            resp.value = item              
            return resp
          })} placeholder="Select an option" />`
    }

    return (
        `<div>
            ${component}
        </div>`
    )
}

module.exports = {getDropDown}
