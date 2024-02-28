import {
    List,
    ListItem,
    Typography,
    TextField,
    Button,
    Link,
    Box,
  } from '@mui/material';
  import NextLink from 'next/link';
  import React, {  useContext, useEffect } from 'react';
  import axios from 'axios';
  import { useRouter } from 'next/router';
  import { Store } from '../utils/Store';
  import Cookies from 'js-cookie';
  import { Controller, useForm } from 'react-hook-form';
  import toast from "react-hot-toast";


  export default function Login() {
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();
    
    const router = useRouter();
  const { redirect } = router.query; // login?redirect=/shipping
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    

    
    const submitHandler = async ({ email, password }) => {
      
      try {
        const { data } = await axios.post('/api/users/login', {
          email,
          password,
        });
        dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', data);
      router.push(redirect || '/');
      } catch (err) {
        toast.error(
          err.response.data ? err.response.data.message : err.message,
          {  duration: 4000,
            position: "top-center", }
        );
      }
    };
    return (
      < >
          <Box sx={{ transform:"translateY(150px)",boxShadow: "2px 2px 5px #BABECC",maxWidth:"500px",marginLeft:"600px"}} >
       <form onSubmit={handleSubmit(submitHandler)} >
          <Typography component="h1" variant="h4" align="center">
            Login
          </Typography>
          <List>
            <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth={true}
                  id="email"
                  label="Email"
                  inputProps={{ type: 'email' }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === 'pattern'
                        ? 'Email is not valid'
                        : 'Email is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
            </ListItem>
            <ListItem>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth={true}
                  id="password"
                  label="Password"
                  inputProps={{ type: 'password' }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === 'minLength'
                        ? 'Password length is more than 5'
                        : 'Password is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
            </ListItem>
            <ListItem>
              <Button variant="contained" type="submit" fullWidth={true} color="primary">
                Login
              </Button>
            </ListItem>
            <ListItem>
            Do not have an account? &nbsp;
            <NextLink href={`/register?redirect=${redirect || '/'}`} passHref>
                <Link>Register</Link>
              </NextLink>
            </ListItem>
            <ListItem>
            Forgot your Password? &nbsp;
            <NextLink href={`/register?redirect=${redirect || '/'}`} passHref>
                <Link>Click Here</Link>
              </NextLink>
            </ListItem>
          </List>
        </form>
      </Box>
      </>
    );
  }