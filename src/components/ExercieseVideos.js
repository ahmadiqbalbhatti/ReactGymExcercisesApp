import React from 'react';
import {Box, Stack, Typography} from "@mui/material";

const ExerciseVideos = ({name, exerciseVideos}) => {

    // if (exerciseVideos.length ) return "Loading ..."
    return (
        <Box sx={{marginTop: {lg: '5rem', xs: '1.5rem'}}} p={"1.5rem"}>
            <Typography variant={'h3'}>
                Watch <span style={{color: '#FF2625', textTransform: 'capitalize'}}>{`${name} `}</span>exercise videos
            </Typography>
            <Stack justifyContent={'flex-start'} flexWrap={'wrap'} alignItems={'center'}
                   sx={{
                       flexDirection: {lg: 'row'},
                       gap: {lg: '110px', xs: '0px'}
                   }}>

                {
                    exerciseVideos?.slice(0, 3).map((item, index) => (
                        <a
                            key={index}
                            className={'exercise-video'}
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target={'_blank'}
                            rel={'noreferrer'}
                        >
                            <img src={item.thumbnails[0].url} alt={item.video.title}/>

                        </a>
                    ))
                }

            </Stack>
        </Box>
    );
};

export default ExerciseVideos;
