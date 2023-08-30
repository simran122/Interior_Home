import React from 'react'
import { Box, Button, Typography, Stack, FormControl, Input, Checkbox, } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './style/Style.css'
import door from './img/door.png'
import white from './img/white.png'
import black from './img/black.png'
import vector from './img/vec.png'
import { motion, } from 'framer-motion';




function Blog() {
    const [form1, setForm1] = useState({ name: "", email: "", website: "", phone: "", message: "", isChecked: true })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm1((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const response = axios.post("https://interior-home-4dua.vercel.app/", form1).then((res) => {
            console.log(res)

        })
            .catch(error => console.log(error))


        console.log(response)
        // console.log(form)
        console.log(JSON.stringify(form1))

        setForm1({ name: "", email: "", website: "", phone: "", message: "", isChecked: true })
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
            <Box component={motion.div}
                initial={initial}
                whileInView={whileInView} sx={{ backgroundImage: `url(${door})`, maxWidht: "100%", minHeight: "22rem", objectFit: "contain", position: "relative" }} />
            <Box sx={{ display: "flex", justifyContent: "center", mx: "auto", my: "4rem", gap: "1.5rem", px: "1rem" }}>
                <Box component={motion.div}
                    initial={initial}
                    whileInView={whileInView} >
                    <Typography variant='h2'>Let’s Get Solution for Building<br /> Construction Work</Typography>
                    <motion.img initial={preHover} whileHover={hovered} style={{ borderRadius: "20px", width: "40rem", maxWidth: "100%", margin: "1.5rem 0 ", }} src={white} />

                    <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere <br />
                        in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum<br /> available, but the majority have suffered alteration in some form, by injecthumour <br /> or randomised words which don't look even slightly believable.</Typography>

                    <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light", my: "1.3rem" }}>
                        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the <br />
                        tend to repeat predefined chunks as necessary.
                    </Typography>
                    <Box component={motion.div}
                        initial={initial}
                        whileInView={whileInView} sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "info.main", borderRadius: "30px" }}>
                        <Box sx={{ p: "2rem", textAlign: "center" }}>
                            <Typography variant="h1" sx={{ color: "primary1.main" }}>“</Typography>
                            <Typography variant='h4' sx={{ color: "primary1.main" }}>The details are not the details.<br />
                                They make the design.</Typography>

                        </Box>

                    </Box>
                    <Box component={motion.div}
                        initial={initial}
                        whileInView={whileInView} sx={{ my: "2rem" }}>
                        <Typography variant='h3'>Design sprints are great</Typography>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light", my: "1rem" }}>
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere<br />
                            in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum<br />
                            available, but the majority have suffered.
                        </Typography>

                        <Stack direction="row" spacing={1} sx={{ mb: "1.5rem" }}>
                            <Typography variant='h6' sx={{ color: "primary1.main" }}>1</Typography>
                            <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light", }}>
                                Contrary to popular belief.There are many variations of passages of Lorem<br />
                                Ipsum available, but the majority have suffered.
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{ mb: "1.5rem" }}>
                            <Typography variant='h6' sx={{ color: "primary1.main" }}>2</Typography>
                            <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light", }}>
                                Contrary to popular belief.There are many variations of passages of Lorem<br />
                                Ipsum available, but the majority have suffered.
                            </Typography>
                        </Stack>


                        <Stack direction="row" spacing={1} sx={{ mb: "1.5rem" }}>
                            <Typography variant='h6' sx={{ color: "primary1.main" }}>3</Typography>
                            <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light", }}>
                                Contrary to popular belief.There are many variations of passages of Lorem<br />
                                Ipsum available, but the majority have suffered.
                            </Typography>
                        </Stack>

                    </Box>
                    <Box component={motion.div}
                        initial={initial}
                        whileInView={whileInView} >
                        <motion.img initial={preHover} whileHover={hovered} style={{ borderRadius: "20px", width: "40rem", maxWidth: "100%", }} src={black} />
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light", my: "0.7rem" }}>
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere<br />
                            in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum <br />
                            available, but the majority have suffered.
                        </Typography>
                    </Box>
                    <Box component={motion.div}
                        initial={initial}
                        whileInView={whileInView} sx={{ my: "2rem" }}>
                        <Typography variant='h5' sx={{ mb: "1.5rem" }}>Leave a Reply</Typography>
                        <form>

                            <Box sx={{ display: "flex", gap: { xs: "1rem", sm: "8rem" }, flexDirection: { xs: "column", sm: "row" }, flex: 1, justifyContent: "center" }}>
                                <FormControl sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", }}>
                                    <Input id="my-input" name="name" value={form1.name} onChange={handleChange} aria-describedby="my-helper-text" placeholder='Name' inputProps={{
                                        style: {
                                            height: "2rem", fontSize: "1.3rem", color: "black", fontFamily: "DM Serif Display", opacity: 0.8
                                        },
                                    }} sx={{ maxWidth: "100%" }} />

                                </FormControl>
                                <FormControl sx={{ display: "flex", flexDirection: "column", }}>
                                    <Input id="my-input" name="email" value={form1.email} onChange={handleChange} aria-describedby="my-helper-text" placeholder='Email' inputProps={{
                                        style: {
                                            height: "2rem", fontSize: "1.3rem", color: "black", fontFamily: "DM Serif Display", opacity: 0.8
                                        },
                                    }} sx={{ maxWidth: "100%" }} />

                                </FormControl>

                            </Box>
                            <Box sx={{ display: "flex", gap: { xs: "1rem", sm: "8rem" }, flexDirection: { xs: "column", sm: "row" }, flex: 1, justifyContent: "center", mt: "1rem" }}>
                                <FormControl sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", }}>
                                    <Input id="my-input" name="website" value={form1.website} onChange={handleChange} aria-describedby="my-helper-text" placeholder='Website' inputProps={{
                                        style: {
                                            height: "2rem", fontSize: "1.3rem", color: "black", fontFamily: "DM Serif Display", opacity: 0.8
                                        },
                                    }} sx={{ maxWidth: "100%" }} />

                                </FormControl>
                                <FormControl sx={{ display: "flex", flexDirection: "column", }}>
                                    <Input id="my-input" name="phone" value={form1.phone} onChange={handleChange} aria-describedby="my-helper-text" placeholder='Phone' inputProps={{
                                        style: {
                                            height: "2rem", fontSize: "1.3rem", color: "black", fontFamily: "DM Serif Display", opacity: 0.8
                                        },
                                    }} sx={{ maxWidth: "100%" }} />
                                </FormControl>
                            </Box>

                            <FormControl sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", mt: "1rem" }}>

                                <textarea className="text" name="message" value={form1.message} onChange={handleChange} placeholder="write your message" col="60" row="50" style={{ maxWidth: { xs: "50%", sm: "100%" }, height: "10rem", fontSize: "1.3rem" }}></textarea>

                                <Stack direction="row " spacing={2} alignItems="center">
                                    <Checkbox sx={{ color: "primary1.main" }} name="isChecked" value={form1.isChecked} onChange={handleChange} />
                                    <Typography className="Typography" variant='h6' sx={{
                                        color:
                                            "primary1.main", fontFamily: "Jost"
                                    }}>Save my name, email, and website in this browser for the next time I comment.</Typography>

                                </Stack>
                            </FormControl>
                            <Button onClick={handleSubmit} sx={{ mb: { xs: "2rem", sm: "2rem", md: 0, }, bgcolor: "primary.main", width: "10rem", borderRadius: "20px" }} variant="contained">
                                <Typography sx={{ color: "white", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Send Now</Typography>
                                <img src={vector} alt='vector' />
                            </Button>



                        </form>
                    </Box>

                </Box >

            </Box >



        </>
    )
}

export default Blog
