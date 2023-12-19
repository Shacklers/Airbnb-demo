import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Grid,
    Paper,
    Box,
    Container,
    TextField,
    FormControlLabel, Switch, CardMedia, Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {navbar_style, navbar_sx, optionList_sx} from "../../styles/navbar/navbarStyle";
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import CarouselMenu from "./CarouselList";
import WordList from "./CarouselList";
import MenuWithScroll from "./CarouselList";
import FilterIcon from '@mui/icons-material/Filter';
import LanguageIcon from '@mui/icons-material/Language';
import AirBnbLogo from '../../assets/images/airbnb-seeklogo.com.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import OptionsBar from "./CarouselList";
import {TypoboxMobile, TypoBoxDesktop} from "./Typobox";
import ExpandingComponent from "./ExpandingComponent";

const useStyles = makeStyles((theme) => ({

    switch: {
        "& .Mui-checked": {
            color: "#000 !important"

        },
        "& .MuiSwitch-track": {
            backgroundColor: "#000 !important"
        }
    },
    button: {
        borderBottom: '2px solid transparent',
        transition: 'border-color 0.3s ease-in-out',
        '&:hover': {
            borderBottom: '2px solid #000',
        },
        '&:active': {
            borderBottom: '2px solid #000',
        },
        '&:focus': {
            outline: 'none', // Eliminar el contorno al hacer focus
        },
    },
}));





const Navbar = () => {
    const [mostrarTodo, setMostrarTodo] = useState(false);
    const [mostrarComponente, setMostrarComponente] = useState(false);



    const handleClick = () => {

        console.log('Haz hecho clic en el filtro');

    };

    const handleClickTwo = (text) => {
        alert(`Clicked: ${text}`);
        // Aquí podrías agregar la lógica que desees ejecutar al hacer clic
    };
    const handleChange = (event) => {
        setMostrarTodo(event.target.checked);
    };
    const classes = useStyles();

    const handleCollapse = () =>{
        setMostrarComponente(!mostrarComponente);
    }

    return(
        <AppBar >
            <Toolbar sx={navbar_sx.toolbarLayout}  disableGutters >
                <Box sx={navbar_sx.firstContainer} disableGutters>



                    <Box sx={navbar_sx.firstBox}>
                        <Box component = {NavLink} sx={navbar_sx.logoBox}>
                            <CardMedia
                                component="img"
                                sx = {navbar_sx.logo}

                                image={AirBnbLogo}
                                alt="Descripción de la imagen"
                            />
                            <Typography sx={{display:{xs:'none',lg:'flex'},fontFamily:'Circular Bold', color:'#e0565b',fontSize:'22px',}}>
                                Airbnb
                            </Typography>
                        </Box>
                        {!mostrarComponente?
                        <Box  sx={navbar_sx.inputSearch} onClick = {handleCollapse}  >
                            <IconButton >
                                <SearchIcon sx={navbar_sx.searchIcon}/>
                            </IconButton>

                            <Box sx={navbar_sx.boxTypography}>

                                <TypoboxMobile  sx={navbar_sx.typoBox}  ></TypoboxMobile>
                            </Box>


                        </Box>
                            :

                            <Box sx={{display:{xs:'none',md:'flex'}, gap:"20px", marginLeft: {md:'120px'}}}>
                                <Button style={{...navbar_style.navbar_button,borderRadius:'0px'}} className={classes.button}><Typography sx={{fontFamily:'Circular Light',textTransform: 'none'}}>Alojamientos</Typography></Button>
                                <Button style={{...navbar_style.navbar_button,borderRadius:'0px'}} className={classes.button}><Typography sx={{fontFamily:'Circular Light',textTransform: 'none'}}>Experiencias</Typography></Button>
                                <Button style={{...navbar_style.navbar_button,borderRadius:'0px'}} className={classes.button}> <Typography sx={{fontFamily:'Circular Light',textTransform: 'none'}}>Experiencias en linea</Typography></Button>
                            </Box>
                        }



                        <Box sx={navbar_sx.filterIcon}>
                            <IconButton>
                               <TuneIcon></TuneIcon>
                            </IconButton>
                        </Box>
                        <Box sx={navbar_sx.leftBox}>
                            <Box sx={navbar_sx.leftBoxFirstSon}>
                                <Button style={{...navbar_style.navbar_button, padding: '7px'}} sx={navbar_sx.button} onClick={() => handleClickTwo('Pon tu Airbnb')}>
                                    <Typography sx={{fontFamily:"Circular Bold",textTransform: 'none'}}>Pone tu Airbnb</Typography>
                                </Button>
                            </Box>
                            <Box sx={navbar_sx.leftBoxFirstSon} >
                                <Button style={{...navbar_style.navbar_button, padding: '5px'}} sx={{...navbar_sx.button, margin:'0'}} onClick={() => handleClickTwo('Icono del mundo')}>
                                    <LanguageIcon />
                                </Button>
                            </Box>
                            <Box sx={navbar_sx.leftBoxFirstSon}>
                                <Button style={{...navbar_style.navbar_button, padding: '10px'}} sx={{...navbar_sx.button, gap:'10px',  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }} onClick={() => handleClickTwo('Iconos de hamburguesa y usuario')}>
                                    <MenuIcon />
                                    <AccountCircleIcon />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <ExpandingComponent mostrarComponente={mostrarComponente}></ExpandingComponent>


                <Box sx={navbar_sx.secondContainer}>
                    <OptionsBar></OptionsBar>
                    <Box sx={navbar_sx.secondContainerBox}>


                        <Box onClick={handleClick} sx={navbar_sx.boxSecondContainerOne}>
                            <TuneIcon></TuneIcon>
                            <Typography sx={{ fontFamily: 'Circular Light',fontSize:'12px'}}>Filtrar</Typography>


                        </Box>
                        <Box sx={navbar_sx.boxSecondContainerTwo}>
                            <Typography sx={{fontFamily: 'Circular Light',fontSize:'12px'}}>Mostrar todo (sin impuestos)</Typography>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={mostrarTodo}
                                        onChange={handleChange}
                                        name="mostrarTodoSwitch"
                                        color="primary"
                                        className={classes.switch}
                                    />
                                }
                                label=""
                            />
                        </Box>
                    </Box>
                </Box>


            </Toolbar>
        </AppBar>
    )

}
export default Navbar;

