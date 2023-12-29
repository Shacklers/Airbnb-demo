import React from 'react';
import {Tabs, Tab, Box, IconButton, Paper, Icon} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {options} from '../../../assets/data/data.js';
import * as Icons from '@mui/icons-material';
import {optionList_sx} from "../../../styles/navbar/navbarStyle";



const theme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: 'black',

                    },
                    textTransform: 'none',
                },
                scrollbar: {
                    '&::-webkit-scrollbar': {
                        width: '12px',
                        backgroundColor:'black'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'black', // Cambia el color del scrollbar
                        borderRadius: '6px',
                    },
                }


            },

        },
    },
    typography: {
        fontFamily: 'Circular Light',
    },

});



const OptionsBar = () => {
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={optionList_sx.box}>
            <ThemeProvider theme={theme}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                sx={optionList_sx.tabs}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "black"
                    }
                }}


            >
                {
                    options.map((icon) => (



                        <Tab sx={optionList_sx.tab} label={
                            <>
                                {icon.icon}
                                {icon.name}
                            </>




                        }/>

                    ))
                }
            </Tabs>
            </ThemeProvider>
        </Box>
    );
}

export default OptionsBar;