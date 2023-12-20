import React, { useState } from 'react';
import {Collapse, Button, Paper, Typography, Box, IconButton, CardMedia} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {collapse_style, collapse_sx, navbar_sx} from "../../styles/navbar/navbarStyle";
import SearchIcon from "@mui/icons-material/Search";
import {busquedaPorRegion} from '../../assets/data/data'
import AirBnbLogo from "../../assets/images/airbnb-seeklogo.com.svg";

const useStyles = makeStyles((theme) => ({
    customButton: {
        color: 'red',
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: 'red',
        },
    },
    customFontSize: {
        fontSize: '20px',
    },
}));
const ExpandingComponent = ({mostrarComponente}) => {

    const [mostrarBusquedaPorRegion, setMostrarbusquedaPorRegion] = useState(false);

    const handleCollapse = () =>{
        setMostrarbusquedaPorRegion(!mostrarBusquedaPorRegion);
    }



    return (
        <>
            <Collapse sx={{width:'100%',display:{xs:'none',md:'flex'}, alignItems:'center',}} in={mostrarComponente} unmountOnExit>

                    <Box sx={collapse_sx.boxCollapse}>
                        <Box sx={collapse_sx.buttonBox} >
                            <Button onClick={handleCollapse} style={{...collapse_style.buttonCollapse, width:'40%', justifyContent:'center', alignItems:'start',flexDirection:'column'}}>
                                <Typography sx={{...collapse_sx.typographyCollapse, paddingLeft:'20px'}}>Lugar</Typography>
                                <Typography sx={{...collapse_sx.typographyCollapse, fontFamily:'Circular Light',paddingLeft:'20px'}}>Explorar destinos</Typography>
                            </Button>

                            <Box sx={{ height: '60%', borderLeft: '1px solid rgba(0, 0, 0, 0.12)',}}></Box>
                            <Button  style={{...collapse_style.buttonCollapse, width:'20%',paddingLeft:'20px'}}>
                                <Typography sx={collapse_sx.typographyCollapse}>Check in</Typography>
                                <Typography sx={{...collapse_sx.typographyCollapse, fontFamily:'Circular Light'}}>Cuando?</Typography>
                            </Button>
                            <Box sx={{ height: '60%', borderLeft: '1px solid rgba(0, 0, 0, 0.12)',}}></Box>
                            <Button  style={{...collapse_style.buttonCollapse, width:'20%',paddingLeft:'20px'}}>
                                <Typography sx={collapse_sx.typographyCollapse}>Check out</Typography>
                                <Typography sx={{...collapse_sx.typographyCollapse, fontFamily:'Circular Light'}}>Cuando?</Typography>
                            </Button>
                            <Box sx={{ height: '60%', borderLeft: '1px solid rgba(0, 0, 0, 0.12)',}}></Box>
                            <Button  style={{...collapse_style.buttonCollapse, flexDirection:'row', justifyContent:'space-between',alignItems:'center',width:'35%',paddingLeft:'20px',}} >
                                <Box sx={{display:'flex',flexDirection:'column',paddingRight:'4px', }}>
                                    <Typography sx={collapse_sx.typographyCollapse}>Viajeros</Typography>
                                    <Typography sx={{...collapse_sx.typographyCollapse, fontFamily:'Circular Light',}}>Cuantos?</Typography>
                                </Box>

                                <Box >

                                    <IconButton >
                                        <SearchIcon sx={navbar_sx.searchIcon}/>
                                    </IconButton>
                                </Box>
                            </Button>
                        </Box>
                        <BusquedaPorRegion mostrarBusquedaPorRegion={mostrarBusquedaPorRegion}></BusquedaPorRegion>
                    </Box>

            </Collapse>
        </>
    );
};

const BusquedaPorRegion = ({mostrarBusquedaPorRegion}) => {
    return(



            <Collapse sx={{width:'100%',display:{xs:'none',md:'flex'}, alignItems:'center',backgroundColor:'transparent'}} in={mostrarBusquedaPorRegion} unmountOnExit>

                <Box sx={{...collapse_sx.boxCollapse, height:'auto',justifyContent:'center'}}>
                    <Box sx={{width:'50%', display:'flex',height:'auto',justifyContent:'start'}}>

                        <Box sx={{width:'45%', display:'flex',flexWrap:'wrap',padding:'20px',zIndex:'1',border:'1px solid #dddddd',backgroundColor:'white', borderRadius:'20px', marginTop:'10px', gap:'20px' }}>

                            <Typography sx={{fontFamily:'Circular Bold',  color:'#393939',width:'100%',paddingLeft:'21px'}}>Busqueda por region</Typography>
                            <Box sx={{width:'100%',display:"flex", flexWrap:'wrap',alignItems:'center', gap:'10px', justifyContent:'center',padding:'20px'}}>
                                {busquedaPorRegion.map(region => (
                                    <Box sx={{...collapse_sx.busquedaPorRegionBox,gap:'5px'}}>
                                        <CardMedia
                                            component="img"
                                            sx={{width:'110px',border:'1px solid #dddddd',borderRadius:'20px', transition: '0.3s','&:hover': {
                                                    border: '1px solid black',

                                                },
                                                cursor:'pointer',
                                            }}

                                            image={region.img}
                                            alt="Descripción de la imagen"
                                        />
                                        <Typography sx={{fontFamily:'Circular Light',  color:'#7b7b7b',textAlign:'start'}}>{region.titulo}</Typography>
                                    </Box>

                                ))}
                            </Box>

                        </Box>
                    </Box>
                </Box>



            </Collapse>

)
}

export default ExpandingComponent;