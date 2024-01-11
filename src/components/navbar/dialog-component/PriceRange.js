import {Box, FormControl, InputAdornment, InputLabel, OutlinedInput, Typography} from "@mui/material";

const PriceRange = () => {

    return(
        <Box sx={{width:'100%',display:'flex',flexWrap:'wrap',gap:'20px'}}>
            <Box sx={{width:'100%',display:'flex',flexWrap:'wrap', paddingLeft:'20px',gap:'10px'}}>
                <Typography sx={{width:'100%',fontFamily:'Circular Bold',fontSize:'25px'}}>Rango de precios</Typography>
                <Typography sx={{width:'100%',fontFamily:'Circular Light',fontSize:'15px'}}>Precios por noche (impuestos y tarifas no incluidos)</Typography>
            </Box>

            <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',gap:'20px'}}>
                <Box sx={{width:'30%'}}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Minimo</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Minimo"
                        />
                    </FormControl>

                </Box>
                <Box sx={{width:'3%',display:'flex',justifyContent:'center'}}>
                    <hr style={{ width: '100%', height: '2px', backgroundColor: 'grey', border: 'none' ,margin:"0",marginLeft:'10px'}} />
                </Box>

                <Box sx={{width:'30%'}}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Maximo</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Maximo"
                        />
                    </FormControl>
                </Box>
            </Box>


        </Box>
    )


}

export default PriceRange;