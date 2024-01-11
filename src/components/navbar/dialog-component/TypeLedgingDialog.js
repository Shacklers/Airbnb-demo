import {Box, Typography} from "@mui/material";
import {TypeLodgingDialog_sx} from '../../../styles/navbar/DialogStyle'
import {useState} from "react";
import '../../../assets/fonts/Circular/font_circular.css'
const TypeLodgingDialog = () => {
    const [selectedBox, setSelectedBox] = useState(null);

    const handleBoxClick = (boxName) => {
        setSelectedBox(boxName === selectedBox ? null : boxName);
    };


    return(
        <Box sx={{...TypeLodgingDialog_sx.firstBox}}>
            <Box sx={{...TypeLodgingDialog_sx.titleBox}}>
                <Typography sx={{fontFamily:'Circular Bold',fontSize:'25px'}}>Tipo de alojamiento</Typography>
                <Typography sx={{fontFamily:'Circular Light',fontSize:'15px',color:'#252525'}}>Busca habitaciones, alojamientos enteros o cualquier otro tipo de espacio.</Typography>
            </Box>
            <Box>
                <Box sx={{...TypeLodgingDialog_sx.lodgingTypeBox}}>
                    <Box sx={{...TypeLodgingDialog_sx.lodgingType, borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px',   backgroundColor: selectedBox === 'anyType' ? 'black' : 'white',}}  onClick={() => handleBoxClick('anyType')}>
                        <Typography sx={{...TypeLodgingDialog_sx.lodgingTypograhpy,color: selectedBox === 'anyType' ? 'white' : 'black',}}>Cualquier tipo</Typography></Box>
                    <Box sx={{...TypeLodgingDialog_sx.lodgingType, backgroundColor:selectedBox === 'room' ? 'black' : 'white'}}  onClick={() => handleBoxClick('room')}>
                        <Typography sx={{...TypeLodgingDialog_sx.lodgingTypograhpy,color: selectedBox === 'room' ? 'white' : 'black',}}>Habitacion</Typography>
                    </Box>

                    <Box sx={{...
                            TypeLodgingDialog_sx.lodgingType,
                            borderTopRightRadius:'20px',
                            borderBottomRightRadius:'20px',
                            backgroundColor:selectedBox === 'entireAccommodation' ? 'black' : 'white'}}
                         onClick={() => handleBoxClick('entireAccommodation')}>

                        <Typography sx={{...TypeLodgingDialog_sx.lodgingTypograhpy,color: selectedBox === 'entireAccommodation' ? 'white' : 'black',}}>Alojamiento entero</Typography></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TypeLodgingDialog;