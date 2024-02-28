
import db from '../../utils/db';
import sgMail from '@sendgrid/mail'
import User from '../../models/User';
import ramdomstring from 'randomstring'
import jwt from 'jsonwebtoken'


const { SG_API_KEY, FROM_EMAIL } = process.env

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
    const { email } = req.body
    await db.connect();
    const userData = await User.findOne({ email: email })
    const ramdom = ramdomstring.generate(7);
    userData.token = await User.updateOne({ email: email }, { $set: { token: ramdom } });

    if (userData) {

        if (userData.isAdmin === true) {
            res.status(422).send("Incorrect Email, Please Register");
        } else {

            const secret = process.env.JWT_SECRET + userData.password
            const payload = { email: userData.email, id: userData._id }
            const token = (secret, { expiresIn: '5m' })
            const link = `http://localhost:3000/api/reset/${userData._id}`

            const msg = {
                to: { email },
                from: FROM_EMAIL,
                subject: 'Amazon password assistance',
                html: ` 
                
                <td width="250" >
            <img src="https://ci3.googleusercontent.com/proxy/pv_4JFo0doMGxloBsubjlzv6PeHAOBUFHMWM3caaLKhvI290uvuXLkQhXFe_SN-TXzMQb4hgodAPI0GRpZ_aQTL-97tTS0D1g1iPXMGMSY15y1IrLwZI3KeunR5ecD8=s0-d-e1-ft#https://m.media-amazon.com/images/G/01/x-locale/cs/te/logo._CB485949097_.png" /> </td>
               <p>To authenticate, please use the following One Time Password (OTP):</p>
                 <h1><strong>${ramdom}</strong></h1>
                 <p>Don't share this OTP with anyone. Our customer service team will never ask you for your password, OTP, credit card, or banking info.</p>
                 <p>We hope to see you again soon.</p>
                        <p><strong>Email:</strong>${email}</p>
                      `
            }
            await sgMail.send(msg);

            res.status(200).json({ success: true });


            /*   const ramdomString=ramdomstring.generate();
              const updateData = await User.updateOne({email:email},{$set:{token:ramdomString}});
              sendResetPassword(userData.name,userData.email,ramdomstring);
              res.render('reset',{message:'Email does not exist , please register'}) */
        }

    } else {
        res.status(422).send("Email does not exist , please register")
        console.log(res)
    }
}
