import React from 'react'
import { Box, Typography, useMediaQuery, Button, Stack, TextField } from '@mui/material'
import './style/Style.css'
import vector from './img/vector.png'
import old from './img/old.png'
import sofa from './img/sofa.png'
import john from './img/smith.png'
import julie from './img/natt.png'
import owen from './img/nora.png'
import lamp from './img/lamp.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { motion, } from 'framer-motion';

function About() {
    const navigate = useNavigate();
    const small = useMediaQuery('(max-width:400px)')

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [form2, setForm2] = useState({ name: "", email: "", message: "" })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm2((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const response = axios.post("https://interior-home-4dua.vercel.app/", form2).then((res) => {
            console.log(res)

        })
            .catch(error => console.log(error))


        console.log(response)
        // console.log(form)
        console.log(JSON.stringify(form2))
        setForm2({ name: "", email: "", message: "" })
    }

    const handleClick = (people) => {
        navigate(`/${people}`)

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

    const preHover = {
        scale: 1,
    }
    const hovered = {
        scale: 1.1, duration: 0.7
    }

    return (
        <>
            <Box
                component={motion.div}
                initial={{
                    y: -60,
                    opacity: 0,
                    transition: {
                        duration: 0.6, ease: easeing
                    }
                }}

                whileInView={{
                    opacity: 1, y: 0, transition: {
                        duration: 0.6,  ease: easeing
                    }
                }}
                sx={{ backgroundImage: `url(${lamp})`, maxWidht: "100%", minHeight: "22rem", objectFit: "contain", position: "relative" }}>
                <Box sx={{ maxWidth: "32rem", textAlign: "center", backgroundColor: "white", position: "absolute", border: "0 solid transparent", left: "50%", bottom: 0, transform: "translate(-50%,0)", px: { xs: "1rem", sm: "2rem" }, py: "1rem", borderRadius: "20px 20px 0 0" }}>
                    <Typography variant='h4' sx={{ color: "primary.main" }}>About Us</Typography>
                    <Typography variant='h5' sx={{ color: "primary.light", fontFamily: "Jost" }}>Home/About Us</Typography>

                </Box>

            </Box>
            <Box
                component={motion.div}
                initial={{
                    y: -60,
                    opacity: 0,
                    transition: {
                        duration: 0.6, ease: easeing
                    }
                }}

                whileInView={{
                    opacity: 1, y: 0, transition: {
                        duration: 0.6, delay: 0.1, ease: easeing
                    }
                }}
                sx={{ mx: "auto", my: "4rem", maxWidht: "100%", display: "flex", justifyContent: "center", textAlign: "center", p: "1rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="202" minHeight="350" viewBox="0 0 202 454" fill="none">
                    <path d="M201.5 13H83C44.3401 13 13 44.3401 13 83V371C13 409.66 44.3401 441 83 441H201.5" stroke="#F4F0EC" strokeWidth="25" />
                </svg>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography variant="h2">“</Typography>
                    <Typography className="Typography" variant='h4' sx={{ fontSize: small ? "0.9rem" : "1.2rem" }}>I like an interior that defies labeling. I don't<br />really want someone to walk into a room and<br /> know that I did it</Typography>
                </Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="201" minHeight="350" viewBox="0 0 201 454" fill="none">
                    <path d="M3.74169e-05 441H118.5C157.16 441 188.5 409.66 188.5 371L188.5 83C188.5 44.34 157.16 13 118.5 13L0 13" stroke="#F4F0EC" strokeWidth="25" />
                </svg>

            </Box>
            <Box
                component={motion.div}
                initial={{
                    y: -60,
                    opacity: 0,
                    transition: {
                        duration: 0.6, ease: easeing
                    }
                }}

                whileInView={{
                    opacity: 1, y: 0, transition: {
                        duration: 0.6, delay: 0.1, ease: easeing
                    }
                }}
                sx={{ display: "flex", justifyContent: "center", mx: 'auto', px: "1rem", flexDirection: { xs: "column", md: "row" }, textAlign: { xs: "center", md: "inherit" }, gap: "2rem" }}>
                <Box

                >
                    <Typography variant="h4" sx={{ color: "primary.main" }}>What We Do</Typography>
                    <Typography className=" Typography" variant='h6' sx={{ color: "primary.light", fontFamily: "Jost" }}>
                        It is a long established fact that a reader will be<br /> distracted by the of readable content of a page<br />
                        when lookings at its layouts the points of using<br />
                        that it has a more-or-less normal.
                    </Typography>
                    <Button sx={{ bgcolor: "primary2-main", mt: "-1.5rem", borderRadius: "10px" }} variant="contained">
                        <Typography sx={{ mr: "0.5rem" }} variant='h6'>Our Concept</Typography>
                        <img src={vector} alt='vector' />
                    </Button>
                </Box>
                <Box>
                    <motion.img initial={preHover} whileHover={hovered} src={old} style={{ maxWidth: "25rem", width: "95%", minHeight: "10rem", margin: "auto", border: "none" }} />
                </Box>
            </Box>
            <Box
                component={motion.div}
                initial={initial}
                whileInView={whileInView}

                sx={{ display: "flex", justifyContent: "center", mx: 'auto', px: "1rem", flexDirection: { xs: "column", md: "row" }, textAlign: { xs: "center", md: "inherit" }, gap: "2rem", mt: "3rem" }}>
                <Box>
                    <motion.img initial={preHover} whileHover={hovered} src={sofa} style={{ maxWidth: "25rem", width: "95%", minHeight: "10rem", margin: "auto", borderRadius: "25px" }} />
                </Box>
                <Box>
                    <Typography variant="h4" sx={{ color: "primary.main" }}>The End Result</Typography>
                    <Typography className=" Typography" variant='h6' sx={{ color: "primary.light", fontFamily: "Jost" }}>
                        It is a long established fact that a reader will be<br /> distracted by the of readable content of a page<br />
                        when lookings at its layouts the points of using<br />
                        that it has a more-or-less normal.
                    </Typography>
                    <Button sx={{ bgcolor: "primary2-main", mt: "-1.5rem", borderRadius: "10px" }} variant="contained">
                        <Typography sx={{ mr: "0.5rem" }} variant='h6'>Our Portfolio</Typography>
                        <img src={vector} alt='vector' />
                    </Button>
                </Box>

            </Box>
            <Box

                component={motion.div}
                initial={initial}
                whileInView={whileInView}

                sx={{ bgcolor: " #F4F0EC", display: "flex", justifyContent: "center", my: "4rem", }}>
                <Box sx={{ m: "5rem" }}>
                    <Typography sx={{ textAlign: "center" }} variant="h2">What the People Thinks<br />About Us</Typography>
                    <Box sx={{ display: "flex", gap: "1rem", mt: "2rem", flexWrap: "wrap", textAlign: "center", justifyContent: "center", }}>
                        <motion.img initial={preHover} whileHover={hovered} onClick={() => handleClick("JohnSmith")} style={{ maxWidth: "10rem", height: "16rem", borderRadius: "20px", }} src={john} />
                        <motion.img initial={preHover} whileHover={hovered} onClick={() => handleClick("Nattasha")} style={{ maxWidth: "10rem", height: "16rem", borderRadius: "20px" }} src={julie} />
                        <Box component={motion.div} initial={preHover} whileHover={hovered} sx={{ textAlign: "center", p: "1.3rem", height: "16rem", maxWidth: "10rem", bgcolor: "white", borderRadius: "20px" }}>
                            <Typography variant='h6'>Nattasha Julie</Typography>
                            <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light", fontSize: "0.8rem" }}>Design, Australia</Typography>
                            <Stack direction="row" sx={{ my: "1rem" }} >

                                <svg width="190" height="23" viewBox="0 0 226 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6836 12.875L11.1758 9.64062H8.04688V7.53125C8.04688 6.61719 8.46875 5.77344 9.875 5.77344H11.3164V2.99609C11.3164 2.99609 10.0156 2.75 8.78516 2.75C6.21875 2.75 4.53125 4.33203 4.53125 7.14453V9.64062H1.64844V12.875H4.53125V20.75H8.04688V12.875H10.6836Z" fill="#292F36" />
                                    <path d="M82.6367 8.09375C83.3398 7.56641 83.9727 6.93359 84.4648 6.19531C83.832 6.47656 83.0938 6.6875 82.3555 6.75781C83.1289 6.30078 83.6914 5.59766 83.9727 4.71875C83.2695 5.14062 82.4609 5.45703 81.6523 5.63281C80.9492 4.89453 80 4.47266 78.9453 4.47266C76.9062 4.47266 75.2539 6.125 75.2539 8.16406C75.2539 8.44531 75.2891 8.72656 75.3594 9.00781C72.3008 8.83203 69.5586 7.35547 67.7305 5.14062C67.4141 5.66797 67.2383 6.30078 67.2383 7.00391C67.2383 8.26953 67.8711 9.39453 68.8906 10.0625C68.293 10.0273 67.6953 9.88672 67.2031 9.60547V9.64062C67.2031 11.4336 68.4688 12.9102 70.1562 13.2617C69.875 13.332 69.5234 13.4023 69.207 13.4023C68.9609 13.4023 68.75 13.3672 68.5039 13.332C68.9609 14.8086 70.332 15.8633 71.9492 15.8984C70.6836 16.8828 69.1016 17.4805 67.3789 17.4805C67.0625 17.4805 66.7812 17.4453 66.5 17.4102C68.1172 18.4648 70.0508 19.0625 72.1602 19.0625C78.9453 19.0625 82.6367 13.4727 82.6367 8.58594C82.6367 8.41016 82.6367 8.26953 82.6367 8.09375Z" fill="#292F36" />
                                    <path d="M142.141 18.5V7.98828H138.871V18.5H142.141ZM140.488 6.58203C141.543 6.58203 142.387 5.70312 142.387 4.64844C142.387 3.62891 141.543 2.78516 140.488 2.78516C139.469 2.78516 138.625 3.62891 138.625 4.64844C138.625 5.70312 139.469 6.58203 140.488 6.58203ZM154.34 18.5H154.375V12.7344C154.375 9.92188 153.742 7.74219 150.438 7.74219C148.855 7.74219 147.801 8.62109 147.344 9.42969H147.309V7.98828H144.18V18.5H147.449V13.2969C147.449 11.9258 147.695 10.625 149.383 10.625C151.07 10.625 151.105 12.1719 151.105 13.4023V18.5H154.34Z" fill="#292F36" />
                                    <path d="M217 7.60742C214.625 7.60742 212.732 9.53711 212.732 11.875C212.732 14.25 214.625 16.1426 217 16.1426C219.338 16.1426 221.268 14.25 221.268 11.875C221.268 9.53711 219.338 7.60742 217 7.60742ZM217 14.6582C215.479 14.6582 214.217 13.4336 214.217 11.875C214.217 10.3535 215.441 9.12891 217 9.12891C218.521 9.12891 219.746 10.3535 219.746 11.875C219.746 13.4336 218.521 14.6582 217 14.6582ZM222.418 7.45898C222.418 6.90234 221.973 6.45703 221.416 6.45703C220.859 6.45703 220.414 6.90234 220.414 7.45898C220.414 8.01562 220.859 8.46094 221.416 8.46094C221.973 8.46094 222.418 8.01562 222.418 7.45898ZM225.238 8.46094C225.164 7.125 224.867 5.9375 223.902 4.97266C222.938 4.00781 221.75 3.71094 220.414 3.63672C219.041 3.5625 214.922 3.5625 213.549 3.63672C212.213 3.71094 211.062 4.00781 210.061 4.97266C209.096 5.9375 208.799 7.125 208.725 8.46094C208.65 9.83398 208.65 13.9531 208.725 15.3262C208.799 16.6621 209.096 17.8125 210.061 18.8145C211.062 19.7793 212.213 20.0762 213.549 20.1504C214.922 20.2246 219.041 20.2246 220.414 20.1504C221.75 20.0762 222.938 19.7793 223.902 18.8145C224.867 17.8125 225.164 16.6621 225.238 15.3262C225.312 13.9531 225.312 9.83398 225.238 8.46094ZM223.457 16.7734C223.197 17.5156 222.604 18.0723 221.898 18.3691C220.785 18.8145 218.188 18.7031 217 18.7031C215.775 18.7031 213.178 18.8145 212.102 18.3691C211.359 18.0723 210.803 17.5156 210.506 16.7734C210.061 15.6973 210.172 13.0996 210.172 11.875C210.172 10.6875 210.061 8.08984 210.506 6.97656C210.803 6.27148 211.359 5.71484 212.102 5.41797C213.178 4.97266 215.775 5.08398 217 5.08398C218.188 5.08398 220.785 4.97266 221.898 5.41797C222.604 5.67773 223.16 6.27148 223.457 6.97656C223.902 8.08984 223.791 10.6875 223.791 11.875C223.791 13.0996 223.902 15.6973 223.457 16.7734Z" fill="#292F36" />
                                </svg>


                            </Stack>
                            <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light", fontSize: "0.8rem" }}>+1(378)4001234<br /> Julie@Interno.com</Typography>
                        </Box>
                        <motion.img initial={preHover} whileHover={hovered} onClick={() => handleClick("Nora")} style={{ maxWidth: "10rem", height: "16rem", borderRadius: "20px" }} src={owen} />



                    </Box>
                </Box>
            </Box>
            <Box
                component={motion.div}
                initial={initial}
                whileInView={whileInView}

                sx={{ mx: "auto", my: "4rem", textAlign: "center", width: "100%", maxWidth: "40rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", p: "1rem" }}>
                <Typography variant='h2'>Creative project? Let's have a<br />productive talk.</Typography>
                <Box sx={{mx: "auto", display: "flex", gap: "2rem", my: "3rem", justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, flex: 1, mx: "1rem", width: "100%" }}>
                    <TextField id="standard-basic" label="Name" variant="standard" name="name" value={form2.name} onChange={handleChange} inputProps={{
                        style: {
                            height: "2rem", fontSize: "1.3rem", color: "black", fontFamily: "DM Serif Display", opacity: 1
                        },
                    }} sx={{
                        '.MuiInputLabel-root': {
                            fontSize: "1.2rem"
                        },width: "100%"
                    }} />
                    <TextField id="standard-basic" label="Email" type="email" variant="standard" name="email" value={form2.email} onChange={handleChange} inputProps={{
                        style: {
                            height: "2rem", fontSize: "1.3rem", color: "black", fontFamily: "DM Serif Display", opacity: 1
                        },
                    }} sx={{
                        '.MuiInputLabel-root': {
                            fontSize: "1.2rem"
                        },width: "100%"
                    }} />
                </Box>
                <Box sx={{ mt: "1rem", mx: "1rem", flex: 1, width: "100%", display: "flex", justifyContent: "center"}}>
                     <textarea className="text" name="message" onChange={handleChange} value={form2.message} placeholder="write your message" col="60" row="50" style={{ width: "100%", height: "10rem", fontSize: "1.3rem", p: "0.5rem" }}></textarea>

                </Box>
                <Button onClick={handleSubmit} sx={{ bgcolor: "primary2-main", mt: "2rem", borderRadius: "10px" }} variant="contained">
                    <Typography sx={{ mr: "0.5rem" }} variant='h6'>Send Now</Typography>
                    <img src={vector} alt='vector' />
                </Button>



            </Box>


        </>
    )
}

export default About
