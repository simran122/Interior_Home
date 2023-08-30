import { createTheme } from "@mui/material/styles";

const Theme = createTheme(
    {
        palette: {

            primary1: {
                main: '#CDA274',
                light: '#FFA928',
            },
            primary: {
                main: '#292F36',
                dark: '#141414',
                light: '#4D5053'

            },
            secondary: {
                main: '#E6E6E6',
                dark: '#E5E5E5',
                light: '#F6F6F6',
            },
            info: {
                main: '#F4F0EC'
            },
        },
        text: {
            primary: 'rgba(0,0,0,1)',
        },
        typography: {
            fontFamily: 'DM Serif Display,Jost',
            h1: {
                fontSize: '3.125rem',
                fontWeight: 400,



            },
            h2: {
                fontSize: '2.1875rem',
                fontWeight: 400,

            },
            h3: {
                fontSize: '1.5625rem',
                fontWeight: 400,

            },
            h4: {
                fontSize: '1.350rem',
                fontWeight: 400,

            },
            h5: {
                fontSize: '1.25rem',

            },
            h6: {

                fontSize: '1.125rem',
            },
            body1: {

                fontSize: '5rem',
                fontWeight: 400,

            },
            body2: {
                fontSize: '2.5rem',
                fontWeight: 400,

            }
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 700,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        }

    }
)


export default Theme