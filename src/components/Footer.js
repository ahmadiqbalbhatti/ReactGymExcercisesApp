import {Box, Stack, Typography} from "@mui/material";

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
    return (
        <Box mt={'40px'} bgcolor={"#FFF3F4"}>
            <Stack gap={"40px"} alignItems={'center'} px={'40px'} pt={'24px'}>
                <img src={Logo}/>
                <Typography variant={'h5'} pb={'40px'} mt={'20px'}>
                    All &copy; Copyrights are reserved by <a target={'_blank'}
                                                             style={{textDecoration: 'none', color: '#FF2625',}}
                                                             href={"https://ahmadiqbalbhatti.com"}>Ahmad Iqbal Bhatti
                </a>
                </Typography>
            </Stack>
        </Box>
    );
}

export default Footer;
