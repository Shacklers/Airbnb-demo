import React, { useState } from 'react';
import {
    Collapse,
    Button,
    Paper,
    Typography,
    Box,
    IconButton,
    CardMedia,
    List,
    Grid,
    ListItemText,
    ListItem,
    Divider
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {collapse_style, collapse_sx, navbar_sx} from "../../styles/navbar/navbarStyle";
import SearchIcon from "@mui/icons-material/Search";
import {busquedaPorRegion} from '../../assets/data/data'
import AirBnbLogo from "../../assets/images/airbnb-seeklogo.com.svg";
import DateCalendarValue from "./Calendar";
import SwitchCollapse from "./SwitchCollapse";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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

    const [activeCollapse, setActiveCollapse] = useState(null);
    const [showCounterList, setShowCounterList] = useState(false);

    const toggleCounterList = () => {
        setShowCounterList(!showCounterList);
    };
    const handleButtonClick = (buttonId) => {
        if (activeCollapse !== buttonId) {
            if(open === true){
                setOpen(false)
            }
            setActiveCollapse(buttonId);
            console.log(activeCollapse)

        } else {
            setActiveCollapse(null); // Desactiva el collapse actual si se hace clic en él nuevamente
            console.log(activeCollapse)
        }
    };





    const [open, setOpen] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClickCheck = (buttonId) => {
        if (activeButton !== buttonId) {
            setOpen(true);
            setActiveButton(buttonId);
            setActiveCollapse(null);
        } else {
            setOpen((prevOpen) => !prevOpen);
            setActiveCollapse(null);
        }
    };




    return (
        <>
            <Collapse sx={{width:'100%',display:{xs:'none',md:'flex'}, alignItems:'center',}} in={mostrarComponente} unmountOnExit>

                    <Box sx={collapse_sx.boxCollapse}>
                        <Box sx={collapse_sx.buttonBox} >
                            <Button onClick={() => handleButtonClick(1)} style={{...collapse_style.buttonCollapse, width:'40%', justifyContent:'center', alignItems:'start',flexDirection:'column'}}>
                                <Typography sx={{...collapse_sx.typographyCollapse, paddingLeft:'20px'}}>Lugar</Typography>
                                <Typography sx={{...collapse_sx.typographyCollapse, fontFamily:'Circular Light',paddingLeft:'20px'}}>Explorar destinos</Typography>
                            </Button>

                            <Box sx={{ height: '60%', borderLeft: '1px solid rgba(0, 0, 0, 0.12)',}}></Box>
                            <Button   onClick={() => handleButtonClickCheck(5)}  style={{...collapse_style.buttonCollapse, width:'20%',paddingLeft:'20px'}}>
                                <Typography sx={collapse_sx.typographyCollapse}>Check in</Typography>
                                <Typography sx={{...collapse_sx.typographyCollapse, fontFamily:'Circular Light'}}>Cuando?</Typography>
                            </Button>
                            <Box sx={{ height: '60%', borderLeft: '1px solid rgba(0, 0, 0, 0.12)',}}></Box>
                            <Button   onClick={() => handleButtonClickCheck(6)}  style={{...collapse_style.buttonCollapse, width:'20%',paddingLeft:'20px'}}>
                                <Typography sx={collapse_sx.typographyCollapse}>Check out</Typography>
                                <Typography sx={{...collapse_sx.typographyCollapse, fontFamily:'Circular Light'}}>Cuando?</Typography>
                            </Button>
                            <Box sx={{ height: '60%', borderLeft: '1px solid rgba(0, 0, 0, 0.12)',}}></Box>
                            <Button onClick={() => handleButtonClick(2)} style={{...collapse_style.buttonCollapse, flexDirection:'row', justifyContent:'space-between',alignItems:'center',width:'35%',paddingLeft:'20px',}} >
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
                        <SingleCollapse id={1} active={activeCollapse === 1}>
                            <BusquedaPorRegion mostrarBusquedaPorRegion={activeCollapse}></BusquedaPorRegion>
                        </SingleCollapse>


                        <CheckInCollapse open={open} ></CheckInCollapse>


                        <SingleCollapse id={2} active={activeCollapse === 2}>
                            <HostageCollapse open={activeCollapse}></HostageCollapse>
                        </SingleCollapse>




                    </Box>

            </Collapse>
        </>
    );
};


