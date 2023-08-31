import { React, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import vector from './img/vector.png'
import computer from './img/computer.png'
import two from './img/two.png'
import kit from './img/kit.png'
import flower from './img/flower.png'
import glass from './img/glass.png'
import { useNavigate } from 'react-router-dom'
import './style/Style.css'
import { motion, } from 'framer-motion';
function Services() {
    const navigate = useNavigate();
    const contact = () => {
        navigate('/Contact')
    }
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
                whileInView={{  opacity: 1, y: 0, transition: {
            duration: 0.2, ease: easeing
        }
                             }}
                sx={{ backgroundImage: `url(${flower})`, maxWidht: "100%", minHeight: "22rem", objectFit: "contain", position: "relative" }}>
                <Box sx={{ maxWidth: "32rem", textAlign: "center", backgroundColor: "white", position: "absolute", border: "0 solid transparent", left: "50%", bottom: 0, transform: "translate(-50%,0)", px: { xs: "1rem", sm: "2rem" }, py: "1rem", borderRadius: "20px 20px 0 0" }}>
                    <Typography variant='h4' sx={{ color: "primary.main" }}>Services</Typography>
                    <Typography variant='h5' sx={{ color: "primary.light", fontFamily: "Jost" }}>Home/Services</Typography>

                </Box>

            </Box>
            <Box 
                sx={{ display: "flex", justifyContent: "center", my: "4rem", mx: "auto", flexDirection: "column", gap: "2rem" }}>
                <Box 
                component={motion.div}
                initial={initial}
                whileInView={whileInView}

                sx={{ display: "flex", justifyContent: "center", textAlign: "center", gap: "1rem", flexWrap: "wrap" }}>
                    <Box sx={{ p: "1rem", textAlign: "center" }}>
                        <Typography sx={{ color: "primary.main" }} variant="h3">Project Plan</Typography>
                        <Typography className=" Typography" sx={{ color: "primary.light", mt: "1rem", fontFamily: "Jost" }} variant='h6'>There are many variations of the <br />passages of lorem Ipsum from<br />
                            available, majority.</Typography>
                        <Button sx={{ mb: { xs: "2rem", sm: "2rem", md: 0 } }} variant="text">
                            <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                            <img src={vector} alt='vector' />
                        </Button>

                    </Box>
                    <Box sx={{ p: "1rem", textAlign: "center" }}>
                        <Typography sx={{ color: "primary.main" }} variant="h3">Interior Work</Typography>
                        <Typography className=" Typography" sx={{ color: "primary.light", mt: "1rem", fontFamily: "Jost" }} variant='h6'>There are many variations of the <br />passages of lorem Ipsum from<br />
                            available, majority.</Typography>
                        <Button sx={{ mb: { xs: "2rem", sm: "2rem", md: 0 } }} variant="text">
                            <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                            <img src={vector} alt='vector' />
                        </Button>

                    </Box>
                    <Box sx={{ p: "1rem", textAlign: "center" }}>
                        <Typography sx={{ color: "primary.main" }} variant="h3">Realization</Typography>
                        <Typography className=" Typography" sx={{ color: "primary.light", mt: "1rem", fontFamily: "Jost" }} variant='h6'>There are many variations of the <br />passages of lorem Ipsum from<br />
                            available, majority.</Typography>
                        <Button variant="text">
                            <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                            <img src={vector} alt='vector' />
                        </Button>


                    </Box>
                </Box>
                <Box
                 component={motion.div}
                 initial={initial}
                 whileInView={whileInView}
 
                
                sx={{ display: "flex", justifyContent: "center", textAlign: "center", gap: "1rem", flexWrap: "wrap" }}>
                    <Box sx={{ p: "1rem", textAlign: "center" }}>
                        <Typography sx={{ color: "primary.main" }} variant="h3">2D/3D Art</Typography>
                        <Typography className=" Typography" sx={{ color: "primary.light", mt: "1rem", fontFamily: "Jost" }} variant='h6'>There are many variations of the <br />passages of lorem Ipsum from<br />
                            available, majority.</Typography>
                        <Button sx={{ mb: { xs: "2rem", sm: "2rem", md: 0 } }} variant="text">
                            <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                            <img src={vector} alt='vector' />
                        </Button>

                    </Box>
                    <Box sx={{ p: "1rem", textAlign: "center", bgcolor: "#F4F0EC", borderRadius: "20px" }}>
                        <Typography sx={{ color: "primary.main" }} variant="h3">Interior Work</Typography>
                        <Typography className=" Typography" sx={{ color: "primary.light", mt: "1rem", fontFamily: "Jost" }} variant='h6'>There are many variations of the <br />passages of lorem Ipsum from<br />
                            available, majority.</Typography>
                        <Button sx={{ mb: { xs: "2rem", sm: "2rem", md: 0 } }} variant="text">
                            <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                            <img src={vector} alt='vector' />
                        </Button>

                    </Box>
                    <Box sx={{ p: "1rem", textAlign: "center" }}>
                        <Typography sx={{ color: "primary.main" }} variant="h3">Decoration Work</Typography>
                        <Typography className=" Typography" sx={{ color: "primary.light", mt: "1rem", fontFamily: "Jost" }} variant='h6'>There are many variations of the <br />passages of lorem Ipsum from<br />
                            available, majority.</Typography>
                        <Button variant="text">
                            <Typography sx={{ color: "primary.light", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Read More</Typography>
                            <img src={vector} alt='vector' />
                        </Button>


                    </Box>

                </Box>
            </Box>
            <Box component={motion.div}
                initial={initial}
                whileInView={whileInView}
                sx={{ display: "flex", flexDirection: "column ", justifyContent: "center", p: "2rem 2rem 4rem 2rem", bgcolor: "#F4F0EC", mx: "auto", width: "70%", maxWidth: "100%", borderRadius: "30px", mb: "3rem" }}>
                <Typography variant="h2" sx={{ color: "#363B41", textAlign: "center" }}>How We Work
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: "Jost", color: "#4D5053", mt: "1rem", textAlign: "center" }}>It is a long established fact will be distracted.Lorem Ipsum is simply dummy text of
                    <br />the printing and typesetting industry.</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "4rem" }}>
                    <motion.img initial={preHover} whileHover={hovered} style={{ width: "15rem", minHeight: "20%", marginTop: "2rem", maxWidth: "120%", borderRadius: "0 30px 0 150px" }} src={computer} />

                    <Box

                        component={motion.div}
                        initial={initial}
                        whileInView={whileInView}

                        sx={{ my: "1.5rem" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="93" height="70" viewBox="0 0 93 93" fill="none">
                                <path d="M92.5 89.8347H89.5322V92.8025H92.5V89.8347Z" fill="#CDA274" />
                                <path d="M71.7258 15.6412V3.77023H47.9839V0.80249H45.0161V3.77023H21.2742V35.833L12.371 30.6932V30.4799H12.0037L11.6828 30.2944L11.5752 30.4799H0.5V51.2541C0.5 54.5279 3.16169 57.1896 6.43548 57.1896H21.2742V63.1251H34.3026L28.9606 89.8347H0.5V92.8025H86.5645V89.8347H64.0394L58.6974 63.1251H71.7258V39.3831H83.5968V36.4154H81.0445L83.7303 25.6759L78.2289 18.8C83.799 19.7756 88.0484 24.6353 88.0484 30.4799H91.0161C91.0161 25.6239 88.6605 21.317 85.0417 18.6089H92.5V15.6412H71.7258ZM9.40323 51.2541C9.40323 52.8901 8.07145 54.2218 6.43548 54.2218C4.79952 54.2218 3.46774 52.8901 3.46774 51.2541V33.4477H9.40323V51.2541ZM20.3709 39.7819L23.3386 44.9198L13.7491 50.4584L19.6827 40.1789L20.3709 39.7819ZM12.371 35.0391L12.7698 34.3472L17.9077 37.315L12.371 46.9082V35.0391ZM13.163 54.2218L23.4444 48.2864H24.2419V54.2218H13.163ZM45.0161 89.8347H31.9877L37.3297 63.1251H45.0161V89.8347ZM61.0123 89.8347H47.9839V63.1251H55.6703L61.0123 89.8347ZM68.6245 25.6759L71.3103 36.4154H68.7581V60.1573H24.2419V57.1896H27.2097V46.1125L27.3933 46.0049L27.2097 45.6877V45.3186H26.9964L24.2419 40.548V6.73797H68.7581V15.6412H59.8548V18.6089H67.3131C63.6944 21.317 61.3387 25.6239 61.3387 30.4799H64.3065C64.3065 24.6353 68.5559 19.7756 74.126 18.7981L68.6245 25.6759ZM80.4955 26.3826L77.9877 36.4154H74.3671L71.8594 26.3807L74.6936 22.838V28.996H77.6613V22.8398L80.4955 26.3826Z" fill="#CDA274" />
                                <path d="M33.1451 12.6734H30.1774V15.6411H33.1451V12.6734Z" fill="#CDA274" />
                                <path d="M62.8225 51.2541H59.8548V54.2218H62.8225V51.2541Z" fill="#CDA274" />
                                <path d="M59.8549 33.4476C59.8549 26.0839 53.8637 20.0927 46.5 20.0927C44.0999 20.0927 41.8499 20.7382 39.9005 21.8511L35.8291 16.2532L33.429 17.9986L37.5059 23.604C34.8331 26.0468 33.1452 29.5487 33.1452 33.4476C33.1452 40.8113 39.1363 46.8024 46.5 46.8024C48.9002 46.8024 51.1501 46.1569 53.0995 45.044L57.1709 50.6419L59.5711 48.8965L55.4941 43.2912C58.167 40.8484 59.8549 37.3465 59.8549 33.4476ZM46.5 43.8347C40.7741 43.8347 36.1129 39.1735 36.1129 33.4476C36.1129 30.5355 37.3223 27.9016 39.2606 26.0152L51.343 42.6309C49.8944 43.3951 48.2491 43.8347 46.5 43.8347ZM41.657 24.2661C43.1057 23.5001 44.7509 23.0605 46.5 23.0605C52.2259 23.0605 56.8871 27.7217 56.8871 33.4476C56.8871 36.3597 55.6778 38.9936 53.7395 40.8799L41.657 24.2661Z" fill="#CDA274" />
                            </svg>
                            <Typography sx={{ color: "white" }}>01</Typography>
                        </Box>
                        <Typography variant='h5' >Concept & Details</Typography>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>It is a long established fact will be distracted.<br />
                            Lorem Ipsum is simply dummy from text of the<br />and typesetting industry.</Typography>


                    </Box>
                </Box>
                <Box component={motion.div}
                    initial={initial}
                    whileInView={whileInView}
                    sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "4rem" }}>


                    <Box sx={{ my: "1.5rem" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="60" viewBox="0 0 86 87" fill="none">
                                <path d="M58.7669 76.3741H55.9003V69.2075V14.7408C55.9003 14.4541 55.7569 14.0241 55.6136 13.8808L51.4569 1.4108C51.3136 0.837471 50.7403 0.407471 50.1669 0.407471C49.5936 0.407471 49.0203 0.837471 48.8769 1.4108L44.7203 13.8808C44.5769 14.1675 44.4336 14.4541 44.4336 14.7408V69.2075V84.9741C44.4336 85.8341 45.0069 86.4075 45.8669 86.4075H54.4669C55.3269 86.4075 55.9003 85.8341 55.9003 84.9741V79.2408H60.2003C61.0603 79.2408 61.6336 78.6675 61.6336 77.8075V34.8075H58.7669V76.3741ZM47.3003 16.1741H53.0336V67.7741H47.3003V16.1741ZM50.1669 6.42747L52.4603 13.3075H47.8736L50.1669 6.42747ZM53.0336 83.5408H47.3003V70.6408H53.0336V83.5408Z" fill="#CDA274" />
                                <path d="M84.5662 0.407471H68.7995C67.9395 0.407471 67.3662 0.980804 67.3662 1.8408V84.9741C67.3662 85.8341 67.9395 86.4075 68.7995 86.4075H84.5662C85.4262 86.4075 85.9995 85.8341 85.9995 84.9741V1.8408C85.9995 0.980804 85.4262 0.407471 84.5662 0.407471ZM83.1329 83.5408H70.2329V73.5075H77.3995V70.6408H70.2329V59.1741H77.3995V56.3075H70.2329V44.8408H77.3995V41.9741H70.2329V30.5075H77.3995V27.6408H70.2329V16.1741H77.3995V13.3075H70.2329V3.27414H83.1329V83.5408Z" fill="#CDA274" />
                                <path d="M20.0667 14.7408C9.03 14.7408 0 23.7708 0 34.8075C0 42.5475 4.44333 49.5708 11.4667 52.8675V63.4742V70.6408C11.4667 71.5008 12.04 72.0742 12.9 72.0742H18.6333V76.3742H21.5V72.0742H27.2333C28.0933 72.0742 28.6667 71.5008 28.6667 70.6408V63.4742V52.8675C35.69 49.5708 40.1333 42.5475 40.1333 34.8075C40.1333 23.7708 31.1033 14.7408 20.0667 14.7408ZM25.8 69.2075H14.3333V64.9075H25.8V69.2075ZM26.66 50.7175C26.0867 50.8608 25.8 51.4342 25.8 52.0075V62.0408H14.3333V59.1742H21.5V56.3075H14.3333V52.0075C14.3333 51.4342 14.0467 50.8608 13.4733 50.7175C7.02333 47.9942 2.86667 41.6875 2.86667 34.8075C2.86667 25.3475 10.6067 17.6075 20.0667 17.6075C29.5267 17.6075 37.2667 25.3475 37.2667 34.8075C37.2667 41.6875 33.11 47.9942 26.66 50.7175Z" fill="#CDA274" />
                                <path d="M23.3637 26.6375L20.067 29.9341L16.7703 26.6375L14.7637 28.6441L18.6337 32.5141V47.7075H21.5003V32.5141L25.3703 28.6441L23.3637 26.6375Z" fill="#CDA274" />
                            </svg>
                            <Typography sx={{ color: "white" }}>02</Typography>
                        </Box>
                        <Typography variant='h5' >Ideas for Work</Typography>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>It is a long established fact will be distracted.<br />
                            Lorem Ipsum is simply dummy from text of the<br />and typesetting industry.</Typography>


                    </Box>
                    <motion.img initial={preHover} whileHover={hovered} style={{ width: "15rem", minHeight: "20%", marginTop: "2rem", maxWidth: "120%", borderRadius: "0 30px 0 150px" }} src={two} />
                </Box>
                <Box component={motion.div}
                    initial={initial}
                    whileInView={whileInView}
                    sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "4rem" }}>
                    <motion.img initial={preHover} whileHover={hovered} style={{ width: "15rem", minHeight: "20%", marginTop: "2rem", maxWidth: "120%", borderRadius: "0 30px 0 150px" }} src={kit} />

                    <Box sx={{ my: "1.5rem" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="70" viewBox="0 0 90 91" fill="none">
                                <path d="M90 42.6092V38.9639L46.9216 7.77052H43.0784L33.3871 14.7872V9.22213H36.2903V0.512451H7.25806V9.22213H10.1613V31.606L0 38.9639V42.6092H7.25806V64.3834H0V84.706H7.25806V90.5125H82.7419V60.0286C86.7448 60.0286 90 56.7733 90 52.7705C90 48.7677 86.7448 45.5125 82.7419 45.5125V42.6092H90ZM10.1613 3.41568H33.3871V6.3189H10.1613V3.41568ZM30.4839 9.22213V16.8903L13.0645 29.5048V9.22213H30.4839ZM5.80645 75.9963V81.8028H2.90323V67.2866H69.6774V81.8028H66.7742V75.9963H63.871V81.8028H60.9677V75.9963H58.0645V81.8028H55.1613V75.9963H52.2581V81.8028H49.3548V75.9963H46.4516V81.8028H43.5484V75.9963H40.6452V81.8028H37.7419V75.9963H34.8387V81.8028H31.9355V75.9963H29.0323V81.8028H26.129V75.9963H23.2258V81.8028H20.3226V75.9963H17.4194V81.8028H14.5161V75.9963H11.6129V81.8028H8.70968V75.9963H5.80645ZM79.8387 87.6092H10.1613V84.706H72.5807V64.3834H10.1613V42.6092H79.8387V45.5125H27.1415L16.2544 52.7705L27.1415 60.0286H79.8387V87.6092ZM76.9355 48.4157V57.1254H74.0323V48.4157H76.9355ZM30.4839 51.3189V48.4157H71.129V51.3189H30.4839ZM71.129 54.2221V57.1254H30.4839V54.2221H71.129ZM27.5806 48.7096V56.8332L21.4875 52.7705L27.5806 48.7096ZM87.0968 52.7705C87.0968 55.1711 85.1425 57.1254 82.7419 57.1254H79.8387V48.4157H82.7419C85.1425 48.4157 87.0968 50.3699 87.0968 52.7705ZM3.92661 39.706L44.0183 10.6737H45.9817L86.0734 39.706H3.92661Z" fill="#CDA274" />
                                <path d="M45 15.0281C38.5966 15.0281 33.3871 20.2376 33.3871 26.641C33.3871 33.0444 38.5966 38.2539 45 38.2539C51.4034 38.2539 56.6129 33.0444 56.6129 26.641C56.6129 20.2376 51.4034 15.0281 45 15.0281ZM45 35.3507C40.197 35.3507 36.2903 31.444 36.2903 26.641C36.2903 21.838 40.197 17.9313 45 17.9313C49.803 17.9313 53.7097 21.838 53.7097 26.641C53.7097 31.444 49.803 35.3507 45 35.3507Z" fill="#CDA274" />
                            </svg>
                            <Typography sx={{ color: "white" }}>03</Typography>
                        </Box>
                        <Typography variant='h5' >Design</Typography>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>It is a long established fact will be distracted.<br />
                            Lorem Ipsum is simply dummy from text of the<br />and typesetting industry.</Typography>


                    </Box>
                </Box>
                <Box component={motion.div}
                    initial={initial}
                    whileInView={whileInView}
                    sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "4rem" }}>


                    <Box sx={{ mt: "1.5rem" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="87" height="70" viewBox="0 0 87 95" fill="none">
                                <path d="M87 21.1799V0.617432H57.3407V32.9299H51.4088V50.5549H25.7053V68.1799H0V94.6174H80.0801V32.9299H60.3066V21.1799H87ZM60.3066 3.55493H84.0341V18.2424H60.3066V3.55493ZM28.6713 53.4924H51.4107V58.3889H28.6713V53.4924ZM2.96593 71.1174H25.7053V76.0139H2.96593V71.1174ZM77.1142 91.6799H2.96593V78.9514H25.7053V85.3166H28.6713V61.3264H51.4107V71.6076H54.3766V43.7014H77.1142V91.6799ZM77.1142 35.8674V40.7639H54.3748V35.8674H77.1142Z" fill="#CDA274" />
                                <path d="M79.5852 6.49243H72.6653V9.42993H79.5852V6.49243Z" fill="#CDA274" />
                                <path d="M79.585 12.3674H64.7554V15.3049H79.585V12.3674Z" fill="#CDA274" />
                                <path d="M32.1303 11.3889V14.3264H40.4145L3.39966 50.9845L5.49805 53.0628L42.511 16.4028V22.6487H45.4769V11.3889H32.1303Z" fill="#CDA274" />
                                <path d="M9.39072 81.8889H5.43677V84.8264H9.39072V81.8889Z" fill="#CDA274" />
                                <path d="M23.2325 81.8889H19.2786V84.8264H23.2325V81.8889Z" fill="#CDA274" />
                                <path d="M35.0963 64.2639H31.1423V67.2014H35.0963V64.2639Z" fill="#CDA274" />
                                <path d="M48.9378 64.2639H44.9839V67.2014H48.9378V64.2639Z" fill="#CDA274" />
                                <path d="M60.8016 46.6389H56.8477V49.5764H60.8016V46.6389Z" fill="#CDA274" />
                                <path d="M74.6412 46.6389H70.6873V49.5764H74.6412V46.6389Z" fill="#CDA274" />
                            </svg>
                            <Typography sx={{ color: "white" }}>04</Typography>
                        </Box>
                        <Typography variant='h5' >Perfection</Typography>
                        <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>It is a long established fact will be distracted.<br />
                            Lorem Ipsum is simply dummy from text of the<br />and typesetting industry.</Typography>


                    </Box>
                    <motion.img initial={preHover} whileHover={hovered} style={{ width: "15rem", minHeight: "20%", marginTop: "2rem", maxWidth: "120%", borderRadius: "0 30px 0 150px" }} src={glass} />
                </Box>

            </Box>
            <Box component={motion.div}
                initial={initial}
                whileInView={whileInView}
                sx={{ mx: "auto", maxWidth: "100%", width: "60%", mb: "4rem", bgcolor: "primary.main", borderRadius: "1.3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ my: "3rem", mb: "2rem", textAlign: "center", p: "1rem" }}>
                    <Typography variant='h3' sx={{ color: "white" }}>Wanna join the interno?</Typography>
                    <Typography variant='h6' sx={{ color: "white", fontFamily: "Jost" }}>It is a long established fact  will be distracted.</Typography>
                    <Button onClick={contact} sx={{ bgcolor: "primary1.main", borderRadius: "20px", textTransform: "initial" }} variant="contained">
                        <Typography sx={{ mr: "0.5rem" }} variant='h6'>Contact Us

                        </Typography>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                            <path d="M1.92969 8.43542L15.6529 8.29857M10.5479 1.91138L17.0708 8.43436L10.4165 15.0887" stroke="#292F36" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                        </svg>

                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Services
