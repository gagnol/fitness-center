
import React, { useContext, useState } from "react";
import dynamic from "next/dynamic";
import { Input } from "@mui/material";
import Image from "next/image";
import toast from "react-hot-toast";
import NextLink from 'next/link'
import { useRouter } from "next/router";


function Forgot() {

     
    const [values, setValues] = useState({ email: "" })
    const router = useRouter();
    
    const { email } = values
    const handleChange = e => setValues({ ...values, [e.target.name]: e.target.value });
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await fetch('http://localhost:3000/api/mailer', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            });
            router.push('/validation');
            e.target.reset();

        } catch (err) { toast.error(  err.response,{ duration: 4000, position: "top-center" }); }

    }

    return (
        <>
            <div className="login">
                <NextLink href='/' passHref>
                    <a>
                        <Image height={50} width={100} className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
                    </a>
                </NextLink>
                    <div className="login_container">
                    <h1>Password assistance</h1>
                    <div className="a-signin">
                    Enter the email address or mobile phone number associated with your Amazon account.&nbsp;
                    </div>
                    <form onSubmit={handleSubmit}>
                        <h5>Email</h5>
                    
                                <input
                                    name='email'
                                    values={email}
                                    onChange={handleChange}
                                    required
                                    autoFocus={true}
                                    disableUnderline={true}
                                    margin='none'
                                    fullWidth
                                    className='a-input' 
                                    id="email" 
                                    type= 'email'
                                />
                    
                        <br /><br />
                     
            
              <button type="submit" className="login_signInButton">Continue</button>
            
            

                        <br />

                        <h5>Has your email or mobile number changed?</h5>
                        <div className="a-signin">  If you no longer use the email address associated with your Amazon account, you may contact&nbsp;
                            <a >Customer Services </a> for help restoring access to your account.
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default dynamic(() => Promise.resolve(Forgot), { ssr: false });