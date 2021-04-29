import { TextField, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, NativeSelect, Checkbox, FormGroup } from '@material-ui/core'
     
const undefined = () => {
  return (
    <div>            
      <Grid className="wrapper" variant="outlined">       
        <TextField id="custName" label="Customer First Name: " className="formlabel" variant="outlined" />
    </Grid>
<Grid className="wrapper" variant="outlined">       
        <TextField id="custLastName" label="Customer Last Name: " className="formlabel" variant="outlined" />
    </Grid>

   <Paper variant="outlined" className="wrapper">
            <Grid item xs>
                   <FormLabel className="formlabel">Gender:</FormLabel>
    
                <RadioGroup aria-label="gender" name="Gender:" >
                           <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />   
            
                </RadioGroup>
            </Grid>
        </Paper>
    


   <Paper variant="outlined" className="wrapper">
            <Grid item xs>
                <InputLabel htmlFor="select" className="formlabel" >Marital Status</InputLabel>
                    <NativeSelect id="select">
                              <option value="Married">Married</option>
          <option value="Unmarried">Unmarried</option>
          <option value="Other">Other</option>
                    </NativeSelect>
            </Grid>
        </Paper>
    

   <Paper variant="outlined" className="wrapper">
            <Grid item xs>
                <FormLabel className="formlabel">Languages</FormLabel>
                    <FormGroup>
                                  <FormControlLabel control={<Checkbox name="English" />} label="English" />
          <FormControlLabel control={<Checkbox name="Hindi" />} label="Hindi" />
          <FormControlLabel control={<Checkbox name="Spanish" />} label="Spanish" />
          <FormControlLabel control={<Checkbox name="Chinese" />} label="Chinese" />
          <FormControlLabel control={<Checkbox name="Other" />} label="Other" />
                    </FormGroup>
            </Grid>  
        </Paper>
    


   <Paper variant="outlined" className="wrapper">
            <Grid item xs>
                   <FormLabel className="formlabel">Do you own any policy with us?</FormLabel>
    
                <RadioGroup aria-label="ownPolicy" name="Do you own any policy with us?" >
                           <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />   
            
                </RadioGroup>
            </Grid>
        </Paper>
    


    </div>
  )
}
export default undefined