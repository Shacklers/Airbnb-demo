import '../../assets/fonts/Circular/font_circular.css'

const TypeLodgingDialog_sx = {
    firstBox : {
        display:'flex',
        gap:'30px',
        flexDirection:'column',
        width:'100%',
        paddingTop:'10px',
        paddingBottom:'10px',


    },

    titleBox : {
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        width:'100%',
        paddingLeft:'20px'
    },

    lodgingTypeBox:{

        display:'flex',
        width:'80%',
        paddingLeft:'10%',
        borderRadius: "10px 20px 10px 20px",



    },
    lodgingType:{
        display:'flex',

        height:'60px',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer',
        border:'1px solid #dbdbdb',
        width:'33%',
        '&:hover': {
            border:'1px solid black'
        }

    },

    lodgingTypograhpy:{
        fontFamily:'Circular Bold'
    }



}


export {TypeLodgingDialog_sx}