import {Box, Typography} from "@mui/material";
import '../../../assets/fonts/Circular/font_circular.css';
import LaurelIcon from "../../../assets/icons/LaurelIcon";
const sx_style = {
    mainBox: {
        width:'100%',
        paddingLeft:'20px',
        display:'flex',
        flexWrap:'wrap',
        gap:'20px',

    },

    titleTypo:{
        fontFamily:'Circular Bold',
        fontSize:'25px',
        width:'100%',

    },

    favAccommodation:{

        width:'308px',
        height:'112px',
        paddingTop:'20px',
        paddingBottom:'20px',
        paddingLeft:'24px',
        paddingRight:"24px",
        border:'1px solid orange',
        borderRadius:'30px',
        cursor:'pointer',
        transition:'0.2s',
        '&:hover':{
            border:'1px solid black',
            transition:'0.2s'
        }

    },

    favAccommodationTitle:{
        fontFamily:'Circular Bold',
        fontSize:'14px',
    },

    favAccommodationSub:{
        fontFamily:'Circular Light',
        fontSize:'12px',
        width:'200px',
        height:'278px',
        marginTop:'4px',
    },

}



const FirstClassAccommodation = () => {


    return(
        <Box sx={{...sx_style.mainBox}}>
            <Typography sx={{...sx_style.titleTypo}}>Alojamientos de primera</Typography>
            <Box>
                <Box sx={{...sx_style.favAccommodation}}>

                    <Box sx={{width:'50px', height:'50px',marginBottom:'5px'}}> <LaurelIcon style={{ width: '50px', height: '50px' }} ></LaurelIcon></Box>
                    <Typography  sx={{...sx_style.favAccommodationTitle}}>Favoritos entre huespedes</Typography>
                    <Typography  sx={{...sx_style.favAccommodationSub}}>Los alojamientos en Airbnb mas encantadores, segun los huespedes</Typography>
                </Box>
            </Box>
        </Box>
    )
}


export default FirstClassAccommodation;
