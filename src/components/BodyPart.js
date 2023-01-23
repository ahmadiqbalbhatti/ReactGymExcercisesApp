import React from 'react';
import {Stack, Typography} from "@mui/material";

import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, bodyPart, setBodyPart}) => {
    return (
        <Stack
            type={'button'}
            alignItems={'center'}
            justifyContent={'center'}
            className={'bodyPart-card'}
            sx={{
                borderTop: bodyPart === item ? '4px solid #FF2625' : '',
                backgroundColor: "#FFF",
                borderBottomLeftRadius: '1.25rem',
                width: "270px",
                height: "280px",
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});

            }}
        >
            <img src={Icon} alt="Dumbbell" style={{width: '2.5rem', height: '2.5rem'}}/>
            <Typography fontSize={'1.5rem'} fontWeight={'bold'} textTransform={'capitalize'}>{item}</Typography>
        </Stack>
    );
};

export default BodyPart;
