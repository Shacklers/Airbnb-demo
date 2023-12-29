import {Typography} from "@mui/material";
import {navbar_sx} from "../../../styles/navbar/navbarStyle";
import React from "react";

const TypoboxMobile = () => {
    return(
        <>
            <Typography sx={{...navbar_sx.typography, fontFamily:'Circular Bold',marginBottom: '0px', borderRight: {md:'1px solid #dddddd'},color:'#2d2d2d'}}>
               A cualquier lugar
            </Typography >
            <Typography sx={{...navbar_sx.typography, fontFamily: {xs:'Circular Light', md:'Circular Bold'},marginBottom: '0px', borderRight:{md:'1px solid #dddddd'},color:'#2d2d2d'}}>
                semana (en cualquier fecha)
            </Typography>
            <Typography sx={navbar_sx.typography}>
                Cuántos?
            </Typography>
        </>

    )
}

const TypoBoxDesktop = () => {
    return(<>

    </>)
}

export  {TypoboxMobile, TypoBoxDesktop};
