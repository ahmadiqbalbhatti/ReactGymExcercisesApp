import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
    return (
        <Box
            sx={{mt: {lg: '100px', xs: '0'}}}
        >
            <Box py={'3.5rem'}>
                <Typography variant={'h3'} mb={'2rem'}>
                    Exercises that target the same muscle group.
                </Typography>
                <Stack direction={'row'} sx={{p: '2', position: 'relative'}}>
                    {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/>}
                </Stack>
            </Box>


            <Box py={"3.5rem"}>
                <Typography variant={'h3'} mb={'2rem'}>
                    Exercises that use the same equipment.
                </Typography>
                <Stack direction={'row'} sx={{p: '2', position: 'relative'}}>
                    {targetMuscleExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}

                </Stack>
            </Box>
        </Box>
    );
};

export default SimilarExercises;
