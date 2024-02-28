import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  CssBaseline,
  Badge,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  styled,
  Avatar,
  InputLabel,
  Input,
  InputAdornment,

} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';
import toast from "react-hot-toast";
import axios from 'axios';
import { useEffect } from 'react';
import Modal from './Modal'


export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;
 


  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const [categories, setCategories] = useState([]);
  

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      toast.error("ups..", {duration: 4000,position: "top-center"})
    }
  };

  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

 
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    Cookies.remove('shippinhAddress');
    Cookies.remove('paymentMethod');
    router.push('/');
  };
  return (
    <div>
      <Head>
        <title>Fitness Center</title>
        
      </Head>
     
        <CssBaseline />
        <AppBar position="sticky" >
        <StyledToolbar>
            <Box display="flex" alignItems="center">
              <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={sidebarOpenHandler}
                
              >
                <MenuIcon />
              </IconButton>
              <NextLink href="/" passHref>
                <Link>
                  <Typography variant="h5" color="white" >Fitness Center </Typography>
                  
                </Link>
              </NextLink>
      
            </Box>
            <Drawer
              anchor="left"
              open={sidbarVisible}
              onClose={sidebarCloseHandler}
            >
              <List>
                <ListItem>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
             
                  >
                    <Typography>Exercise by category</Typography>
                    <IconButton
                      aria-label="close"
                      onClick={sidebarCloseHandler}
             
                    >
                      <CancelIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider light />
                {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <ListItem
                      button
                      component="a"
                      onClick={sidebarCloseHandler}
                    >
                      <ListItemText primary={category}></ListItemText>
                    </ListItem>
                  </NextLink>
                ))}
              </List>
            </Drawer>
                       
         <form  onSubmit={submitHandler} >
        <InputLabel htmlFor="input-with-icon-adornment">
          Search Exercises
        </InputLabel>
        <Input
                 onChange={queryChangeHandler}
          id="input-with-icon-adornment"
          endAdornment={
            <IconButton
            type="submit"
            aria-label="search"
          >
            <InputAdornment position="end">
              <SearchIcon   type="submit" sx={{cursor:"pointer",color:"#ffffff "}}  />
            </InputAdornment>
            </IconButton>
          }
        />
      </form>
          
        <Box sx={{display: "flex",alignItems: "center", gap: "10px",}}>
               <IconButton
              size="large"
              aria-label="show 2 new notifications"
              color="inherit"
            >
              <Modal/>
            </IconButton>
           
            <NextLink href="/cart" passHref>
            <IconButton size="large" aria-label="show cart" color="inherit">
              <Badge  badgeContent={cart.cartItems.length} color="error">
                <ShoppingCartCheckoutIcon />
              </Badge>
            </IconButton>
           </NextLink>

              {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                   
                  >
               <Avatar width={30} height={30}  src={userInfo.avatar}  alt=""  />
                
                    {userInfo.name}
                  </Button>
                
                                
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem
                      onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/order-history')
                      }
                    >
                      Order Hisotry
                    </MenuItem>
                    {userInfo.isAdmin && (
                      <MenuItem
                        onClick={(e) =>
                          loginMenuCloseHandler(e, '/admin/dashboard')
                        }
                      >
                        Admin Dashboard
                      </MenuItem>
                    )}
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>
                  <Button aria-haspopup="true"   >
                  <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                 />
                 </Button>
                  </Link>
                </NextLink>
              )}
          </Box>
          </StyledToolbar>
        </AppBar>
        <Box bgcolor={"#161d28"} color={"text.primary"}> {children}</Box>
 
    
    </div>
  );
}
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",

});
