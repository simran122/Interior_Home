import React from 'react'
import './style/Style.css'
import { Box, Typography, ImageList, ImageListItem, ImageListItemBar, Button } from '@mui/material'
import vector from './img/vecto.png'
import vect from './img/vec.png'
import { useEffect } from 'react'
import { motion, } from 'framer-motion';
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
        author: 'swabdesign',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
        author: 'Pavel Nekoranec',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
        author: 'Charles Deluvio',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',

    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
        author: 'Darren Richardson',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
        author: 'Taylor Simpson',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
        author: 'Ben Kolde',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
        author: 'Philipp Berndt',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
        author: 'Jen P.',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
        author: 'Douglas Sheppard',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
        author: 'Fi Bell',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
        author: 'Hutomo Abrianto',
    },
];

function Project() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                whileInView={whileInView} sx={{ backgroundImage: "url('src/components/img/12.png')", maxWidht: "100%", minHeight: "22rem", objectFit: "contain", position: "relative" }}>
                <Box sx={{ maxWidth: "32rem", textAlign: "center", backgroundColor: "white", position: "absolute", border: "0 solid transparent", left: "50%", bottom: 0, transform: "translate(-50%,0)", px: { xs: "1rem", sm: "2rem" }, py: "1rem", borderRadius: "20px 20px 0 0" }}>
                    <Typography variant='h4' sx={{ color: "primary.main" }}>Our Project</Typography>
                    <Typography variant='h5' sx={{ color: "primary.light", fontFamily: "Jost" }}>Home/Projects</Typography>

                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", width: "70rem", maxWidth: "100%", mx: "auto", my: "3rem", flexWrap: "wrap", p: "0.2rem" }}>
                <ImageList component={motion.div}
                    initial={initial}
                    whileInView={whileInView} variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar position="below" title={item.author} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Box component={motion.div}
                initial={initial}
                whileInView={whileInView} sx={{ display: "flex", justifyContent: "center", mx: "auto", my: "7rem", flexWrap: "wrap", gap: "1.5rem" }}>
                <Box component={motion.div} initial={preHover} whileHover={hovered} sx={{ textAlign: "center", p: "1.5rem", bgcolor: "#F4F0EC", borderRadius: "20px" }}>
                    <Typography variant='h4'>Design Advices</Typography>
                    <Typography variant="h1" sx={{ mt: "2rem" }}>$29</Typography>
                    <Typography variant='h4' sx={{ mb: "3rem" }}>/month</Typography>

                    <Typography variant='h5' sx={{ fontFamily: "Jost", color: "primary.light" }}>
                        General living space advices<br />Rennovation advices<br />
                        Interior design advices<br /> Furniture reorganization<br /> Up to 5 hours meetings
                    </Typography>
                    <Button sx={{ mb: { xs: "2rem", sm: "2rem", md: 0, }, bgcolor: "primary1.main" }} variant="contained">
                        <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                        <img src={vector} alt='vector' />
                    </Button>
                </Box>
                <Box component={motion.div} initial={preHover} whileHover={hovered} sx={{ textAlign: "center", p: "1.5rem", bgcolor: "#F4F0EC", borderRadius: "20px" }}>
                    <Typography variant='h4'>Complete Interior</Typography>
                    <Typography variant="h1" sx={{ mt: "2rem", color: "primary1.main" }}>$39</Typography>
                    <Typography variant='h4' sx={{ mb: "3rem" }}>/month</Typography>

                    <Typography variant='h5' sx={{ fontFamily: "Jost", color: "primary.light" }}>
                        Complete home redesign<br /> Interior and exterior works<br />
                        Modular interior planning<br /> Kitchen design<br /> Garages organization
                    </Typography>
                    <Button sx={{ mb: { xs: "2rem", sm: "2rem", md: 0, }, bgcolor: "primary.main" }} variant="contained">
                        <Typography sx={{ color: "white", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                        <img src={vect} alt='vector' />
                    </Button>
                </Box>

                <Box component={motion.div} initial={preHover} whileHover={hovered} sx={{ textAlign: "center", p: "1.5rem", bgcolor: "#F4F0EC", borderRadius: "20px" }}>
                    <Typography variant='h4'>Furniture Design</Typography>
                    <Typography variant="h1" sx={{ mt: "2rem" }}>$59</Typography>
                    <Typography variant='h4' sx={{ mb: "3rem" }}>/month</Typography>

                    <Typography variant='h5' sx={{ fontFamily: "Jost", color: "primary.light" }}>
                        Furniture for living room<br /> Furniture refurbishment<br />
                        Sofas and amchairs<br />  Tables and chairs<br />  Kitchens
                    </Typography>
                    <Button sx={{ mb: { xs: "2rem", sm: "2rem", md: 0, }, bgcolor: "primary1.main" }} variant="contained">
                        <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                        <img src={vector} alt='vector' />
                    </Button></Box>
            </Box>
        </>
    )
}

export default Project
