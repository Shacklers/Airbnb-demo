import HouseIcon from '@mui/icons-material/House';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ApartmentIcon from '@mui/icons-material/Apartment';
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
    const [selectedBoxCasa, setSelectedBoxCasa] = useState(true);
    const [selectedBoxHospedaje, setSelectedBoxHospedaje] = useState(true);
    const [selectedBoxApartment, setSelectedBoxApartment] = useState(true);
    const [selectedBoxHotel, setSelectedBoxHotel] = useState(true);

    const handleBoxClickCasa = () => {
        setSelectedBoxCasa(!selectedBoxCasa);
    };

    const handleBoxClickHospedaje = () => {
        setSelectedBoxHospedaje(!selectedBoxHospedaje);
    };

    const handleBoxClickDepto = () => {
        setSelectedBoxApartment(!selectedBoxApartment);
    };

    const handleBoxClickHotel = () => {
        setSelectedBoxHotel(!selectedBoxHotel);
    };

    return(
        <Box sx={{...sx_style.main_box}}>
            <Typography sx={{fontSize:'25px',fontFamily:'Circular Bold'}}>Tipo de propiedad</Typography>
            <Box sx={{display:'flex', width:'100%',gap:'20px',height:'50%' }}>




                <Box onClick={handleBoxClickCasa} sx={{display:'flex',width:'18%',height:'120px', flexDirection:'column',boxSizing:'contentBox',paddingLeft:'15px',border:'1px solid black',borderRadius:'20px', cursor:'pointer', backgroundColor: selectedBoxCasa? 'white':'black'}}>
                    <Box sx={{height:'50%',display:'flex', justifyContent:'start', alignItems:'center'}}>
                        <HouseIcon sx={{width:'30px',height:'100px'}}></HouseIcon>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', height:'50%'}}>
                        <Typography sx={{fontFamily:'Circular Bold', display:'flex',justifyContent:'start',width:'50%'}}>
                            Casa
                        </Typography>
                    </Box>
                </Box>

                <Box onClick={handleBoxClickHospedaje} sx={{display:'flex',width:'18%',height:'120px', flexDirection:'column',boxSizing:'contentBox',paddingLeft:'15px',border:'1px solid black',borderRadius:'20px', cursor:'pointer', backgroundColor: selectedBoxHospedaje? 'white':'black'}}>
                    <Box sx={{height:'50%',display:'flex', justifyContent:'start', alignItems:'center'}}>
                        <OtherHousesIcon  sx={{width:'30px',height:'100px'}}></OtherHousesIcon>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', height:'50%'}}>
                        <Typography sx={{fontFamily:'Circular Bold', display:'flex',justifyContent:'start',width:'50%'}}>
                            Casa de huespedes
                        </Typography>
                    </Box>
                </Box>

                <Box onClick={handleBoxClickDepto} sx={{display:'flex',width:'18%',height:'120px', flexDirection:'column',boxSizing:'contentBox',paddingLeft:'15px',border:'1px solid black',borderRadius:'20px', cursor:'pointer', backgroundColor: selectedBoxApartment? 'white':'black'}}>
                    <Box sx={{height:'50%',display:'flex', justifyContent:'start', alignItems:'center'}}>
                        <ApartmentIcon sx={{width:'30px',height:'100px'}}></ApartmentIcon>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', height:'50%'}}>
                        <Typography sx={{fontFamily:'Circular Bold', display:'flex',justifyContent:'start',width:'50%'}}>
                            Departamento
                        </Typography>
                    </Box>

                </Box>

                <Box onClick={handleBoxClickHotel} sx={{display:'flex',width:'18%',height:'120px', flexDirection:'column',boxSizing:'contentBox',paddingLeft:'15px',border:'1px solid black',borderRadius:'20px', cursor:'pointer', backgroundColor: selectedBoxHotel? 'white':'black'}}>
                    <Box sx={{height:'50%',display:'flex', justifyContent:'start', alignItems:'center'}}>
                        <LocationCityIcon  sx={{width:'30px',height:'100px'}}></LocationCityIcon>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', height:'50%'}}>
                        <Typography sx={{fontFamily:'Circular Bold', display:'flex',justifyContent:'start',width:'50%'}}>
                            Hotel
                        </Typography>
                    </Box>
                </Box>





            </Box>
        </Box>
    )

}

export default TypeOfProperty