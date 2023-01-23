import {useEffect, useState} from "react";

import {Box, Button, Stack, TextField, Typography} from "@mui/material";

import {exerciseOptions, fetchData} from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        }
        fetchExercisesData();
    }, []);


    const searchHandler = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises = exercisesData.filter((exercise) => (
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            ));
            setSearch('');
            setExercises(searchedExercises);
        }
    }
    return (
        <Stack alignItems={'center'} mt={'2.375rem'} justifyContent={'center'} p={'1.5rem'}>
            <Stack>
                <Typography textAlign={'center'} fontWeight={'bold'} fontFamily={'Josefin Sans'} fontSize={'3rem'}>
                    Awesome Exercises You <br/>
                </Typography>
                <Typography textAlign={'center'} color={"#FF2625"} fontWeight={'bold'} fontFamily={'Josefin Sans'}
                            fontSize={'3rem'}>
                    Should Know
                </Typography>
            </Stack>
            <Box position={'relative'} mb={'5rem'} mt={"2rem"}>
                <TextField
                    height={'5rem'}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder={'Search Exercises'}
                    type={"text"}
                    sx={{
                        input: {
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '0.75rem',
                        },
                        width: {
                            lg: '900px',
                            xs: '350px'
                        },
                        justifyContent: 'space-around',
                        backgroundColor: '#FFF'
                    }}
                />
                <Button className={'search-btn'}
                        sx={{
                            backgroundColor: "#FF2625",
                            color: '#FFF',
                            textTransform: 'none',
                            width: {lg: "175px", xs: "80px"},
                            position: 'absolute',
                            right: 0, // Always try to use right 0 or left 0 with the property position absolute
                            height: '56px',
                        }}
                        onClick={searchHandler}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{position: 'relative', width: '100%', p: '2.5rem'}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>


        </Stack>
    );

}

export default SearchExercises;
