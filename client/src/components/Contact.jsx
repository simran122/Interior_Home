import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, Button, Stack, Input, FormControl } from '@mui/material'
import './style/Style.css'
import vector from './img/vector2.png'
import photo from './img/25.png'
import axios from 'axios'
import { motion, } from 'framer-motion';
function Contact() {

    const [form, setForm] = useState({ name: "", email: "", website: "", phone: "", message: "" })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        console.log(form)

    };
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = axios.post("https://interior-home.vercel.app/", form).then((res) => {
            console.log(res)

        })
            .catch(error => console.log(error))


        console.log(response)
        // console.log(form)
        console.log(JSON.stringify(form))
        setForm({ name: "", email: "", website: "", phone: "", message: "" })



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
                whileInView={whileInView} sx={{ backgroundImage: "url('src/components/img/24.png')", maxWidht: "100%", minHeight: "22rem", objectFit: "cover", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative" }}>
                <Box sx={{ maxWidth: "32rem", textAlign: "center", backgroundColor: "white", position: "absolute", border: "0 solid transparent", left: "50%", bottom: 0, transform: "translate(-50%,0)", px: { xs: "1rem", sm: "2rem" }, py: "1rem", borderRadius: "20px 20px 0 0" }}>
                    <Typography variant='h4' sx={{ color: "primary.main" }}>Contact</Typography>
                    <Typography variant='h5' sx={{ color: "primary.light", fontFamily: "Jost" }}>Home/Contact</Typography>

                </Box>
            </Box>
            <Box component={motion.div}
                initial={initial}
                whileInView={whileInView} sx={{ mx: "auto", my: "5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant='h2'>We love meeting new people <br />and helping them.</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center", gap: "2.5rem", p: "2rem 1rem 2rem 1rem", flexWrap: "wrap", m: " 0 0.5rem 0 0.5rem" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ bgcolor: "info.main", borderRadius: "20px", p: "1rem ", gap: "1rem", display: "flex", flexDirection: "column", }}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <circle cx="26" cy="26" r="26" fill="white" />
                                    <path d="M34.8846 18H17.1154C15.9471 18 15 18.9514 15 20.125V32.875C15 34.0486 15.9471 35 17.1154 35H34.8846C36.0529 35 37 34.0486 37 32.875V20.125C37 18.9514 36.0529 18 34.8846 18Z" stroke="#CDA274" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 21L26 28L34 21" stroke="#CDA274" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>info@Interno.com</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <circle cx="26" cy="26" r="26" fill="white" />
                                    <path d="M35.3445 33.4554C34.5429 32.6478 32.6013 31.4691 31.6593 30.9941C30.4326 30.3762 30.3317 30.3258 29.3675 31.0421C28.7243 31.5201 28.2967 31.9471 27.5441 31.7866C26.7914 31.6261 25.1558 30.721 23.7236 29.2935C22.2914 27.8659 21.3338 26.183 21.1727 25.4329C21.0117 24.6828 21.4458 24.2603 21.9194 23.6156C22.5867 22.707 22.5362 22.5556 21.9658 21.329C21.521 20.3749 20.308 18.4517 19.4972 17.6541C18.6299 16.7975 18.6299 16.9489 18.0711 17.1811C17.6162 17.3725 17.1797 17.6052 16.7672 17.8762C15.9594 18.4128 15.5112 18.8585 15.1977 19.5284C14.8842 20.1982 14.7433 21.7686 16.3623 24.7095C17.9813 27.6504 19.1171 29.1542 21.468 31.4984C23.819 33.8426 25.6268 35.1031 28.2695 36.5851C31.5387 38.416 32.7927 38.0591 33.4646 37.7461C34.1365 37.4331 34.5843 36.9889 35.1219 36.1813C35.3936 35.7695 35.6268 35.3335 35.8186 34.8789C36.0513 34.3222 36.2027 34.3222 35.3445 33.4554Z" stroke="#CDA274" strokeWidth="2" strokeMiterlimit="10" />
                                </svg>
                                <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>9996799351</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <circle cx="26" cy="26" r="26" fill="white" />
                                    <path d="M36 26.5C36 20.7013 31.2987 16 25.5 16C19.7013 16 15 20.7013 15 26.5C15 32.2987 19.7013 37 25.5 37C31.2987 37 36 32.2987 36 26.5Z" stroke="#CDA274" strokeWidth="2" strokeMiterlimit="10" />
                                    <path d="M35.4475 22.331C34.6349 22.3361 34.7148 23.844 33.7025 23.1325C33.3265 22.8689 33.0953 22.4857 32.6233 22.3692C32.2109 22.2674 31.7885 22.3732 31.3812 22.444C30.9183 22.5244 30.3693 22.5605 30.0182 22.9132C29.6787 23.2526 29.4991 23.7081 29.1379 24.0496C28.4392 24.7111 28.1442 25.4333 28.5965 26.3686C29.0316 27.2679 29.9418 27.7559 30.9238 27.6918C31.8887 27.6272 32.8909 27.0643 32.8631 28.4745C32.853 28.9732 32.9567 29.3193 33.109 29.7829C33.2501 30.2103 33.2405 30.6246 33.2729 31.0658C33.3326 31.8902 33.4834 32.8144 33.8902 33.5426L34.6491 32.4658C34.7427 32.3325 34.9385 32.1457 34.985 31.9885C35.0675 31.7101 34.9051 31.2317 34.8864 30.9198C34.8676 30.6078 34.8767 30.2918 34.8292 29.9798C34.7624 29.5427 34.5054 29.133 34.47 28.7009C34.4047 27.8964 34.5509 27.2541 33.9347 26.5814C33.3397 25.9325 32.4675 25.7768 31.6342 25.9086C31.2142 25.9747 29.5239 26.2465 30.2024 25.2811C30.3364 25.0913 30.5707 24.9356 30.7215 24.7549C30.8525 24.5976 30.9663 24.3086 31.1201 24.1859C31.2739 24.0633 31.9802 23.9223 32.1826 23.9849C32.385 24.0475 32.596 24.3412 32.7715 24.4714C33.0959 24.7172 33.4744 24.8806 33.875 24.9478C34.5661 25.0496 36.0111 24.6455 35.9999 23.7539C35.9979 23.3264 35.6033 22.731 35.4475 22.331ZM27.4475 29.6673C27.1778 28.5254 25.6352 28.1437 24.8035 27.5244C24.3254 27.1681 23.8999 26.618 23.272 26.5732C22.9826 26.5523 22.7402 26.6155 22.4534 26.5406C22.1903 26.4724 21.9839 26.33 21.7036 26.3671C21.1799 26.4363 20.8495 26.9992 20.2869 26.9228C19.7532 26.8506 19.2032 26.2226 19.0818 25.7111C18.926 25.0536 19.443 24.8404 19.997 24.7819C20.2282 24.7574 20.4878 24.731 20.7099 24.816C21.0023 24.9254 21.1405 25.2134 21.403 25.359C21.8953 25.6302 21.995 25.1966 21.9196 24.7569C21.8068 24.0984 21.6752 23.8297 22.2591 23.3768C22.6638 23.0643 23.0099 22.8384 22.9451 22.277C22.9067 21.9473 22.7271 21.7982 22.8946 21.4699C23.0215 21.2201 23.3701 20.9946 23.5973 20.8455C24.1837 20.4608 26.1093 20.4893 25.3226 19.4124C25.0913 19.0964 24.6648 18.5315 24.2601 18.4542C23.7541 18.358 23.5295 18.9259 23.1769 19.1763C22.8126 19.4353 22.1033 19.7295 21.7385 19.329C21.2477 18.79 22.0638 18.6129 22.2444 18.2369C22.425 17.8608 21.826 17.1498 21.5052 16.9697L19.997 18.671C19.9537 18.9559 19.9688 19.2467 20.0414 19.5255C20.1139 19.8044 20.2424 20.0653 20.419 20.2923C20.719 20.6806 21.1966 20.8053 21.2184 21.3356C21.2396 21.8445 21.1607 22.105 20.8298 22.4628C20.6866 22.6155 20.5854 22.8323 20.4397 22.9753C20.2611 23.1498 20.3274 23.0964 20.0486 23.1442C19.5245 23.2333 19.0782 23.3707 18.5718 23.5111C17.7279 23.7457 17.65 22.359 17.2655 21.815L16.0006 22.8424C15.9869 23.0109 16.208 23.3208 16.2682 23.504C16.6138 24.5508 17.311 25.3605 17.7613 26.362C18.2353 27.4226 19.5083 27.1284 20.0704 28.0577C20.5693 28.8821 20.0365 29.9259 20.4099 30.789C20.6811 31.4154 21.3206 31.5523 21.7618 32.0103C22.2125 32.4729 22.2029 33.106 22.2717 33.708C22.3493 34.4162 22.4753 35.1181 22.6487 35.8088C22.7099 36.0475 22.766 36.363 22.9285 36.5599C23.0398 36.6953 23.4217 36.8118 23.2674 36.8566C23.483 36.8923 23.867 37.0948 24.0466 36.9462C24.2834 36.7508 24.2201 36.1493 24.2611 35.8775C24.384 35.0683 24.7868 34.277 25.3302 33.6714C25.867 33.0739 26.6026 32.6694 27.0559 31.992C27.4976 31.3315 27.6307 30.4404 27.4475 29.6673ZM25.7582 31.0068C25.4546 31.5518 24.7787 31.9167 24.3441 32.3498C24.2262 32.4673 23.9752 32.8745 23.8275 32.7864C23.7218 32.7233 23.6858 32.1951 23.6469 32.074C23.4459 31.464 23.0622 30.9316 22.5485 30.5498C22.3901 30.4292 21.9975 30.2724 21.907 30.107C21.8058 29.9274 21.8968 29.5035 21.9004 29.3081C21.9059 29.0231 21.7769 28.5493 21.8468 28.2903C21.9277 27.9915 21.7719 28.1717 22.0375 28.1126C22.1776 28.0811 22.7564 28.1834 22.931 28.22C23.2082 28.278 23.361 28.4516 23.5796 28.6271C24.1543 29.0908 24.7873 29.4495 25.4313 29.8047C25.9302 30.0826 26.0769 30.4343 25.7582 31.0068ZM22.2368 16.985C22.4766 17.2206 22.7023 17.4995 23.06 17.5229C23.3985 17.5458 23.7177 17.3615 24.0132 17.5931C24.341 17.8475 24.5773 18.1697 25.0124 18.2491C25.4334 18.3259 25.8791 18.0786 25.9833 17.6455C26.0845 17.2328 25.8665 16.7839 25.8533 16.3697C25.8533 16.3122 25.8842 16.0567 25.8447 16.0135C25.8154 15.9809 25.5705 16.0175 25.533 16.0185C25.2588 16.0267 24.9853 16.0457 24.7124 16.0755C23.7176 16.1838 22.7434 16.4349 21.8194 16.8211C21.9424 16.9066 22.0967 16.9407 22.2368 16.985ZM30.936 19.844C31.3655 19.844 31.8016 19.6506 31.663 19.1509C31.5466 18.732 31.3483 18.2776 30.8657 18.5035C30.5585 18.647 30.1234 19.0124 30.0875 19.3748C30.0465 19.786 30.6496 19.844 30.936 19.844ZM30.5929 22.0307C31.0316 22.2949 31.6822 22.1707 32.0131 21.7936C32.2717 21.4984 32.4239 20.986 32.8889 20.9865C33.0936 20.986 33.2903 21.0667 33.4363 21.2109C33.6286 21.4109 33.5906 21.5987 33.6316 21.8491C33.7232 22.4114 34.3227 21.8811 34.4791 21.6633C34.5803 21.5213 34.7174 21.3106 34.6713 21.1259C34.6288 20.9534 34.4285 20.7697 34.3394 20.6114C34.0794 20.1534 33.8654 19.6206 33.4758 19.2506C33.1009 18.8944 32.64 18.9356 32.2843 19.3056C31.9929 19.6109 31.6544 19.8526 31.4551 20.2241C31.3144 20.4852 31.1561 20.6099 30.8712 20.6776C30.7144 20.7147 30.5353 20.7285 30.4037 20.8343C30.0374 21.1244 30.2459 21.8211 30.5929 22.0307Z" fill="#CDA274" />
                                </svg>
                                <Typography variant='h6' sx={{ fontFamily: "Jost", color: "primary.light" }}>www.Interno.com</Typography>
                            </Stack>
                            <Box>

                                <svg width="210" height="23" viewBox="0 0 226 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6836 12.875L11.1758 9.64062H8.04688V7.53125C8.04688 6.61719 8.46875 5.77344 9.875 5.77344H11.3164V2.99609C11.3164 2.99609 10.0156 2.75 8.78516 2.75C6.21875 2.75 4.53125 4.33203 4.53125 7.14453V9.64062H1.64844V12.875H4.53125V20.75H8.04688V12.875H10.6836Z" fill="#292F36" />
                                    <path d="M82.6367 8.09375C83.3398 7.56641 83.9727 6.93359 84.4648 6.19531C83.832 6.47656 83.0938 6.6875 82.3555 6.75781C83.1289 6.30078 83.6914 5.59766 83.9727 4.71875C83.2695 5.14062 82.4609 5.45703 81.6523 5.63281C80.9492 4.89453 80 4.47266 78.9453 4.47266C76.9062 4.47266 75.2539 6.125 75.2539 8.16406C75.2539 8.44531 75.2891 8.72656 75.3594 9.00781C72.3008 8.83203 69.5586 7.35547 67.7305 5.14062C67.4141 5.66797 67.2383 6.30078 67.2383 7.00391C67.2383 8.26953 67.8711 9.39453 68.8906 10.0625C68.293 10.0273 67.6953 9.88672 67.2031 9.60547V9.64062C67.2031 11.4336 68.4688 12.9102 70.1562 13.2617C69.875 13.332 69.5234 13.4023 69.207 13.4023C68.9609 13.4023 68.75 13.3672 68.5039 13.332C68.9609 14.8086 70.332 15.8633 71.9492 15.8984C70.6836 16.8828 69.1016 17.4805 67.3789 17.4805C67.0625 17.4805 66.7812 17.4453 66.5 17.4102C68.1172 18.4648 70.0508 19.0625 72.1602 19.0625C78.9453 19.0625 82.6367 13.4727 82.6367 8.58594C82.6367 8.41016 82.6367 8.26953 82.6367 8.09375Z" fill="#292F36" />
                                    <path d="M142.141 18.5V7.98828H138.871V18.5H142.141ZM140.488 6.58203C141.543 6.58203 142.387 5.70312 142.387 4.64844C142.387 3.62891 141.543 2.78516 140.488 2.78516C139.469 2.78516 138.625 3.62891 138.625 4.64844C138.625 5.70312 139.469 6.58203 140.488 6.58203ZM154.34 18.5H154.375V12.7344C154.375 9.92188 153.742 7.74219 150.438 7.74219C148.855 7.74219 147.801 8.62109 147.344 9.42969H147.309V7.98828H144.18V18.5H147.449V13.2969C147.449 11.9258 147.695 10.625 149.383 10.625C151.07 10.625 151.105 12.1719 151.105 13.4023V18.5H154.34Z" fill="#292F36" />
                                    <path d="M217 7.60742C214.625 7.60742 212.732 9.53711 212.732 11.875C212.732 14.25 214.625 16.1426 217 16.1426C219.338 16.1426 221.268 14.25 221.268 11.875C221.268 9.53711 219.338 7.60742 217 7.60742ZM217 14.6582C215.479 14.6582 214.217 13.4336 214.217 11.875C214.217 10.3535 215.441 9.12891 217 9.12891C218.521 9.12891 219.746 10.3535 219.746 11.875C219.746 13.4336 218.521 14.6582 217 14.6582ZM222.418 7.45898C222.418 6.90234 221.973 6.45703 221.416 6.45703C220.859 6.45703 220.414 6.90234 220.414 7.45898C220.414 8.01562 220.859 8.46094 221.416 8.46094C221.973 8.46094 222.418 8.01562 222.418 7.45898ZM225.238 8.46094C225.164 7.125 224.867 5.9375 223.902 4.97266C222.938 4.00781 221.75 3.71094 220.414 3.63672C219.041 3.5625 214.922 3.5625 213.549 3.63672C212.213 3.71094 211.062 4.00781 210.061 4.97266C209.096 5.9375 208.799 7.125 208.725 8.46094C208.65 9.83398 208.65 13.9531 208.725 15.3262C208.799 16.6621 209.096 17.8125 210.061 18.8145C211.062 19.7793 212.213 20.0762 213.549 20.1504C214.922 20.2246 219.041 20.2246 220.414 20.1504C221.75 20.0762 222.938 19.7793 223.902 18.8145C224.867 17.8125 225.164 16.6621 225.238 15.3262C225.312 13.9531 225.312 9.83398 225.238 8.46094ZM223.457 16.7734C223.197 17.5156 222.604 18.0723 221.898 18.3691C220.785 18.8145 218.188 18.7031 217 18.7031C215.775 18.7031 213.178 18.8145 212.102 18.3691C211.359 18.0723 210.803 17.5156 210.506 16.7734C210.061 15.6973 210.172 13.0996 210.172 11.875C210.172 10.6875 210.061 8.08984 210.506 6.97656C210.803 6.27148 211.359 5.71484 212.102 5.41797C213.178 4.97266 215.775 5.08398 217 5.08398C218.188 5.08398 220.785 4.97266 221.898 5.41797C222.604 5.67773 223.16 6.27148 223.457 6.97656C223.902 8.08984 223.791 10.6875 223.791 11.875C223.791 13.0996 223.902 15.6973 223.457 16.7734Z" fill="#292F36" />
                                </svg>

                            </Box>

                        </Box>
                    </Box>
                    <Box sx={{ mx: "1rem" }} >
                        <form>

                            <Box sx={{ display: "flex", gap: { xs: "1rem", sm: "8rem" }, flexDirection: { xs: "column", sm: "row" }, flex: 1, justifyContent: "center" }}>
                                <FormControl sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", }}>
                                    <Input id="my-input" name="name" onChange={handleChange} value={form.name} aria-describedby="my-helper-text" placeholder='Name' inputProps={{
                                        style: {
                                            height: "2rem", fontSize: "1.3rem", color: "black", fontFamily: "DM Serif Display", opacity: 0.8
                                        },
                                    }} sx={{ maxWidth: "100%" }} required />
                                </FormControl>
                                <FormControl sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", }}>
                                    <Input id="my-input" name="email" onChange={handleChange} value={form.email} aria-describedby="my-helper-text" placeholder='Email' inputProps={{
                                        style: {
                                            height: "2rem", fontSize: "1.3rem", color: "black", fontFamily: "DM Serif Display", opacity: 0.8
                                        },
                                    }} sx={{ maxWidth: "100%" }} required />
                                </FormControl>
                            </Box>

                            <Box sx={{ display: "flex", gap: { xs: "1rem", sm: "8rem" }, flexDirection: { xs: "column", sm: "row" }, flex: 1, justifyContent: "center", mt: "1rem" }}>
                                <FormControl sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", }}>
                                    <Input id="my-input" name="website" onChange={handleChange} value={form.website} aria-describedby="my-helper-text" placeholder='Website' inputProps={{
                                        style: {
                                            height: "2rem", fontSize: "1.3rem", color: "black", fontFamily: "DM Serif Display", opacity: 0.8
                                        },
                                    }} sx={{ maxWidth: "100%" }} required />
                                </FormControl>
                                <FormControl sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", }}>
                                    <Input id="my-input" name="phone" onChange={handleChange} value={form.phone} aria-describedby="my-helper-text" placeholder='Phone' inputProps={{
                                        style: {
                                            height: "2rem", fontSize: "1.3rem", color: "black", fontFamily: "DM Serif Display", opacity: 0.8
                                        },
                                    }} sx={{ maxWidth: "100%" }} required />
                                </FormControl>
                            </Box>
                            <FormControl sx={{ display: "flex", flexDirection: "column", gap: "1.3rem", mt: "1rem" }}>
                                <textarea className="text" name="message" onChange={handleChange} value={form.message} placeholder="write your message" col="60" row="50" style={{ maxWidth: { xs: "50%", sm: "60%" }, height: "10rem", fontSize: "1.3rem" }}></textarea>

                                <Button onClick={handleSubmit} sx={{ mb: { xs: "2rem", sm: "2rem", md: 0, }, bgcolor: "primary.main", width: "10rem", borderRadius: "20px" }} variant="contained">
                                    <Typography sx={{ color: "white", textTransform: "none", mr: "0.5rem", fontFamily: "Jost" }} variant='h6'> Send Now</Typography>
                                    <img src={vector} alt='vector' />
                                </Button>


                            </FormControl>
                        </form>
                    </Box>

                </Box>

            </Box >
            <Box component={motion.div}
                initial={initial}
                whileInView={whileInView} sx={{ display: "flex", justifyContent: "center", p: "1.3rem", mx: "auto", position: "relative", maxWidth: "100%", mb: "2rem" }}>
                <img src={photo} style={{ width: "50rem", maxWidth: "100%", borderRadius: "28px" }} />



            </Box>
        </>
    )
}

export default Contact
