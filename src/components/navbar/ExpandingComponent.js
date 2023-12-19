import React, { useState } from 'react';
import {Collapse, Button, Paper, Typography, Box, IconButton} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {collapse_style, collapse_sx, navbar_sx} from "../../styles/navbar/navbarStyle";
import SearchIcon from "@mui/icons-material/Search";

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




    return (
        <>
            <Collapse sx={{width:'100%',display:{xs:'none',md:'flex'}, alignItems:'center'}} in={mostrarComponente} unmountOnExit>

                    <Box sx={collapse_sx.boxCollapse}>
                        <Box sx={collapse_sx.buttonBox} >
                            <Button style={{...collapse_style.buttonCollapse, width:'40%', justifyContent:'center', alignItems:'start',flexDirection:'column'}}>
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
                            <Button  style={{...collapse_style.buttonCollapse,  flexDirection:'row', justifyContent:'space-around',alignItems:'center',width:'35%',paddingLeft:'20px',}} >
                                <Box sx={{display:'flex',flexDirection:'column',paddingRight:'5px',}}>
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
                    </Box>

            </Collapse>
        </>
    );
};

export default ExpandingComponent;