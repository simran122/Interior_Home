import React from 'react'
import { useState } from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer } from '@mui/material'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'
import MenuIcon from "@mui/icons-material/Menu"
import { motion, } from 'framer-motion';
import './style/Style.css'


function Navbar() {
    const preHover = {
        scale: 1,
    }
    const hovered = {
        scale: 1.2, duration: 0.7
    }


    let easeing = [0.6, -0.05, 0.01, 0.99]
    const initial = {
        y: -60,
        opacity: 0,
        transition: {
            duration: 0.6, ease: easeing
        }
    }
    const whileInView = {
        opacity: 1, y: 0, transition: {
            duration: 0.6, delay: 0.1, ease: easeing
        }
    }
    const [menubar, setMenubar] = useState(false);


    const handleDrawer = () => {
        setMenubar(!menubar)
    }
    const drawer = (
        <Box onClick={handleDrawer} sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "primary2.main" }}>
                <ul className="mobile-menu">
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>
                    <li>
                        <Link to="/Project">Project</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>

                </ul>



            </Typography>
        </Box>
    )
    return (

        <Box sx={{ display: 'flex', justifyContent: "center" }}>
            <AppBar component={'nav'} position="fixed" sx={{ bgcolor: "white", border: "none", maxWidth: "100%", boxShadow: "none" }}>
                <Toolbar>

                    <motion.img initial={preHover} whileHover={hovered} src={logo} alt='logo' />
                    <Typography
                        variant="body2" component="div" sx={{ flexGrow: 0.9, color: "primary.main", ml: 1 }}>
                        Interno
                    </Typography>
                    <IconButton color="black" aria-label='open drawer' sx={{ display: { sm: "none" } }} onClick={handleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ maxWidth: "35.75", display: { xs: "none", sm: "block", } }}>
                        <Typography variant="h5" sx={{ color: "primary2.main" }}>
                            <ul className="navigation-menu">
                                <motion.li initial={preHover} whileHover={hovered}>
                                    <Link to="/">Home</Link>
                                </motion.li>
                                <motion.li initial={preHover} whileHover={hovered}>
                                    <Link to="/About">About Us</Link>
                                </motion.li>
                                <motion.li initial={preHover} whileHover={hovered}>
                                    <Link to="/Services">Services</Link>
                                </motion.li>
                                <motion.li initial={preHover} whileHover={hovered}>
                                    <Link to="/Project">Project</Link>
                                </motion.li>
                                <motion.li initial={preHover} whileHover={hovered}>
                                    <Link to="/Blog">Blog</Link>
                                </motion.li>
                                <motion.li initial={preHover} whileHover={hovered}>
                                    <Link to="/Contact">Contact</Link>
                                </motion.li>

                            </ul>



                        </Typography>
                    </Box>

                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer variant='persistent' open={menubar} onClose={handleDrawer} anchor="right" sx={{
                    display: { xs: "block", sm: "none" }, width: "240px", '& .MuiDrawer-paper': {
                        boxSizing: "border-box", width: "200px",
                    },
                }}>
                    {drawer}
                </Drawer>
            </Box>
        </Box >

    )
}

export default Navbar