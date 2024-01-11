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
    FormControlLabel, Switch, CardMedia, Collapse, Popover, MenuItem, Menu, Divider, Dialog, DialogTitle,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {navbar_style, navbar_sx, optionList_sx} from "../../styles/navbar/navbarStyle";
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import CarouselMenu from "./navbar-components/CarouselList";
import WordList from "./navbar-components/CarouselList";
import MenuWithScroll from "./navbar-components/CarouselList";
import FilterIcon from '@mui/icons-material/Filter';
import LanguageIcon from '@mui/icons-material/Language';
import AirBnbLogo from '../../assets/images/airbnb-seeklogo.com.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import OptionsBar from "./navbar-components/CarouselList";
import {TypoboxMobile, TypoBoxDesktop} from "./navbar-components/Typobox";
import ExpandingComponent from "./navbar-components/ExpandingComponent";
import '../../assets/fonts/Brown/font_brown.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DiscreteSliderMarks from "./dialog-component/SliderDialog";
import TypeLodgingDialog from "./dialog-component/TypeLedgingDialog";
import CloseIcon from '@mui/icons-material/Close';
import PriceRange from "./dialog-component/PriceRange";
import FirstClassAccommodation from "./dialog-component/FirstClassAccommodation";
import TypeOfProperty from "./dialog-component/TypeOfProperty";

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
    const [showDialog, setShowDialog] = useState(false);

    const handleClickDialog = () => {

        setShowDialog(true);
    };

    const handleCloseDialog = () => {

            setShowDialog(false);





    };



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



        const [anchorEl, setAnchorEl] = useState(null);

        const handleClickThree = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleCloseThree = () => {
            setAnchorEl(null);
        };







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
                            <Typography sx={{display:{xs:'none',lg:'flex'},fontFamily:'LL brown', color:'#ff385c',fontSize:'25px',}}>
                                airbnb
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



                        <Box sx={navbar_sx.filterIcon} >
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
                                <Button onClick={handleClickThree} style={{...navbar_style.navbar_button, padding: '10px'}} sx={{...navbar_sx.button, gap:'10px',  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                                    <MenuIcon />
                                    <AccountCircleIcon />
                                </Button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseThree}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right', // Ajusta la posición horizontal de la transformación
                                        }}


                                    >
                                        <MenuItem onClick={handleCloseThree}><Typography sx={{width:'200px',fontFamily:'Circular Bold',color:'#2d2d2d'}}>Registrate</Typography></MenuItem>
                                        <MenuItem onClick={handleCloseThree}><Typography sx={{width:'200px',fontFamily:'Circular Light'}}>Inicia sesion</Typography></MenuItem>
                                        <Divider></Divider>
                                        <MenuItem onClick={handleCloseThree}><Typography sx={{width:'200px',fontFamily:'Circular Light'}}>Pone tu Airbnb</Typography></MenuItem>
                                        <MenuItem onClick={handleCloseThree}><Typography sx={{width:'200px',fontFamily:'Circular Light'}}>Centro de ayuda</Typography></MenuItem>
                                    </Menu>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <ExpandingComponent mostrarComponente={mostrarComponente}></ExpandingComponent>


                <Box sx={navbar_sx.secondContainer}>
                    <OptionsBar></OptionsBar>
                    <Box sx={navbar_sx.secondContainerBox}>


                        <Box onClick={handleClickDialog} sx={navbar_sx.boxSecondContainerOne}>
                            <TuneIcon></TuneIcon>
                            <Typography sx={{ fontFamily: 'Circular Light',fontSize:'12px'}}>Filtrar</Typography>
                            <FilterDialog open={showDialog}  ></FilterDialog>

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


const FilterDialog = ({open,onClose}) => {




    return(
        <Dialog open={open} maxWidth={'md'} >
            <DialogTitle>
                <Button onClick={onClose}><CloseIcon> </CloseIcon></Button>
                Filtros</DialogTitle>
        <Box  sx={{width:'100%',height:'2000px',display:'flex',flexDirection:'column',gap:'20px'}} >
                <TypeLodgingDialog></TypeLodgingDialog>
                <PriceRange></PriceRange>
                <DiscreteSliderMarks></DiscreteSliderMarks>
                <FirstClassAccommodation></FirstClassAccommodation>
                <TypeOfProperty></TypeOfProperty>
            </Box>

        </Dialog>
    )
}

export default Navbar;

