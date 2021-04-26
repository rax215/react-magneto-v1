const getDropDown = (attributes) => {
    
    return (
       ` <TextField id="${attributes.id}" label="${attributes.label}" required="${attributes.mandatory}" value="None" select>
        {componentOptions.${attributes.id}Options.map(item =>
            <MenuItem key={item.value} {...item} />        
        )}
        </TextField> 
        `    
    )
}

module.exports = {getDropDown}