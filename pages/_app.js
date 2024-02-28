
import React from "react";
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import { Toaster } from 'react-hot-toast';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette: {
    mode: 'dark',    
  },
});
function MyApp({ Component, pageProps }) {
  return (

    <ThemeProvider theme={theme}  >
      <CssBaseline bgcolor={"background.default"} color={"text.primary"}/>
      <StoreProvider>
        <Navbar>
          <Toaster />
          <PayPalScriptProvider deferLoading={true}>
               <Component {...pageProps}/>
          </PayPalScriptProvider>
        </Navbar>
      </StoreProvider>
      </ThemeProvider>

  );
}

export default MyApp
