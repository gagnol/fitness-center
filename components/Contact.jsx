import React, { useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import {List,ListItem,TextField,Typography,Box,Checkbox} from "@mui/material";
import Image from "next/image";
import gato from '../assets/gym4.webp';



function Contact() {
  const initialState = {
    err: "",
    success: "",
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState(initialState);
  const { success } = data;
 
  const captcha=useRef(null);
  const[verify,setVerify]=useState(false);

  const HandleCaptcha=()=>{
        setVerify(true) 
     };
  
const sendEmail = (e) => {
    e.preventDefault();
   if(verify===true){
    emailjs
      .sendForm(
        "service_zm06g9f",
        "template_lk616vr",
        e.target,
        "user_E9dO8mPutXvq8TEujiCvr"
      )
      .then((res) => {
        console.log(res);
        return setData(
          toast.success("Successfully Contact us!we will reply soon..", {duration: 4000,position: "top-center"})
         
        );
      })
      .then((res) => {
        e.target.reset();
        setVerify(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
      }else{
        toast.error('Verification missing', {duration: 4000,position: "top-center"})
      }
  };


  return (
    <section id="contact" sx={{ display: { xs: "none", sm: "block" } }}>
      <Typography variant="h4" p={5} >
        Contact Us{" "}
      </Typography>
    
      <Box 
        sx={{
          display: "flex",
          width: " 100%",
          heigth: "auto",
          flexWrap: "wrap",
          overflow: "hidden",
          alignItems: " flex-start",
          justifyContent: "center",
          boxShadow: "2px 2px 5px #BABECC",
      
        }}
      >
        <Box
          sx={{
            maxWidth: {xs:"100%" ,sm:"50%"},
            display: "flex",
            padding: "2rem 8rem 2rem 8rem",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography align="center" variant="h5">Get on touch </Typography>

          <form onSubmit={sendEmail}>
            <List>
              <ListItem >
                <TextField 
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="Name"
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                />
              </ListItem>

              <ListItem>
                <Controller
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  }}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      required
                      inputProps={{ type: "email" }}
                      error={Boolean(errors.email)}
                      helperText={
                        errors.email
                          ? errors.email.type === "pattern"
                            ? "Email is not valid"
                            : "Email is required"
                          : ""
                      }
                      {...field}
                    ></TextField>
                  )}
                ></Controller>
              </ListItem>
              <ListItem>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="subject"
                  label="Subject"
                  required
                  name="subject"
                  type="text"
                  placeholder="Subject"
                />
              </ListItem>
              <ListItem>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Leave your Message"
                  multiline
                  maxRows={4}
                  name="text-contact"
                  placeholder="Message.."
                  fullWidth
                />
              </ListItem>
              <ListItem >
        <Checkbox
         ref={captcha}
         onChange={HandleCaptcha}
          label="Accept conditions"
                        
        /> Accept term and conditions
        </ListItem>
              <ListItem >
                <button  className="button">
                  Contact
                </button>
              </ListItem>
            </List>
          </form>
        </Box>

        <Box  sx={{maxWidth: "50%",maxHeigth:"100%",display: "flex",justifyContent: "center",flexDirection: "column",
        display: { xs: "none", sm: "block" } 
          }} p={5}>
          <Typography variant="h5" mb="8px" align="center">Join Now </Typography>
          <Typography align="center" variant="h2" mt="3px">Get up to 50% off</Typography >
          <Box >
            <Image src={gato} width={500} height={500} alt=""/>
          </Box>
              </Box >
        <Box sx={{ padding: "2rem 10rem 2rem 10rem" }}>
                     Created By JsxPlanet | No copyrights reserved &reg;
          {new Date().getFullYear()}
        </Box>
      </Box>
    </section>
  );
}

export default dynamic(() => Promise.resolve(Contact), { ssr: false });

