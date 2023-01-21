import React from 'react';
import {Box, Button, Typography} from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: {lg: '212px', xs: '70px'},
            ml: {sm: '50px'},
        }} position={'relative'} p={"26px"}>
            <Typography color={"#FF2625"} fontWeight={'600'} fontSize={"26px"}>
                Fitness Club
            </Typography>
            <Typography fontWeight={'700'} fontFamily={'Josefin Sans'} sx={{
                fontSize: '4rem', lineHeight: '1'
            }}>
                Sweat, Smile <br/> and Repeat
            </Typography>
            <Typography fontSize={'1.375rem'} lineHeight={'2rem'} mb={'1.375rem'}>
                Check out the most effective exercises
            </Typography>
            <Button variant={'contained'} color={'error'} href={'#exercises'} sx={{px: '1.5rem', py: '.75rem'}}>Explore
                Exercises</Button>
            <Typography
                fontWeight={600}
                color={'#FF2627'}
                sx={{
                    opacity: 0.05,
                    display: {lg: 'block', xs: 'none'}
                }}
                lineHeight={'1.25'}
                zIndex={'5'}
                fontSize={'15rem'}>
                Exercises
            </Typography>
            <img src={HeroBannerImage} className={'hero-banner-img'} alt={'banner image'}/>
        </Box>
    );
};

export default HeroBanner;
