/* eslint-disable react-hooks/exhaustive-deps */
import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Link,
  Box
} from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import { getError } from '../utils/error';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();


  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }

  }, []);
  //captcha
  const captcha = useRef(null);
  const [verify, setVerify] = useState(false);


  const HandleCaptcha = () => {
    if (captcha.current.getValue()) {
      console.log('hey.............')
      setVerify(true)
    }
  };


  const submitHandler = async ({ name, email, password, confirmPassword }) => {

    if (password !== confirmPassword) {
      toast.error("Passwords don't match", { duration: 4000, position: "bottom-center", });
      return;
    }
    if (verify !== true) {
      toast.error("Please check captcha", { duration: 4000, position: "bottom-center", });
      return;
    }
    try {
      const { data } = await axios.post('/api/users/register', {
        name,
        email,
        password,
      });
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', data);
      router.push(redirect || '/');
    } catch (err) {
      toast.error(getError(err), { duration: 4000, position: "bottom-center", });
    }
  };
  return (
    <>
      <Box sx={{ transform:"translateY(150px)", boxShadow: "2px 2px 5px #BABECC", maxWidth: "500px", marginLeft: "600px" }} >
        <form onSubmit={handleSubmit(submitHandler)} >
          <Typography component="h1" variant="h4" align="center">
            Register
          </Typography>
          <List >
            <ListItem>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth={true}
                    id="name"
                    label="Name"
                    inputProps={{ type: 'name' }}
                    error={Boolean(errors.name)}
                    helperText={
                      errors.name
                        ? errors.name.type === 'minLength'
                          ? 'Name length is more than 1'
                          : 'Name is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
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
              <Controller
                name="confirmPassword"
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
                    id="confirmPassword"
                    label="Confirm Password"
                    inputProps={{ type: 'password' }}
                    error={Boolean(errors.confirmPassword)}
                    helperText={
                      errors.confirmPassword
                        ? errors.confirmPassword.type === 'minLength'
                          ? 'Confirm Password length is more than 5'
                          : 'Confirm  Password is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>

            <ReCAPTCHA
              align='center'
              ref={captcha}
              sitekey='6LeMRr8aAAAAAPmV1Jv8PCEpVSmDrPEsnxPqeWLI'
              onChange={HandleCaptcha} />

            <ListItem>
              <Button variant="contained" type="submit" fullWidth={true} color="primary">
                Register
              </Button>
            </ListItem>
            <ListItem>
              Already have an account? &nbsp;
              <NextLink href={`/login?redirect=${redirect || '/'}`} passHref>
                <Link>Login</Link>
              </NextLink>
            </ListItem>
          </List>
        </form>
      </Box>
    </>
  );
}