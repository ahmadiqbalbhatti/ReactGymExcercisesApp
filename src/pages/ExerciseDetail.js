import {Box} from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExercieseVideos";
import SimilarExercises from "../components/SimilarExercises";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {exerciseOptions, fetchData, youtubeOptions} from "../utils/fetchData";


const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);


    const {id} = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDBUrl = `https://exercisedb.p.rapidapi.com`;
            const youTubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;
            const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`,
                youtubeOptions);

            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equipmentExercisesData);
        }
        fetchExercisesData();
    }, [id]);


    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            {/*<ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>*/}
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
        </Box>
    );
}

export default ExerciseDetail;
