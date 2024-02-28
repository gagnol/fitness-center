import React from 'react';
import { Typography, Box, Stack, CircularProgress } from '@mui/material';
import Image from 'next/image';


const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <CircularProgress />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="10px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#cf441f" mb="33px">
        Watch <span style={{ color: '#cf441f', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image style={{ borderRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title}  width={250} height={250}/>
            <Box>
              <Typography sx={{ fontSize: { lg: '18px', xs: '8px' } }} fontWeight={600} color="#cf441f">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#cf441f">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
