import React from 'react'
import Image from "next/image"
import Wall1 from "../assets/Wall01.webp";
import Wall2 from "../assets/Wall02.webp";
import gato15 from "../assets/gato15.png";
import gato17 from "../assets/gato17.png";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Box, List, ListItemText, Typography } from '@mui/material';


const Feature = ()=> {
  return (
    <>
    <Typography variant="h4" mb={0} align="center" >New Releases 2022 {" "}</Typography>
    <Typography variant="h5" pb={2} align="center" color="#cf441f" >- Choose Your Routine -{" "}</Typography>
    <Box align="center" sx={{display:'flex',gap:'40px'}}>
    
                   <Box>
                    <Zoom>
                   <Image src={Wall1} width={550} height={850}  alt=""/>
                   </Zoom>
                   </Box>
                   <List>
                   <ListItemText  variant="h3" fontWeight={100} mt={15}>
                        New Training Programs Availables 
                   </ListItemText >
                   <ListItemText primary="Choose Your Destiny" sx={{color:"#efeb4c",fontWeight:"500"}} secondary={<React.Fragment> <Typography sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                      >
                    Choose Your Destiny
                  </Typography>
                  {" — I'll be in the gym this afternon…"}
                  </React.Fragment>} />
                      <Image src={gato15} width={150} height={300}  alt=""/>
                      <Box sx={{transform:"translateY(-150px)"}}>
                      <Image src={gato17} width={300} height={300}  alt=""/>
                      </Box>
                  </List>
                   <Box >
                   <Zoom>
                   <Image src={Wall2} width={550} height={850}  alt=""/>
                   </Zoom>
                   </Box>
     </Box>
     </>
  )
}

export default Feature

