import User from '../../models/User';
import db from '../../utils/db';

export default async function handler(req, res) {
  await db.connect();
  const userToken = await User.findOne({ token: req.body.token })
  if (!userToken) {
    res.status(401).send({ message: 'Invalid Token' });  
    } else {
      res.status(200).json({ success: true });
      console.log(res) 
};
}

