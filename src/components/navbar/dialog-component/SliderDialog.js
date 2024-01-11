import {Box, Slider, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import '../../../assets/fonts/Circular/font_circular.css'





const category = ['Dormitorios', 'Camas', 'Baños',]





const marks = [

            {
                quantity: 'Cualquiera',

            },
            {
                quantity: '1',

            },
            {
                quantity: '2',

            },
            {
                quantity: '3',

            },
            {
                quantity: '4',

            },
            {
                quantity: '5',

            },
            {
                quantity: '6',

            },
            {
                quantity: '7',

            },
            {
                quantity: '8+',

            },



];

function valuetext(value) {
    return `${value} habitaciones`;
}

export default function DiscreteSliderMarks() {
    const [selectedRoom, setSelectedRoom] = useState(0);
    const [selectedBed, setSelectedBed] = useState(0);
    const [selectedBath, setSelectedBath] = useState(0);
    const [roomNumber,setRoomNumber] = useState(0);

    const cambiarColorRoom = (index) => {
        setSelectedRoom(index);
    };
    const cambiarColorBed = (index) => {
        setSelectedBed(index);
    };
    const cambiarColorBath = (index) => {
        setSelectedBath(index);
    };

    useEffect(()=> {
        if(selectedRoom !== null){
            setRoomNumber(selectedRoom)

        }

    },[selectedRoom])



    return (
        <Box  sx={{width:'auto',display:'flex',gap:'20px',padding:'20px',height:'auto',flexDirection:'column'}}>
            <Typography sx={{fontFamily:'Circular Bold',fontSize:'25px'}}>Habitaciones y camas</Typography>
          <Box sx={{display:'flex', alignItems:'center',gap:'20px',flexWrap:'wrap'}}>
              <Typography style={{width:'100%',fontFamily:'Circular Light'}}>{category[0]}</Typography>

            {

                        marks.map((rooms,index) =>(


                            <Box
                                key={index}
                                sx={{cursor:'pointer',width:'auto',paddingLeft:'20px',paddingRight:'20px',height:'30px',border:'1px solid #ebebeb',
                                    borderBottomLeftRadius:'30px', borderBottomRightRadius:'30px',borderTopLeftRadius:'30px',borderTopRightRadius:'30px',display:'flex',justifyContent:'center',alignItems:'center',
                                    backgroundColor:selectedRoom === index ? 'black' : 'white',

                                    '&:hover': {

                                        borderColor:'black',
                                    },
                                }} onClick={() => cambiarColorRoom(index)}

                            ><Typography sx={{fontSize:'13px',color:selectedRoom === index ? 'white' : 'black',  fontFamily:'Circular Light',}}>{rooms.quantity}</Typography></Box>
                        )
                )



            }
          </Box>
            <Box sx={{display:'flex', alignItems:'center',gap:'20px',flexWrap:'wrap'}}>
                <Typography style={{width:'100%',fontFamily:'Circular Light'}}>{category[1]}</Typography>

                {

                    marks.map((rooms,index) =>(


                            <Box
                                key={index}
                                sx={{cursor:'pointer',width:'auto',paddingLeft:'20px',paddingRight:'20px',height:'30px',border:'1px solid #ebebeb',
                                    borderBottomLeftRadius:'30px', borderBottomRightRadius:'30px',borderTopLeftRadius:'30px',borderTopRightRadius:'30px',display:'flex',justifyContent:'center',alignItems:'center',
                                    backgroundColor:selectedBed=== index ? 'black' : 'white',
                                    '&:hover': {

                                        borderColor:'black',
                                    },
                                }} onClick={() => cambiarColorBed(index)}

                            ><Typography sx={{fontSize:'13px',color:selectedBed === index ? 'white' : 'black',fontFamily:'Circular Light'}}>{rooms.quantity}</Typography></Box>
                        )
                    )



                }
            </Box>
            <Box sx={{display:'flex', alignItems:'center',gap:'20px',flexWrap:'wrap'}}>
                <Typography style={{width:'100%',fontFamily:'Circular Light'}}>{category[2]}</Typography>

                {

                    marks.map((rooms,index) =>(


                            <Box
                                key={index}
                                sx={{cursor:'pointer',width:'auto',paddingLeft:'20px',paddingRight:'20px',height:'30px',border:'1px solid #ebebeb',
                                    borderBottomLeftRadius:'30px', borderBottomRightRadius:'30px',borderTopLeftRadius:'30px',borderTopRightRadius:'30px',display:'flex',justifyContent:'center',alignItems:'center',
                                    backgroundColor:selectedBath === index ? 'black' : 'white',
                                    '&:hover': {

                                        borderColor:'black',
                                    },
                                }} onClick={() => cambiarColorBath(index)}

                            ><Typography sx={{fontSize:'13px',color:selectedBath=== index ? 'white' : 'black',fontFamily:'Circular Light'}}>{rooms.quantity}</Typography></Box>
                        )
                    )



                }
            </Box>
        </Box>
    );
}