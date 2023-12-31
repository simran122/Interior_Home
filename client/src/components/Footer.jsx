import React from 'react'
import { Box, Stack, Typography, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import './style/Style.css'

function Footer() {
    return (
        <Box>

            <Box sx={{ display: "flex", my: "3.5rem", flexWrap: "wrap", flexDirection: "row", gap: "3rem", justifyContent: "center", width: "100%" }}>

                <Box sx={{ ml: { xs: "2rem", sm: 0 } }}>
                    <Stack direction="row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" viewBox="0 0 35 34" fill="none">
                            <path d="M0.5 34.0003H13.9588V24.499C13.9588 22.4853 15.5898 20.8543 17.6035 20.8543C19.6172 20.8543 21.2482 22.4853 21.2482 24.499V34.0003H34.4975V0C15.7211 0 0.5 15.2211 0.5 34.0003Z" fill="#CDA274" />
                        </svg>
                        <Typography variant='h3' sx={{ color: "primary.main" }}>Interno</Typography>

                    </Stack>
                    <Typography className='Typography' variant='h6' sx={{ color: "primary.light", fontFamily: "Jost", ml: 0.6, my: "0.5rem" }}>It is a long established fact that a reader <br />will be distracted lookings.</Typography>
                    <Stack direction="row" spacing={2}>

                        <svg width="210" height="23" viewBox="0 0 226 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6836 12.875L11.1758 9.64062H8.04688V7.53125C8.04688 6.61719 8.46875 5.77344 9.875 5.77344H11.3164V2.99609C11.3164 2.99609 10.0156 2.75 8.78516 2.75C6.21875 2.75 4.53125 4.33203 4.53125 7.14453V9.64062H1.64844V12.875H4.53125V20.75H8.04688V12.875H10.6836Z" fill="#292F36" />
                            <path d="M82.6367 8.09375C83.3398 7.56641 83.9727 6.93359 84.4648 6.19531C83.832 6.47656 83.0938 6.6875 82.3555 6.75781C83.1289 6.30078 83.6914 5.59766 83.9727 4.71875C83.2695 5.14062 82.4609 5.45703 81.6523 5.63281C80.9492 4.89453 80 4.47266 78.9453 4.47266C76.9062 4.47266 75.2539 6.125 75.2539 8.16406C75.2539 8.44531 75.2891 8.72656 75.3594 9.00781C72.3008 8.83203 69.5586 7.35547 67.7305 5.14062C67.4141 5.66797 67.2383 6.30078 67.2383 7.00391C67.2383 8.26953 67.8711 9.39453 68.8906 10.0625C68.293 10.0273 67.6953 9.88672 67.2031 9.60547V9.64062C67.2031 11.4336 68.4688 12.9102 70.1562 13.2617C69.875 13.332 69.5234 13.4023 69.207 13.4023C68.9609 13.4023 68.75 13.3672 68.5039 13.332C68.9609 14.8086 70.332 15.8633 71.9492 15.8984C70.6836 16.8828 69.1016 17.4805 67.3789 17.4805C67.0625 17.4805 66.7812 17.4453 66.5 17.4102C68.1172 18.4648 70.0508 19.0625 72.1602 19.0625C78.9453 19.0625 82.6367 13.4727 82.6367 8.58594C82.6367 8.41016 82.6367 8.26953 82.6367 8.09375Z" fill="#292F36" />
                            <path d="M142.141 18.5V7.98828H138.871V18.5H142.141ZM140.488 6.58203C141.543 6.58203 142.387 5.70312 142.387 4.64844C142.387 3.62891 141.543 2.78516 140.488 2.78516C139.469 2.78516 138.625 3.62891 138.625 4.64844C138.625 5.70312 139.469 6.58203 140.488 6.58203ZM154.34 18.5H154.375V12.7344C154.375 9.92188 153.742 7.74219 150.438 7.74219C148.855 7.74219 147.801 8.62109 147.344 9.42969H147.309V7.98828H144.18V18.5H147.449V13.2969C147.449 11.9258 147.695 10.625 149.383 10.625C151.07 10.625 151.105 12.1719 151.105 13.4023V18.5H154.34Z" fill="#292F36" />
                            <path d="M217 7.60742C214.625 7.60742 212.732 9.53711 212.732 11.875C212.732 14.25 214.625 16.1426 217 16.1426C219.338 16.1426 221.268 14.25 221.268 11.875C221.268 9.53711 219.338 7.60742 217 7.60742ZM217 14.6582C215.479 14.6582 214.217 13.4336 214.217 11.875C214.217 10.3535 215.441 9.12891 217 9.12891C218.521 9.12891 219.746 10.3535 219.746 11.875C219.746 13.4336 218.521 14.6582 217 14.6582ZM222.418 7.45898C222.418 6.90234 221.973 6.45703 221.416 6.45703C220.859 6.45703 220.414 6.90234 220.414 7.45898C220.414 8.01562 220.859 8.46094 221.416 8.46094C221.973 8.46094 222.418 8.01562 222.418 7.45898ZM225.238 8.46094C225.164 7.125 224.867 5.9375 223.902 4.97266C222.938 4.00781 221.75 3.71094 220.414 3.63672C219.041 3.5625 214.922 3.5625 213.549 3.63672C212.213 3.71094 211.062 4.00781 210.061 4.97266C209.096 5.9375 208.799 7.125 208.725 8.46094C208.65 9.83398 208.65 13.9531 208.725 15.3262C208.799 16.6621 209.096 17.8125 210.061 18.8145C211.062 19.7793 212.213 20.0762 213.549 20.1504C214.922 20.2246 219.041 20.2246 220.414 20.1504C221.75 20.0762 222.938 19.7793 223.902 18.8145C224.867 17.8125 225.164 16.6621 225.238 15.3262C225.312 13.9531 225.312 9.83398 225.238 8.46094ZM223.457 16.7734C223.197 17.5156 222.604 18.0723 221.898 18.3691C220.785 18.8145 218.188 18.7031 217 18.7031C215.775 18.7031 213.178 18.8145 212.102 18.3691C211.359 18.0723 210.803 17.5156 210.506 16.7734C210.061 15.6973 210.172 13.0996 210.172 11.875C210.172 10.6875 210.061 8.08984 210.506 6.97656C210.803 6.27148 211.359 5.71484 212.102 5.41797C213.178 4.97266 215.775 5.08398 217 5.08398C218.188 5.08398 220.785 4.97266 221.898 5.41797C222.604 5.67773 223.16 6.27148 223.457 6.97656C223.902 8.08984 223.791 10.6875 223.791 11.875C223.791 13.0996 223.902 15.6973 223.457 16.7734Z" fill="#292F36" />
                        </svg>


                    </Stack>

                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", ml: { xs: "1rem", sm: 0 } }}>
                    <Typography variant='h4'>Pages</Typography>
                    <Link to="/About" >
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>About Us</Typography>
                    </Link>
                    <Link to="/Project" > <Typography variant="h6" sx={{ fontFamily: "Jost", color: "primary.light" }}>Our Projects</Typography></Link>
                    <Link > <Typography variant="h6" sx={{ fontFamily: "Jost", color: "primary.light" }}>Our Team</Typography></Link>
                    <Link to="/Contact" > <Typography variant="h6" sx={{ fontFamily: "Jost", color: "primary.light" }}>Contact Us</Typography></Link>
                    <Link to="/Services" > <Typography variant="h6" sx={{ fontFamily: "Jost", color: "primary.light" }}>Services</Typography></Link>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", ml: { xs: "1rem", sm: 0 } }}>
                    <Typography variant='h4'>Services</Typography>
                    <Link > <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>kitchen</Typography> </Link>
                    <Link ><Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>Living Area</Typography></Link>
                    <Link > <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>Bathroom</Typography></Link>
                    <Link > <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>Dinning Hall</Typography></Link>
                    <Link > <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>Bedroom</Typography></Link>

                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", ml: { xs: "1rem", sm: 0 } }}>
                    <Typography variant='h4'>Contact</Typography>
                    <Typography className='Typography' variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>55 East Birchwood Ave.<br /> Brooklyn, New York 11201</Typography>
                    <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light", my: "1rem" }}>contact@interno.com</Typography>

                    <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>9996799351</Typography>


                </Box>

            </Box>
            <Divider />

            <Box sx={{ textAlign: "center", my: "1rem" }}>
                <Typography variant='h5' sx={{ fontFamily: "Jost", color: "primary.light" }}>Copyright © Interno Powered by- Simran </Typography>
            </Box>
        </Box>

    )
}

export default Footer