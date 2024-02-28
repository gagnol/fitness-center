import nc from 'next-connect';
import Product from '../../../models/Product';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const featuredProductsDocs = await Product.find({ isFeature: "true" }, "-reviews")
  .lean()
  .limit(6);
  await db.disconnect();
  res.send(featuredProductsDocs);
});

export default handler;
