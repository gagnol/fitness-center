import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import Check from '../components/check';
import {Box,Button,FormControl,FormControlLabel,List,ListItem,Radio,RadioGroup,Typography,} from '@mui/material';
import Image from 'next/image';
import Paypal from '../assets/pay2.webp'
import toast from 'react-hot-toast';

export default function Payment() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  
  const {
    cart: { shippingAddress },
  } = state;

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push('/shipping');
    } else {
      setPaymentMethod(Cookies.get('paymentMethod') || '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const submitHandler = (e) => {

    e.preventDefault();
    if (!paymentMethod) {
      toast.error('Payment method is required', {duration: 4000,position: "top-center"});
    } else {
      dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod });
      Cookies.set('paymentMethod', paymentMethod);
      router.push('/placeorder');
    }
  };
  return (
    <Box sx={{transform:"translateY(150px)", boxShadow: "2px 2px 5px #BABECC",maxWidth:"500px",marginLeft:"600px"}} >
      <Check activeStep={2}></Check>
      <form  onSubmit={submitHandler}>
        <Typography component="h1" variant="h4">
          Payment Method
        </Typography>
    
        <List>
          <ListItem>
            <FormControl component="fieldset">
              <Image src={Paypal} width={600} heigth={300} alt="pay"/>
              <RadioGroup
                aria-label="Payment Method"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  label="PayPal"
                  value="PayPal"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Stripe"
                  value="Stripe"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Cash"
                  value="Cash"
                  control={<Radio />}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
            <Button fullwidth="false" type="submit" 
            variant="contained" color="primary"  
            >
              Continue
            </Button>
          </ListItem>
          <ListItem>
            <Button
              fullwidth="false"
              type="button"
              variant="contained"
              onClick={() => router.push('/shipping')}
            >
              Back
            </Button>
          </ListItem>
        </List>
      </form>
    </Box>
  );
}