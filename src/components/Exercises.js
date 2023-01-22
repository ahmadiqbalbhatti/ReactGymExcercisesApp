import React, {useState} from 'react';
import {Box, Pagination, Stack, Typography} from "@mui/material";
import ExerciseCard from "./ExerciseCard";
// import fetchData, {exerciseOptions} from "../utils/fetchData";

const Exercises = ({bodyPart, exercises, setExercises}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage - exercisesPerPage;
    const indexOfFirstExercises = indexOfLastExercise - exercisesPerPage;

    const currentExercises = exercises.slice(indexOfFirstExercises, indexOfLastExercise);
    console.log(currentExercises);

    const onPageChange = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({top: 1800,  behavior: 'smooth'})
    }

    // console.log(exercises);
    return (
        <Box id={'exercises'}
             sx={{
                 mt: {lg: '110px',}
             }}
             mt={'50px'}
             p={'20px'}

        >
            <Typography variant={'h3'} mb={'46px'} fontFamily={'Josefin Sans'}>
                Showing Results
            </Typography>

            <Stack
                direction={'row'}
                sx={{
                    gap: {lg: '110px', xs: '50px'}
                }}
                flexWrap={'wrap'}
                justifyContent={'center'}
            >
                {
                    currentExercises.map((exercise, index) => (
                        // <p key={exercise.id}>{exercise.name}</
                        <ExerciseCard key={index} exercise={exercise}/>
                    ))
                }

            </Stack>

            <Stack
                mt={'100px'}
                alignItems={'center'}>
                {exercises.length > 9 && (
                    <Pagination
                        color={"standard"}
                        shape={'circular'}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={onPageChange}
                        size={'large'}
                    />
                )}
            </Stack>

        </Box>
    );
};

export default Exercises;
