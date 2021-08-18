const getDropDown = (attributes) => {
    let component = ''
    let className = attributes.className || "child";
    if(attributes.library === 'materialUI') {
        component = `
        <div className="${className}">
                <FormLabel id="${attributes.id}Label" required={${attributes.mandatory}} className="formlabel"> ${attributes.label} </FormLabel>
                <Select id="${attributes.id}" value={values.${attributes.id}} displayEmpty variant="outlined" style={{ minWidth: 278 }}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>    
                    {componentOptions.${attributes.id}Options.map(item =>
                        <MenuItem key={item} value={item}>{item}</MenuItem>        
                    )}
                </Select>
           </div>
`
    } else if(attributes.library === 'primeReact') {
        component = `<div className="${className}">  
        <label htmlFor="${attributes.id}Label" className="p-col-fixed formlabel">${attributes.label}</label>
        <div className="p-col dropDown">
        <Dropdown value={values.${attributes.id}} id="${attributes.id}" onChange= {handleInputChange} name="${attributes.id}" options={componentOptions.${attributes.id}Options.map(item => {let resp = {}
            resp.label = item
            resp.value = item              
            return resp
          })} placeholder="Select an option" />
        </div>
    </div>`
    }

    return (
        `${component}`
    )
}

module.exports = {getDropDown}