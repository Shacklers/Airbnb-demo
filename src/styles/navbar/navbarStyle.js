import '../../assets/fonts/Circular/font_circular.css'
import {tabsClasses} from "@mui/material";
import {TypoboxMobile} from "../../components/navbar/Typobox";
const navbar_sx  = {
    toolbarLayout : {
        height: 'auto',//{xs:'120px', md:'100px', xl:'100px'}
        backgroundColor:'white',
        padding:'0px',
        flexDirection:{xs:'column', md:'column'},



    },
    firstContainer: {
        display:'flex',
        flexDirection: 'row',
        alignItems:"center",

        padding:'0',
        justifyContent:'center'



    },
    firstBox: {
        display:'flex',
        width:'90%',
        height:{xs:"70px"},
        alignItems:"center",
        justifyContent: {xs:'space-between',md:'space-around'},
        flexDirection:{md:'row'},
        padding:{xs:'10px'},


    },

    inputSearch:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        width:{xs:'80%', md:'50%'},
        height:{xs:'60px',md:'45px'},
        gap: {xs:'10px'},
        borderRadius: {xs:'30px'},
        flexDirection: {xs:'row',md:'row-reverse'},
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',


    },
    leftBox:{
      display:{xs:'none',md:'flex'},
        alignItems:"center",
        justifyContent:'center',
        width:'35%',
        height:'100%',
        gap:'10px',



    },
    leftBoxFirstSon:{

        display:'flex',



    },
    button:{
        display:"flex",
        borderRadius: '20px',
        padding: '8px 16px',
        width:'auto',
        minWidth: 'unset',

    },

    boxTypography:{
        width:"100%",
        display:'flex',
        alignItems:{xs:"start", md:'start'} ,
        justifyContent:{xs:"start", md:'center'} ,
        flexDirection: {xs:'row', md:'row'},
        flexWrap:'wrap',

        gap: {xs:'5px',md:'10px'},


    },
    searchIcon:{
        fontSize:{xs:'30px'},
        padding:'5px',
        backgroundColor:'salmon',
        borderRadius:'50%',
        color:'white',

    },
    typoBox:{

    },

    typography:{
        fontFamily:'Circular Light',
        display:{xs:'flex'},
        justifyContent:"center",
        flexDirection:"column",
        fontSize:{xs:'12.3px'},
        color:'#7b7b7b',
        padding: {md:'7px'},
        textAlign:"center",
        gap:'10px',
        margin:'0'


    },


    filterIcon:{
        height:{xs:'50px'},
        width:{xs:'50px',},
        backgroundColor:"white",
        display: {xs:'flex',md:'none'},
        justifyContent:'center',
        border: '1px solid #7b7b7b',
        borderRadius:{xs:'50%',},
    },
    secondContainerBox:{
        display:{xs:'none', md:"flex"},
        gap:'10px',
        height:'10%',




    },
    boxSecondContainerOne:{
        display:{xs:'none', md:"flex"},

        color:'#7b7b7b',
        gap:'10px',
        cursor: 'pointer',
        height:'50px',
        width:'100px',
        borderRadius:'10px',
        justifyContent:'center',
        alignItems:'center',
        border:'1px solid #dddddd'


    },
    boxSecondContainerTwo:{
        display:{xs:'none', md:"flex"},
        justifyContent:'center',
        alignItems:"center",
        cursor: 'pointer',
        color:'#7b7b7b',
        width:'250px',
        gap:'10px',
        borderRadius:'10px',
        border:'1px solid #dddddd'


    }

}


const optionList_sx = {
    box:{
        width:{xs:'100%'},

    },
    tabs:{




    },
    tab: {


        fontSize: "10px",

    }
}

const navbar_style = {
    navbar_button : {
        color:'#7b7b7b',
        padding:'5px',


    }
}


export {navbar_sx, optionList_sx, navbar_style};