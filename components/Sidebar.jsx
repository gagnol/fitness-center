

import AccountBox from "@mui/icons-material/AccountBox";
import Group from "@mui/icons-material/Group";
import Home from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import Article from "@mui/icons-material/Article";
import Storefront from "@mui/icons-material/Storefront";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import toast from "react-hot-toast";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const Sidebar = () => {

  const [features, setFeatures] = useState([]);
  

  const fetchFeatures = async () => {
    try {
      const { data } = await axios.get(`/api/products/features`);
      setFeatures(data);
    } catch (err) {
      toast.error("ups..", {duration: 4000,position: "top-center"})
    }
  };
  useEffect(() => {
    fetchFeatures();
  }, []);


  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="static">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
         
        </List>
        
     
        <Typography variant="h5" fontWeight={100} mt={2} mb={2}>
        Follow Us  
        </Typography>
        <Divider color="#cf441f"/>
        <List >
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon sx={{color:"#cf441f"}}>
                <FacebookIcon  />
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon sx={{color:"#cf441f"}}>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon  sx={{color:"#cf441f"}}>
                <TwitterIcon/>
              </ListItemIcon>
              <ListItemText primary="Twiter" />
            </ListItemButton>
          </ListItem>
        
          </List>
          <List>
          <ListItem mt={30} mb={5}>
               <Typography variant="h5">Newest Exercises</Typography>
           <Divider color="#cf441f"/>
           </ListItem>
           
          <StyledGrid >
                {features.map((product) => (
                       <ProductItem key={product.slug} product={product} />
                         ))}
          </StyledGrid>

        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;


const StyledGrid = styled("div")(({ theme }) => ({
  padding: "20px",
  borderRadius: "8px",
 /*  boxShadow: "2px 2px 5px #babecc, -5px -5px 10px #ffffff73", */
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
  justifyContent:"center",
  margin: "10px 0",
  alignContent:"center"
}));