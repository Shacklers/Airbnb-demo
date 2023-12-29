import React, { useState } from 'react';
import {Switch, FormControlLabel, Typography, Box, Button} from '@mui/material';
import '../../../assets/fonts/Circular/font_circular.css'
const SwitchCollapse = () => {
    const [fechasSeleccionado, setFechasSeleccionado] = useState(false);
    const [mesesSeleccionado, setMesesSeleccionado] = useState(false);
    const [flexibleSeleccionado, setFlexibleSeleccionado] = useState(false);

   const style = {
       button: {
           color:'black',
           paddingLeft:'30px',
           paddingRight:'30px',
           paddingTop:'10px',
           paddingBottom:'10px',
           borderRadius:'20px'
       },
       typography:{
           fontFamily:'Circular Light',
           textTransform: 'none',
           fontSize:'15px'
       }
   }

    return (
        <Box sx={{color:'black',backgroundColor:'#ebebeb',borderRadius:'20px'}}>
            <Button style={style.button}>
                <Typography style={style.typography}>Fechas</Typography>
            </Button>
            <Button style={style.button}>
                <Typography style={style.typography}>Meses</Typography>
            </Button>
            <Button style={style.button}>
                <Typography style={style.typography}>Flexible</Typography>
            </Button>
        </Box>
    );
};

export default SwitchCollapse;

