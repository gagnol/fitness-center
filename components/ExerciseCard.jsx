import React from 'react';
import  Link  from 'next/link';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <Image src={exercise.gifUrl} alt={exercise.name} loading="lazy" width={500} height={500}/>
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#cf441f', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
