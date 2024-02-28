
import dynamic from "next/dynamic";
import NextLink from 'next/link';
import React, {  useState } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import toast from "react-hot-toast";
import Image from 'next/image';
import { Input } from '@mui/material';
import getError from '../utils/error'


function Validation() {
  const router = useRouter();
  const [values, setValues] = useState({ token: "" })

  const { token } = values
  const handleChange = e => setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await fetch('http://localhost:3000/api/reset', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      router.push('/changepass');
      
      
    } catch (err) {  
      
                  
      toast.error( err.message,{duration: 4000,position: "top-center",}
);

   
       
    }

  }

  return (
    <div className="login">
      <NextLink href='/' passHref>
        <a>
          <Image height={50} width={100} className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </a>
      </NextLink>
      <div className="login_container">
        <h1>Verification required</h1>
        <div className="a-signin">
          To continue, complete this verification step. We have sent a One Time Password (OTP) to the email . Please enter it below.&nbsp;
        </div>
        <form onSubmit={handleSubmit}>
          <h5>Enter OTP</h5>

          <input
            required
            fullWidth
            className='a-input'
             name="token"
            id="token"
            values={token}
            onChange={handleChange}
            disableUnderline={true}
            
          />

          <br /><br />
          <button type="submit" className="login_signInButton">Continue</button>

          <div className="a-signin">
            <a >Resend OTP </a>
          </div>
          <br />
          <div className="a-label">
            <select className='a-select'>
              <option value="aps">I need more help</option>

              <option>
               
                  If you have already tried to reset your password,
                  but haven t received an email from Amazon, check your Junk or Spam folder.
                  If you can not access your email, try resetting
                  that first through your email provider.
                  If you ve recently updated your password,
                  your old password could still be saved in your browser. Try clearing your browser history and re-typing your password.
                  If you need more password help, call us at 1-800-383-9484 or, if outside the U.S. or Canada, 1-206-577-1364 (International, charges may apply).
               
              </option>


            </select>
          </div>

        </form>
      </div>
    </div>
  )
}
export default dynamic(() => Promise.resolve(Validation), { ssr: false });