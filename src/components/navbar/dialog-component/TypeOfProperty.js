import HouseIcon from '@mui/icons-material/House';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import {useState} from "react";
import {Box, Typography} from "@mui/material";
import '../../../assets/fonts/Circular/font_circular.css'

const properties = [
    {
        icon:<HouseIcon sx={{width:'30px',height:'100px'}}></HouseIcon>,
        name:'Casa'

    },
    {
        icon:<OtherHousesIcon  sx={{width:'30px',height:'100px'}}></OtherHousesIcon>,
        name:'Casa de huespedes'

    },
    {
        icon:<LocationCityIcon  sx={{width:'30px',height:'100px'}}></LocationCityIcon>,
        name:'Hotel',
    }
]

const sx_style = {
    main_box: {
        width:'100%',
        height:'250px',

        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        gap:'20px',
        paddingLeft:'20PX'
    }
}



const TypeOfProperty = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [selectedBed, setSelectedBed] = useState(null);
    const [selectedBath, setSelectedBath] = useState(null);


    const cambiarColorRoom = (index) => {
        setSelectedRoom(index);
    };
    const cambiarColorBed = (index) => {
        setSelectedBed(index);
    };
    const cambiarColorBath = (index) => {
        setSelectedBath(index);
    };

    return(
        <Box sx={{...sx_style.main_box}}>
            <Typography sx={{fontSize:'25px',fontFamily:'Circular Bold'}}>Tipo de propiedad</Typography>
            <Box sx={{display:'flex', width:'100%',gap:'20px',height:'50%' }}>


                {properties.map((propiety)=>(
                    <Box sx={{display:'flex',width:'18%',height:'120px', flexDirection:'column',boxSizing:'contentBox',paddingLeft:'15px',border:'1px solid black',borderRadius:'20px', cursor:'pointer'}}>
                        <Box sx={{height:'50%',display:'flex', justifyContent:'start', alignItems:'center'}}>
                            {propiety.icon}
                        </Box>
                        <Typography sx={{fontFamily:'Circular Bold', display:'flex',justifyContent:'start',width:'50%'}}>
                            {propiety.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )

}

export default TypeOfProperty