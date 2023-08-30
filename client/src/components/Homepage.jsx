import React from 'react'
import { Box, Typography, Grid, Stack, useMediaQuery, } from '@mui/material'

import Button from '@mui/material/Button';
import vector from './img/vector.png'
import './style/Style.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import photo from './img/photo.png'
import curve from './img/curve.png'
import chair from './img/chair.png'
import wood from './img/wood.png'
import sofas from './img/sofas.png'
import drawer from './img/drawer.png'
import mith from './img/mith.png'
import modern from './svg/logo1.svg'
import vs from './svg/logo2.svg'
import brand from './svg/logo3.svg'
import nature from './svg/logo4.svg'
import design from './svg/logo5.svg'
import gala from './img/gala.png'
import roll from './img/roll.png'
import kitchen from './img/kitchen.png'
import living from './img/living.png'
import interior from './img/interior.png'
import { useNavigate } from 'react-router-dom';
import { useEffect,  } from 'react';
import { motion, } from 'framer-motion';

function Homepage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();

    const getStarted = () => {
        navigate('/Services')
    }
    const contact = () => {
        navigate('/Contact')
    }


    const small = useMediaQuery('(max-width:400px)')

    return (
        <Box



        >
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                sx={{
                    maxWidth: "100%", minHeight: "auto", backgroundImage: `url(${photo})`, backgroundSize: { xs: "auto 500px", sm: "cover" }, backgroundPosition: "center center", backgroundRepeat: "no-repeat", objectFit: "contain", mt: "1.8rem", py: { xs: "3rem", sm: "4rem", md: "3rem", lg: "14rem" },
                    borderRadius: { lg: " 0 0 0 18rem" }
                }} >
                <Box sx={{ maxWidth: "35.43", ml: { xs: "2rem", sm: "5rem", md: "12rem" }, mr: { xs: "2rem", sm: "5rem"} }}>
                    <Typography variant='body1'>Let Your Home</Typography>
                    <Typography variant='body1'>Be Unique</Typography>
                    <Box sx={{ maxWidth: "34.56rem" }}>
                        <Typography variant="h4">There are many variations of the passages of lorem Ipsum</Typography>
                        <Typography variant="h4">from available, variations of the passages.</Typography>
                    </Box>
                    <Button onClick={getStarted} sx={{ bgcolor: "primary2-main", mt: "-1.5rem", borderRadius: "20px" }} variant="contained">
                        <Typography sx={{ mr: "0.5rem" }} variant='h6'>Get Started</Typography>
                        <img src={vector} alt='vector' />
                    </Button>
                </Box>


            </Box>

            <Grid


                sx={{ my: "4rem", mx: { md: "auto", xs: "auto", }, width: "80%", maxWidth: "100%" }} container spacing={2.5}>
                <Grid component={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    xs={12} item md={4}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                        <Typography sx={{ color: "primary.main" }} variant="h3">Project Plan</Typography>
                        <Typography className=" Typography" sx={{ color: "primary.light", mt: "1rem", fontFamily: "Jost" }} variant='h6'>There are many variations of the <br />passages of lorem Ipsum from<br />
                            available, majority.</Typography>
                        <Button sx={{ mb: { xs: "2rem", sm: "2rem", md: 0 } }} variant="text">
                            <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                            <img src={vector} alt='vector' />
                        </Button>

                    </Box>
                </Grid>
                <Grid
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}

                    xs={12} item md={4} className='grid'>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                        <Typography sx={{ color: "primary.main" }} variant="h3">Interior Work</Typography>
                        <Typography className=" Typography" sx={{ color: "primary.light", mt: "1rem", fontFamily: "Jost" }} variant='h6'>There are many variations of the <br />passages of lorem Ipsum from<br />
                            available, majority.</Typography>
                        <Button sx={{ mb: { xs: "2rem", sm: "2rem", md: 0 } }} variant="text">
                            <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                            <img src={vector} alt='vector' />
                        </Button>

                    </Box>
                </Grid>
                <Grid
                    component={motion.div}
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}

                    className=" grid" xs={12} item md={4}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                        <Typography sx={{ color: "primary.main" }} variant="h3">Realization</Typography>
                        <Typography className=" Typography" sx={{ color: "primary.light", mt: "1rem", fontFamily: "Jost" }} variant='h6'>There are many variations of the <br />passages of lorem Ipsum from<br />
                            available, majority.</Typography>
                        <Button variant="text">
                            <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                            <img src={vector} alt='vector' />
                        </Button>

                    </Box>
                </Grid>


            </Grid >
            <Grid sx={{ my: "4rem", mx: { md: "auto", xs: "auto", }, width: "80%", maxWidth: "100%" }} container spacing={2}>
                <Grid

                    component={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}

                    xs={12} item md={5}>
                    <Box sx={{ py: "1rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Box>
                            <Box sx={{ pr: "0.5rem", mb: "1rem" }}>
                                <Typography className='Typography' sx={{ color: "primary.main" }} variant='h1'>We Create The Art <br /> Of Stylish Living <br /> Stylishly</Typography>

                            </Box>
                            <Box sx={{ pr: "0.3rem" }}>
                                <Typography variant='h5' sx={{ fontFamily: "Jost", color: "primary.light" }}>
                                    It is a long established fact that a reader will be <br />
                                    distracted by the of readable content of a page <br />
                                    when lookings at its layouts the points of using <br />
                                    that it has a more-or-less normal.
                                </Typography>
                            </Box>
                            <Stack direction="row" sx={{ my: "1rem" }} spacing={3}>
                                <svg sx={{ width: "40%" }} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 93 93" fill="none">
                                    <circle cx="46.5" cy="46.5" r="46.5" fill="#F4F0EC" />
                                    <path d="M61.0012 55.0749C59.7796 53.8442 56.8211 52.0482 55.3857 51.3243C53.5164 50.3828 53.3625 50.3059 51.8933 51.3974C50.9133 52.1258 50.2617 52.7766 49.1148 52.532C47.9678 52.2874 45.4754 50.9082 43.2931 48.7329C41.1107 46.5576 39.6514 43.9931 39.4061 42.8501C39.1607 41.7071 39.8222 41.0632 40.5438 40.081C41.5607 38.6964 41.4838 38.4657 40.6145 36.5965C39.9368 35.1427 38.0883 32.2121 36.8529 30.9967C35.5313 29.6914 35.5313 29.9222 34.6798 30.276C33.9865 30.5677 33.3214 30.9222 32.6928 31.3352C31.462 32.1529 30.7789 32.8321 30.3012 33.8528C29.8235 34.8735 29.6089 37.2665 32.0759 41.7478C34.5429 46.2292 36.2737 48.5206 39.8561 52.0928C43.4385 55.6649 46.1931 57.5856 50.2202 59.844C55.2018 62.6339 57.1126 62.09 58.1365 61.6131C59.1604 61.1362 59.8427 60.4593 60.662 59.2286C61.076 58.6011 61.4314 57.9368 61.7235 57.2441C62.0781 56.3957 62.3089 56.3957 61.0012 55.0749Z" stroke="#CDA274" strokeWidth="2" strokeMiterlimit="10" />
                                </svg>
                                <Stack direction="column" >
                                    <Typography variant='h6' sx={{ color: "primary.light", fontFamily: "Jost", fontWeight: "bold" }}>9876300001</Typography>
                                    <Typography variant="h6" sx={{ color: "primary.light", fontFamily: "jost" }}>Call Us Anytime</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>

                </Grid>
                <Grid
                    component={motion.div}
                    initial={{ scale: 1, opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    alignItems="center" xs={12} item sm={12} md={7} sx={{ textAlign: "center", }}>
                    <Box className="image" sx={{
                        backgroundImage: `url(${curve})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", objectFit: "contain", maxWidth: { xs: "20rem", sm: "40rem" }, minHeight: { xs: "20rem", sm: "30rem" }, borderRadius: "0 10rem 0 10rem"
                    }}>

                    </Box>

                </Grid>
            </Grid>

            <Box
                component={motion.div}
                initial={{ opacity: 0, }}

                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, }}

                sx={{ mx: "auto", mb: "3rem", bgcolor: "info.main", width: "80%", maxWidth: "100%", borderRadius: "50px", pt: "1rem", px: "1rem", pb: "2rem" }}>
                <Box

                    sx={{ mt: "3rem", mx: "auto", mb: "2rem" }}>
                    <Typography variant='h2' className='Typography' sx={{ color: "primary.main", textAlign: "center" }}>
                        What the People thinks <br /> About us

                    </Typography>
                </Box>
                <Grid sx={{ my: "4rem", mx: { md: "auto", xs: "auto", }, maxWidth: "100%", display: "flex", justifyContent: "center" }} container spacing={2}  >
                    <Grid

                        xs={12} sm={8} item md={4} >
                        <Box sx={{ bgcolor: "white", border: "1px solid transparent", borderRadius: "20px", p: { xs: "1rem", sm: "2rem", md: "1rem", lg: "2rem" } }}>
                            <Stack direction="row" spacing={2}>
                                <img style={{ borderRadius: "50%", maxWidth: "3rem", height: "3rem" }} src={mith} alt="profile1" />
                                <Stack direction="column">
                                    <Typography variant="h6" sx={{ color: "primary-main" }}>
                                        Natasha Mith

                                    </Typography>
                                    <Typography variant="h6" sx={{ color: "primary-light", fontFamily: "Jost" }}>
                                        Sydney, USA
                                    </Typography>

                                </Stack>



                            </Stack>
                            <Typography className='Typography' variant="h6" sx={{ color: "primary-light", fontFamily: "Jost", mt: "1rem", mb: "2rem" }}>
                                Lorem Ipsum is simply dummy <br />
                                text of the typesetting industry. <br />
                                Ipsum has been.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={8} item md={4} >
                        <Box sx={{ bgcolor: "white", border: "1px solid transparent", borderRadius: "20px", p: { xs: "1rem", sm: "2rem", md: "1rem", lg: "2rem" } }}>
                            <Stack direction="row" spacing={2}>
                                <img style={{ borderRadius: "50%", maxWidth: "3rem", height: "3rem" }} src={gala} alt="profile1" />
                                <Stack direction="column">
                                    <Typography variant="h6" sx={{ color: "primary-main" }}>
                                        Raymond Gala

                                    </Typography>
                                    <Typography variant="h6" sx={{ color: "primary-light", fontFamily: "Jost" }}>
                                        Sydney, USA
                                    </Typography>

                                </Stack>



                            </Stack>
                            <Typography className='Typography' variant="h6" sx={{ color: "primary-light", fontFamily: "Jost", mt: "1rem", mb: "2rem" }}>
                                Lorem Ipsum is simply dummy <br />
                                text of the typesetting industry. <br />
                                Ipsum has been.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid xs={12} sm={8} item md={4} >
                        <Box sx={{ bgcolor: "white", border: "1px solid transparent", borderRadius: "20px", p: { xs: "1rem", sm: "2rem", md: "1rem", lg: "2rem" }, }}>
                            <Stack direction="row" spacing={2}>
                                <img style={{ borderRadius: "50%", maxWidth: "3rem", height: "3rem" }} src={roll} alt="profile1" />
                                <Stack direction="column">
                                    <Typography variant="h6" sx={{ color: "primary-main" }}>
                                        Benny Roll
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: "primary-light", fontFamily: "Jost" }}>
                                        Sydney, USA
                                    </Typography>

                                </Stack>



                            </Stack>
                            <Typography className='Typography' variant="h6" sx={{ color: "primary-light", fontFamily: "Jost", mt: "1rem", mb: "2rem" }}>
                                Lorem Ipsum is simply dummy <br />
                                text of the typesetting industry. <br />
                                Ipsum has been.
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>


            </Box>

            <Box
                component={motion.div}
                initial={{ opacity: 0, }}

                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                sx={{ mx: "auto", display: { xs: "none", sm: "flex" }, justifyContent: "center", gap: "3rem" }}>
                <img style={{ width: "7%", minWidth: "80px" }} src={modern} alt="logo1" />
                <img style={{ width: "7%", minWidth: "80px" }} src={vs} alt="logo2" />
                <img style={{ width: "7%", minWidth: "80px" }} src={brand} alt="logo3" />
                <img style={{ width: "7%", minWidth: "80px" }} src={nature} alt="logo4" />
                <img style={{ width: "7%", minWidth: "100px" }} src={design} alt="logo5" />
            </Box>
            <Box



                sx={{ mx: "auto", mt: "5rem", width: "80%", maxWidth: "100%" }}>

                <Box
                    component={motion.div}
                    initial={{ opacity: 0, }}

                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}

                    sx={{ textAlign: "center" }}>
                    <Typography variant='h2' sx={{ color: "primary.main", }}>Follow Our Projects</Typography>
                    <Typography className='Typography' variant="h5" sx={{ color: "primary.light", fontFamily: "Jost" }}>
                        It is a long established fact that a reader will be distracted by the of readable <br />content of page lookings at its layouts points.
                    </Typography>
                </Box>
                <Grid className="grid1" container spacing={4} >
                    <Grid
                        component={motion.div}
                        initial={{ opacity: 0, }}

                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}

                        xs={12} item md={6}>
                        <Card component={motion.div}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }} sx={{ maxWidth: 339, borderRadius: " 0 40px 0 0", mt: "3rem", mx: "auto" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="325"
                                image=`url(${chair})`
                            />
                            <Stack direction="row" spacing={small ? 6.5 : 10}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Modern Kitchan
                                    </Typography>
                                    <Typography variant='h6' sx={{ color: "primary.light", fontFamily: "Jost" }}>Decor / Artchitecture</Typography>

                                </CardContent>
                                <CardActions>
                                    <IconButton aria-label="delete" size="medium" sx={{ bgcolor: "#F4F0EC" }}>
                                        <ArrowForwardIosIcon fontSize="inherit" />
                                    </IconButton>
                                </CardActions>
                            </Stack>

                        </Card>
                    </Grid>
                    <Grid
                        component={motion.div}
                        initial={{ opacity: 0, }}

                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}


                        xs={12} item md={6}>
                        <Card component={motion.div}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }} sx={{ maxWidth: 339, borderRadius: " 40px  0 0", mt: "3rem", mx: "auto" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="325"
                                image=`url(${drawer})`
                            />
                            <Stack direction="row" spacing={small ? 6.5 : 10}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Modern Kitchan
                                    </Typography>
                                    <Typography variant='h6' sx={{ color: "primary.light", fontFamily: "Jost" }}>Decor / Artchitecture</Typography>

                                </CardContent>
                                <CardActions>
                                    <IconButton aria-label="delete" size="medium" sx={{ bgcolor: "#F4F0EC" }}>
                                        <ArrowForwardIosIcon fontSize="inherit" />
                                    </IconButton>
                                </CardActions>
                            </Stack>

                        </Card>

                    </Grid>
                    <Grid

                        component={motion.div}
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}

                        xs={12} item md={6}>
                        <Card component={motion.div}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }} sx={{ maxWidth: 339, borderRadius: " 0 0 40px 0", mt: "3rem", mx: "auto" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="325"
                                image=`url(${wood})`

                            />
                            <Stack direction="row" spacing={small ? 6.5 : 10}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Modern Kitchan
                                    </Typography>
                                    <Typography variant='h6' sx={{ color: "primary.light", fontFamily: "Jost" }}>Decor / Artchitecture</Typography>

                                </CardContent>
                                <CardActions>
                                    <IconButton aria-label="delete" size="medium" sx={{ bgcolor: "#F4F0EC" }}>
                                        <ArrowForwardIosIcon fontSize="inherit" />
                                    </IconButton>
                                </CardActions>
                            </Stack>

                        </Card>

                    </Grid>
                    <Grid
                        component={motion.div}
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}


                        xs={12} item md={6}>
                        <Card component={motion.div}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            sx={{ maxWidth: 339, borderRadius: " 0 0 0 40px", mt: "3rem", mx: "auto" }}>
                            <CardMedia


                                component="img"
                                alt="green iguana"
                                height="325"
                                image=`url(${sofas})`

                            />
                            <Stack direction="row" spacing={small ? 6.5 : 10}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Modern Kitchen
                                    </Typography>
                                    <Typography variant='h6' sx={{ color: "primary.light", fontFamily: "Jost" }}>Decor / Artchitecture</Typography>

                                </CardContent>
                                <CardActions>
                                    <IconButton aria-label="delete" size="medium" sx={{ bgcolor: "#F4F0EC" }}>
                                        <ArrowForwardIosIcon fontSize="inherit" />
                                    </IconButton>
                                </CardActions>
                            </Stack>

                        </Card>

                    </Grid>

                </Grid>
            </Box>
            <Box
                component={motion.div}
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}


                sx={{ my: "6rem", bgcolor: "info.main", minHeight: "15rem" }}>
                <Box sx={{ mx: "5rem", my: "2rem", display: "flex", justifyContent: "center", flexFlow: "row wrap", gap: "4rem", py: "5rem" }}>

                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", flex: { xs: 1, lg: 0.15 } }}>
                        <Typography variant='h2' sx={{ color: "primary1.main" }}>12</Typography>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.main" }}>Years Of Experiance</Typography>

                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", flex: { xs: 1, lg: 0.15 } }}>
                        <Typography variant='h2' sx={{ color: "primary1.main" }}>85</Typography>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.main" }}>Success Project</Typography>

                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", flex: { xs: 1, lg: 0.15 } }}>
                        <Typography variant='h2' sx={{ color: "primary1.main" }}>15</Typography>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.main" }}>Active Project</Typography>

                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", flex: { xs: 1, lg: 0.15 } }}>
                        <Typography variant='h2' sx={{ color: "primary1.main" }}>95</Typography>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.main" }}>Happy Customers</Typography>

                    </Box>

                </Box>



            </Box>

            <Box component={motion.div}
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                sx={{ mx: "auto", mb: "2rem", textAlign: "center", px: 1 }}>
                <Typography variant='h2' sx={{ color: "primary.main" }}>Articles & News</Typography>
                <Typography className='Typography' variant='h5' sx={{ fontFamily: "Jost", color: "primary.light" }}>It is a long established fact that a reader will be distracted by the of readable content<br />of a page when lookings at its layouts the points of using.</Typography>

            </Box>
            <Box

                component={motion.div}
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}


                sx={{ mx: "auto ", mb: "6rem", display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center" }}>

                <Box
                    component={motion.div}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}

                    sx={{ p: "1rem", borderRadius: "2rem", textAlign: "center" }} >
                    <img style={{ borderRadius: "1.3rem 1.3rem 0 0 ", width: "13rem", height: "13rem" }} src={kitchen} />
                    <Typography variant='h4' sx={{ color: "primary.main" }}>Let’s Get Solution For<br /> Building Construction<br /> Work</Typography>
                    <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>26 December,2022 </Typography>
                        <IconButton aria-label="delete" size="small" sx={{ bgcolor: "#F4F0EC" }}>
                            <ArrowForwardIosIcon fontSize="inherit" />
                        </IconButton>

                    </Box>

                </Box>
                <Box
                    component={motion.div}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}

                    sx={{ p: "1rem", borderRadius: "2rem", textAlign: "center" }} >
                    <img
                        style={{ borderRadius: "1.3rem 1.3rem 0 0 ", width: "13rem", height: "13rem" }} src={living} />
                    <Typography variant='h4' sx={{ color: "primary.main" }}>Low Cost Latest Invented<br />  Interior Designing<br />  Ideas.</Typography>

                    <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>26 December,2022 </Typography>
                        <IconButton aria-label="delete" size="small" sx={{ bgcolor: "#F4F0EC" }}>
                            <ArrowForwardIosIcon fontSize="inherit" />
                        </IconButton>

                    </Box>

                </Box>
                <Box
                    component={motion.div}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}

                    sx={{ p: "1rem", borderRadius: "2rem", textAlign: "center" }} >
                    <img style={{ borderRadius: "1.3rem 1.3rem 0 0 ", width: "13rem", height: "13rem" }} src={interior} />
                    <Typography variant='h4' sx={{ color: "primary.main" }}>Best For Any Office &<br />  Business Interior <br /> Solution</Typography>
                    <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>26 December,2022 </Typography>
                        <IconButton aria-label="delete" size="small" sx={{ bgcolor: "#F4F0EC" }}>
                            <ArrowForwardIosIcon fontSize="inherit" />
                        </IconButton>

                    </Box>
                </Box>

            </Box>

            <Box
                component={motion.div}
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}



                sx={{ mx: "auto", maxWidth: "100%", width: "60%", mb: "4rem", bgcolor: "primary.main", borderRadius: "1.3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ my: "3rem", mb: "2rem", textAlign: "center", p: "1rem" }}>
                    <Typography variant='h3' sx={{ color: "white" }}>Wanna join the interno?</Typography>
                    <Typography variant='h6' sx={{ color: "white", fontFamily: "Jost" }}>It is a long established fact  will be distracted.</Typography>
                    <Button onClick={contact} sx={{ bgcolor: "primary1.main", borderRadius: "20px", textTransform: "initial" }} variant="contained">
                        <Typography sx={{ mr: "0.5rem" }} variant='h6'>Contact Us

                        </Typography>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                            <path d="M1.92969 8.43542L15.6529 8.29857M10.5479 1.91138L17.0708 8.43436L10.4165 15.0887" stroke="#292F36" strokeWidth="2" strokeLinecap="square" strokLinejoin="round" />
                        </svg>

                    </Button>
                </Box>
            </Box>

        </Box >
    )
}

export default Homepage
