import { Box, Button, Grid } from '@mui/material'
import React from 'react'

const mui = () => {
  return (
    <div>
        <h1>Simple Grid </h1>
        <Grid 
        container 
        // spacing={20}
        spacing={{xs : "20px" , md :"50px" , sm : "100px"}}
        >
            <Grid item
             xs={12} /**small */
             md={2} /*large */ 
             sm={6} /**meduim */>
                <Box bgcolor={"pink"}  color="white">
                    hello 
                     </Box>
            </Grid>
            
            <Grid item
             xs={12} /**small */
             md={2} /*large */ 
             sm={6} /**meduim */>
                <Box bgcolor={"pink"}  color="white">
                    hello 
                     </Box>
            </Grid>
            
            <Grid item
             xs={12} /**small */
             md={2} /*large */ 
             sm={6} /**meduim */>
                <Box bgcolor={"pink"}  color="white">
                    hello 
                     </Box>
            </Grid>
            
            <Grid item
             xs={12} /**small */
             md={2} /*large */ 
             sm={6} /**meduim */>
                <Box bgcolor={"pink"}  color="white">
                    hello 
                     </Box>
            </Grid>
            
            <Button color='primary'> hello </Button>   

        </Grid>
    </div>
  )
}

export default mui