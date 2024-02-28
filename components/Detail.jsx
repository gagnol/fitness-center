import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/gato15.png';
import TargetImage from '../assets/gato16.png';
import EquipmentImage from '../assets/gato1.png';
import Image from 'next/image';
import NextLink from 'next/link'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
  <>
    <NextLink href="/" passHref>
    <Typography variant={'h6'} sx={{cursor:'pointer'}} mr={10}>← Back </Typography>
  </NextLink>
  
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
           
       <Image src={gifUrl} alt={name} loading="lazy" className="detail-image" width={500} height={500} />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#ff5421">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
           <Button sx={{ background: '#FF5421',  width: '100px', height: '100px' }}>
              <Image src={item.icon} alt={bodyPart}  width={200} height={200} />
            </Button> 
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
    </>
  );
};

export default Detail;
