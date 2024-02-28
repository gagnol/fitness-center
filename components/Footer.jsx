import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Divider, styled, Typography } from '@mui/material';
import { Box } from '@mui/material';
import NextLink from 'next/link'

const Footer = () => (
    <StyledFooter  sx={{ display: { xs: "block", sm: "flex" } }}>
      <StyledDiv >
        <Typography variant="h5">Find Us</Typography>
        <Divider color="#cf441f"/>
        <Typography >Av. Libertador 5800<br/> Buenos Aires | Argentina</Typography>
        <Typography >+11 555-555-55555</Typography>
        <Typography >+11 555-555-55551</Typography>
      </StyledDiv>
      <StyledDiv>
        <Typography variant="h3" > Fitness Center </Typography>
        <br/><br/><br/>
        <Box sx={{color:"#cf441f"}} >
          <FacebookIcon />
          <TwitterIcon />
        <NextLink href='https://instagram.com/jsxplanet' passHref>
          <InstagramIcon name='Instagram'   />
        </NextLink>
        </Box>
      </StyledDiv>
      <StyledDiv >
        <Typography variant="h5">Open</Typography>
        <Divider color="#cf441f" />
        <Typography > Monday - Friday :</Typography>
        <Typography >10:00 am - 2:00 am</Typography>
        <Typography >Saturday-Sunday:</Typography>
        <Typography >10:00 am - 3:00 am</Typography>
      </StyledDiv>
  </StyledFooter>
);

export default Footer;

const StyledFooter = styled("div")(({ theme }) => ({
  width: "100%",
  position:"relative",
  zIndex: "1",
  display: "flex",
  justifyContent: "flex-center",
  alignItems:"center",
  flexDirection:"row" ,
  flexWrap:"wrap",
  padding: "1rem 3rem",

}));

const StyledDiv = styled("div")(({ theme }) => ({
flexBasis:1,
flexGrow:999,
margin: "1rem",
textAlign: "center",

}));