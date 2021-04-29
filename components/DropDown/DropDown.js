
const getDropDown = (attributes) => {
    
    let lebels = attributes.options
    let lebelName = lebels.split(',')
    return (
    `   <Paper variant="outlined" className="wrapper">
            <Grid item xs>
                <InputLabel htmlFor="select" className="formlabel" >${attributes.label}</InputLabel>
                    <NativeSelect id="select">
                    ${lebelName.map(
                        lebelName => `          <option value="${lebelName}">${lebelName}</option>`
                    ).join("\n")}
                    </NativeSelect>
            </Grid>
        </Paper>
    `    
    )
}

module.exports = {getDropDown}