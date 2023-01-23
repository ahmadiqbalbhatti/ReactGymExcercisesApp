import {Box} from "@mui/material";
import SearchExercises from "../components/SeachExercises";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import {useState} from "react";

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <Box>
            <HeroBanner/>
            <SearchExercises setExercises={setExercises}
                             bodyPart={bodyPart}
                             setBodyPart={setBodyPart}/>
            <Exercises setExercises={setExercises}
                       bodyPart={bodyPart}
                       exercises={exercises}
            />
        </Box>
    );
}

export default Home;
