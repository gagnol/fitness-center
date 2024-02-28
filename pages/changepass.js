import React from 'react'
import dynamic from "next/dynamic";
import { Input } from "@mui/material";
import Image from "next/image";
import toast from "react-hot-toast";
import NextLink from 'next/link'
import { useRouter } from "next/router";


export default function changepass() {
  return (
    <div className="login">
      <NextLink href='/' passHref>
        <a>
          <Image height={50} width={100} className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </a>
      </NextLink>
      <div className="login_container">
        <h1>Create new password</h1>
        <div className="a-signin">
          We'll ask for this password whenever you Sign-In.&nbsp;
        </div>
        <form >
          <h5>New password</h5>

          <Input
            name='email'

            required
            autoFocus={true}
            disableUnderline={true}
            margin='none'
            fullWidth
            className='a-input'
            id="email"
            type='email'
          />
         
           <div className="a-signin">
     
           Passwords must be at least 6 characters..&nbsp;
        </div>
          <h5>Re-enter password</h5>

          <Input
            name='email'
            required
            autoFocus={true}
            disableUnderline={true}
            margin='none'
            fullWidth
            className='a-input'
            id="email"
            type='email'
          />

          <br /><br />


          <button type="submit" className="login_signInButton">Save changes and Sign-In</button>



          <br />

          <h4>Secure password tips:</h4>
          <div className="a-signin">
            <ul>
              <li>Use at least 8 characters, a combination of numbers and letters is best.</li>
              <li>Do not use the same password you have used with us previously.</li>
              <li>Do not use dictionary words, your name, e-mail address, mobile phone number or other personal information that can be easily obtained.</li>
              <li>Do not use the same password for multiple online accounts.</li>
            </ul>

           
          </div>
        </form>
      </div>
    </div>
  )
}

