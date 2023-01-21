import {Box} from "@mui/material";
import SearchExercises from "../components/SeachExercises";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
      <Box>
        <HeroBanner/>
        <SearchExercises/>
        <Exercises/>
      </Box>
  );
}

export default Home;
