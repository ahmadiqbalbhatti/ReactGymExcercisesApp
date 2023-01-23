import React from 'react';
import {Link} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";

const ExerciseCard = ({key, exercise}) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className={'exercise-card'} key={key}>
            <img src={exercise.gifUrl} alt={exercise.name} loading={'lazy'}/>
            <Stack direction={'row'}>
                <Button
                    sx={{
                        ml:'21px',
                        px:'1rem',
                        color: '#FFF',
                        backgroundColor: '#FFA9A9',
                        fontSize: '0.85rem',
                        borderRadius: '1.25rem', textTransform:'capitalize'
                    }}>
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml:'21px',
                        px:'1rem',
                        color: '#FFF',
                        backgroundColor: '#FCC757',
                        fontSize: '0.85rem',
                        borderRadius: '1.25rem', textTransform:'capitalize'
                    }}>
                    {exercise.target}
                </Button>
            </Stack>

            <Typography minHeight={'5rem'} fontSize={'1.5rem'} fontWeight={'bold'} ml={'21px'} color={'rgb(27,30,35)'} textTransform={'capitalize'} mt={'1rem'} pb={'0.8rem'}>
                {exercise.name}
            </Typography>
        </Link>
    );
};

export default ExerciseCard;
