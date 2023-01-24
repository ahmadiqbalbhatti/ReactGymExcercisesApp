import React from 'react';
import {Link} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";

const ExerciseCard = ({keys, exercise}) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className={'exercise-card'} key={keys}>
            <img src={exercise.gifUrl} alt={exercise.name} loading={'lazy'} key={exercise.id}/>
            <Stack direction={'row'} key={exercise.name}>
                <Button
                    key={exercise.gifUrl}
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
                    key={exercise.id}
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

            <Typography key={exercise.target} minHeight={'5rem'} fontSize={'1.5rem'} fontWeight={'bold'} ml={'21px'} color={'rgb(27,30,35)'} textTransform={'capitalize'} mt={'1rem'} pb={'0.8rem'}>
                {exercise.name}
            </Typography>
        </Link>
    );
};

export default ExerciseCard;
