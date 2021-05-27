const getDropDown = (attributes) => {
    let component = ''
    if(attributes.library === 'materialUi') {
        component = `<Grid item xs={2} alignItems="flex-start" className="wrapper">
        <InputLabel id="${attributes.id}Label" required={${attributes.mandatory}} className="formlabel"> ${attributes.label} </InputLabel>
        </Grid>
        <Grid item xs={4} alignItems="flex-start" className="wrapper">
        <Select id="${attributes.id}" value={values.${attributes.id}} variant="outlined" style={{ minWidth: 278 }}>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>    
            {componentOptions.${attributes.id}Options.map(item =>
                <MenuItem key={item} value={item}>{item}</MenuItem>        
            )}
        </Select>
   </Grid>`
    } else if(attributes.library === 'primeReact') {
        component = `<div>
        <div className="p-field p-grid">
        <label htmlFor="${attributes.id}Label" className="p-col-fixed" style={{width:'250px'}}>${attributes.label}</label>
        <div className="p-col">
            <Dropdown value={values.${attributes.id}} options={componentOptions.${attributes.id}Options.map(item => {let resp = {}
            resp.label = item
            resp.value = item              
            return resp
          })} placeholder="Select an option" />
        </div>
    </div>
    </div>`
    }

    return (
        `${component}`
    )
}

module.exports = {getDropDown}
