import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import Image from 'next/image'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StoreIcon from '@mui/icons-material/Store';
import gato50 from "../assets/gato50.png";
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import NextLink from 'next/link'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="static" width={300}>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
        Contact Info  
        </Typography>
        <List >
            <ListItem disablePadding><ListItemIcon sx={{color:"#cf441f"}}>
                  <LocalPhoneIcon/></ListItemIcon><ListItemText primary="123 - 555 - 55555" secondary="GYM"/>
          </ListItem>
           <ListItem disablePadding>
                 <ListItemIcon sx={{color:"#cf441f"}}><LocalPhoneIcon /></ListItemIcon >
                 <ListItemText  primary="123 - 555 - 55551"  secondary="Office"/>
           </ListItem>
           <ListItem>
               <Typography variant="h5">Open</Typography>
           </ListItem>
           <Divider color="#cf441f"/>
           <ListItem>
           <ListItemIcon>
           <StoreIcon/>
           </ListItemIcon>
           <ListItemText  primary="Monday - Friday"  secondary=" 10 AM - 2 AM"/>
           </ListItem>
           <ListItem>
           <ListItemIcon>
           <StoreIcon />
           </ListItemIcon>
           <ListItemText  primary="Saturday - Sunday"  secondary=" 11 AM - 3 AM"/>
           </ListItem>
        </List>
       
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
        Personal Trainers  
        </Typography>
             
          <Tooltip   title="Hello, we are Gina and Marcus your personal trainers....join us Now !!...." placement="top-start" >
            <Button>
            <Image
              src="https://res.cloudinary.com/dps8xubee/image/upload/v1660825784/winnes/kqjmze4rxpo4jrddblix.png"
              alt="" width={200} height={200}
            />
            </Button>
            </Tooltip>
       
          
       
       
{/*  online                     */}


        
      <Typography variant="h5" fontWeight={100} mt={10} mb={2}>
        Online Classes  
        </Typography>
        <Divider  color="#cf441f"/>
        <ListItemText primary="Train at Home" secondary="No more excusas"/>
        <ImageList sx={{display:'block'}}>
          <ImageListItem>
          <Tooltip   title="Hello,I am Laura your Online personal trainer....join me Now !!...." placement="top-start" >
            <Button>
            <Image
              src="https://res.cloudinary.com/dps8xubee/image/upload/v1661343237/winnes/qbqxqeomue3uytpllb66.png"
              alt="" width={150} height={250}
            />
            </Button>
            </Tooltip>
          </ImageListItem>
          <ImageListItem>
          <NextLink href='../online' passHref >
            <button width={200} className="button">Join Now  </button>
            </NextLink>
          </ImageListItem>
       
        </ImageList>
        {/* online  */}

        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://res.cloudinary.com/dps8xubee/image/upload/v1660329201/winnes/tmdwbyf0keaqh9lxht1t.webp"
          />
          <Avatar
            alt="Travis Howard"
            src="https://res.cloudinary.com/dps8xubee/image/upload/v1660328318/winnes/ntdw5kcukm9xahzyllwk.webp"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://res.cloudinary.com/dps8xubee/image/upload/v1660329206/winnes/vwnawt31a55ejkutmr1w.webp"
          />
          <Avatar/> <Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/>

        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dps8xubee/image/upload/v1660329201/winnes/tmdwbyf0keaqh9lxht1t.webp" />
        </ListItemAvatar>
        <ListItemText
          primary="Someone go Pilates today?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in the gym this afternon…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://res.cloudinary.com/dps8xubee/image/upload/v1660328318/winnes/ntdw5kcukm9xahzyllwk.webp" />
        </ListItemAvatar>
        <ListItemText
          primary="Hard training"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — None stop training…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/dps8xubee/image/upload/v1660329206/winnes/vwnawt31a55ejkutmr1w.webp" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Zumba recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
            </ListItem>
            </List>
          

            <Typography variant="h5" mt={20}>Our Services </Typography>
            <Divider  color="#cf441f"/>
            <List>
                    
           <ListItem >
           <ListItemIcon sx={{color:"#cf441f"}}>
           <SecurityUpdateGoodIcon />
           </ListItemIcon>
           <ListItemText  primary="Body Building"  secondary=" Marcus - Monday  18 PM - 21 PM"/>
           </ListItem>
           <ListItem >
           <ListItemIcon sx={{color:"#cf441f"}}>
           <SecurityUpdateGoodIcon />
           </ListItemIcon>
           <ListItemText  primary="Cardio Training"  secondary=" Gina - Thusday   18 PM - 21PM"/>
           </ListItem>
           <ListItem >
           <ListItemIcon sx={{color:"#cf441f"}}>
           <SecurityUpdateGoodIcon />
           </ListItemIcon>
           <ListItemText  primary="Yoga"  secondary=" Jane -Tuesday 18 PM - 21 PM"/>
           </ListItem>
           <ListItem >
           <ListItemIcon sx={{color:"#cf441f"}}>
           <SecurityUpdateGoodIcon />
           </ListItemIcon>
           <ListItemText  primary="Martial Arts"  secondary=" Lee - Wenesday 18 PM - 21 PM"/>
           </ListItem>
           <ListItem >
           <ListItemIcon sx={{color:"#cf441f"}}>
           <SecurityUpdateGoodIcon />
           </ListItemIcon>
           <ListItemText  primary="Zumba"  secondary=" Ana - Friday  18 PM - 21 PM"/>
           </ListItem>



             <Box pt={25} align="center">
              <Image src={gato50} width={200} height={150} alt=""/>
                </Box>
        </List>
      
      

      </Box>
    </Box>
  );
};

export default Rightbar;