const SingleCollapse = ({ id, active, children }) => {
    return (
        <Collapse in={active} unmountOnExit sx={{width: '100%'}}>
            {children}
        </Collapse>
    );
};



const BusquedaPorRegion = ({mostrarBusquedaPorRegion}) => {
    return(



            <Collapse sx={{width:'100%',display:{xs:'none',md:'flex'}, alignItems:'center'}} in={mostrarBusquedaPorRegion} unmountOnExit>

                <Box sx={{...collapse_sx.boxCollapse, height:'auto',justifyContent:'center',flexDirection:'row',}}>
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

const CheckInCollapse = ({open}) => {
    return(
    <Collapse sx={{width:'100%',display:{xs:'none',md:'flex'}, alignItems:'center'}} in={open} unmountOnExit>

        <Box sx={{...collapse_sx.boxCollapse, height:'auto',justifyContent:'center'}}>
            <Box sx={{width:'50%', display:'flex',height:'auto',justifyContent:'start'}}>

                <Box sx={{width:'100%', display:'flex',flexWrap:'wrap',padding:'20px',zIndex:'1',border:'1px solid #dddddd',backgroundColor:'white', borderRadius:'20px', marginTop:'10px', gap:'20px' , flexDirection:'column',height:'500px',alignItems:'center',}}>

                    <Typography sx={{fontFamily:'Circular Bold',  color:'#393939',width:'100%',paddingLeft:'21px'}}>Busqueda por region</Typography>
                   <SwitchCollapse></SwitchCollapse>
                   <DateCalendarValue></DateCalendarValue>

                </Box>
            </Box>
        </Box>
        </Collapse>
    )
}



const HostageCollapse = (open) => {
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [babyCount, setBabyCount] = useState(0);
    const [petCount, setPetCount] = useState(0);

    const handleIncrement = (type) => {
        switch (type) {
            case 'adult':
                setAdultCount(adultCount + 1);
                break;
            case 'child':
                setChildCount(childCount + 1);
                break;
            case 'baby':
                setBabyCount(babyCount + 1);
                break;
            case 'pet':
                setPetCount(petCount + 1);
                break;
            default:
                break;
        }
    };

    const handleDecrement = (type) => {
        switch (type) {
            case 'adult':
                setAdultCount(adultCount > 0 ? adultCount - 1 : 0);
                break;
            case 'child':
                setChildCount(childCount > 0 ? childCount - 1 : 0);
                break;
            case 'baby':
                setBabyCount(babyCount > 0 ? babyCount - 1 : 0);
                break;
            case 'pet':
                setPetCount(petCount > 0 ? petCount - 1 : 0);
                break;
            default:
                break;
        }
    };

    return (
        <Collapse sx={{width:'100%',display:{xs:'none',md:'flex'}, alignItems:'center'}} in={open} unmountOnExit>

            <Box sx={{...collapse_sx.boxCollapse, height:'auto',justifyContent:'center',marginLeft:'240px'}}>
                <Box sx={{width:'25%', display:'flex',height:'auto',justifyContent:'start',}}>

                    <Box sx={{width:'100%', display:'flex',flexWrap:'wrap',padding:'20px',zIndex:'1',border:'1px solid #dddddd',backgroundColor:'white', borderRadius:'20px', marginTop:'10px', gap:'20px' , flexDirection:'column',height:'350px',alignItems:'center',}}>

                        <List sx={{width:'100%',display:'flex',flexDirection:'column',gap:'20px'}}>
                            <Grid sx={{color:'black',display:'flex',flexDirection:'column',gap:'10px'}}>
                                <ListItem sx={{ display:'flex', justifyContent:'center',alignItems:'center',gap:'20px'}}>
                                    <Box sx={{display:'flex',width:'70%',flexDirection:'column'}}>
                                        <Typography >Adultos</Typography>
                                        <Typography >De 13 años o más</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',height:'100%', width:'100%',gap:'20px', justifyContent:'center',alignItems:'center'}}>

                                        <Button style={{borderRadius:'9999px',height:'80%' , minWidth:'0'}} onClick={() => handleDecrement('adult')}>
                                            <RemoveIcon  sx={{color:'black'}}/>

                                        </Button>

                                        <Typography>{adultCount}</Typography>

                                        <Button style={{borderRadius:'9999px',height:'80%' , minWidth:'0'}} onClick={() => handleIncrement('adult')}>
                                            <AddIcon sx={{color:'black'}} />
                                        </Button>
                                    </Box>


                                </ListItem>
                                <Divider />
                                <ListItem sx={{ display:'flex', justifyContent:'center',alignItems:'center',gap:'20px'}}>
                                    <Box sx={{display:'flex',width:'70%',flexDirection:'column'}}>
                                        <Typography>Niños</Typography>
                                        <Typography >De 2 años a 12 años</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',height:'100%', width:'100%',gap:'20px', justifyContent:'center',alignItems:'center'}}>

                                        <Button style={{borderRadius:'9999px',height:'80%' , minWidth:'0'}} onClick={() => handleDecrement('child')}>
                                            <RemoveIcon sx={{color:'black'}}/>

                                        </Button>

                                        <Typography>{childCount}</Typography>

                                        <Button style={{borderRadius:'9999px',height:'80%' , minWidth:'0'}} onClick={() => handleIncrement('child')}>
                                            <AddIcon sx={{color:'black'}} />
                                        </Button>
                                    </Box>


                                </ListItem>
                                <Divider />
                                <ListItem sx={{ display:'flex', justifyContent:'center',alignItems:'center',gap:'20px'}}>
                                    <Box sx={{display:'flex',width:'70%',flexDirection:'column'}}>
                                        <Typography >Bebés</Typography>
                                        <Typography>Menos de 2 años</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',height:'100%', width:'100%',gap:'20px', justifyContent:'center',alignItems:'center'}}>

                                        <Button style={{borderRadius:'9999px',height:'80%', minWidth:'0'}} onClick={() => handleDecrement('baby')}>
                                            <RemoveIcon sx={{color:'black'}}/>

                                        </Button>

                                        <Typography>{babyCount}</Typography>

                                        <Button style={{borderRadius:'9999px',height:'80%' , minWidth:'0'}} onClick={() => handleIncrement('baby')}>
                                            <AddIcon sx={{color:'black'}}/>
                                        </Button>
                                    </Box>


                                </ListItem>
                                <Divider />
                                <ListItem sx={{ display:'flex', justifyContent:'center',alignItems:'center',gap:'20px'}}>
                                    <Box sx={{display:'flex',width:'70%',flexDirection:'column'}}>
                                        <Typography >Mascotas</Typography>

                                    </Box>
                                    <Box sx={{display:'flex',height:'100%', width:'100%',gap:'20px', justifyContent:'center',alignItems:'center'}}>

                                        <Button style={{borderRadius:'9999px',height:'100%' , minWidth:'0'}} onClick={() => handleDecrement('pet')}>
                                            <RemoveIcon sx={{color:'black'}}/>

                                        </Button>

                                        <Typography>{petCount}</Typography>

                                        <Button style={{borderRadius:'9999px',height:'100%' , minWidth:'0'}} onClick={() => handleIncrement('pet')}>
                                            <AddIcon sx={{color:'black'}} />
                                        </Button>
                                    </Box>


                                </ListItem>
                                <Divider />
                            </Grid>
                        </List>

                    </Box>
                </Box>
            </Box>
        </Collapse>
    );
}


export default ExpandingComponent;





