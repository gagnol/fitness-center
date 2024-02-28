import React from 'react'
import gato30 from '../assets/gato30.webp';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
const Contest = () => {
  return (
    
    <Box >
        <Typography variant="h4" mb={0} align="center" >Choose Your Plan {" "}</Typography>
              <Typography variant="h5" pb={2} align="center" color="#cf441f" >- Get your perfect plan -{" "}</Typography>     
                     <Image src={gato30} width={1100} height={800} alt="" />

    </Box>

  )
}

export default Contest
