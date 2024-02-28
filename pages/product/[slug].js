/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Grid,
  Link,
  List,
  ListItem,
  Card,
  Button,
  Rating,
  Stack,
  Typography,
  TextField,
  CircularProgress,
  Box,
} from "@mui/material";
import Product from "../../models/Product";
import db from "../../utils/db";
import { getError } from '../../utils/error';
import { Store } from "../../utils/Store";
import axios from "axios";
import toast from "react-hot-toast";


export default function ProductScreen(props) {
  const { product} = props;
  const { state , dispatch } = useContext(Store);
  const { userInfo } = state;
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  if (!product) {
    return <div>Product Not Found</div>;
      }
      const addToCartHandler = async () => {
        const existItem = state.cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;

        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
          window.alert('Sorry. Product is out of stock');
          return;
        }
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
       
      };
/* **************************    R   e  v  i e  w  s ********************/


const submitHandler = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await axios.post(
      `/api/products/${product._id}/reviews`,
      {
        rating,
        comment,
      },
      {
        headers: { authorization: `Bearer ${userInfo.token}` },
      }
    );
    setLoading(false);
    toast.success('Review submitted successfully', {duration: 4000,position: "top-center"});
    fetchReviews();
  } catch (err) {
    setLoading(false);
    toast.error(getError(err),  {duration: 4000,position: "top-center"});
  }
};

const fetchReviews = async () => {
  try {
    const {data} = await axios.get(`/api/products/${product._id}/reviews`);
    setReviews(data);
  } catch (err) {
    console.log(err)
    toast.error(getError(err),  {duration: 4000,position: "top-center"});
  }
};




  return (
    <Box sx={{transform:"translateY(150px)",paddingLeft:'15rem'}}>
      <Stack >
        <NextLink href="/" passHref>
          <Typography variant={'h6'} sx={{cursor:'pointer'}}>← Back to products</Typography>
        </NextLink>
      </Stack>
      <Stack >
              <h1>
                {" "}
                <strong> {product.name}</strong>{" "}
              </h1>
            </Stack>
      <Grid container spacing={1} mt={0}>
        <Grid item md={3} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={540}
            height={540}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List sx={{ whiteSpace: "pre" }}>
          
            <ListItem>
              <strong>Category: </strong>
              {product.category}
            </ListItem>
            <ListItem>
              <strong>Brand: </strong> {product.brand}
            </ListItem>
            <ListItem>
              <Rating value={product.rating} readOnly></Rating>
              <Link href="#reviews">( {product.numReviews} reviews)</Link>
            </ListItem>
            <ListItem>
              {" "}
              <strong>Description: </strong> {product.description}
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card sx={{ boxShadow: "5px 5px 8px #BABECC" }}>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    Price
                  </Grid>
                  <Grid item xs={6}>
                    ${product.price}
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    Status
                  </Grid>
                  <Grid item xs={6}>
                    {product.countInStock > 0 ? "In stock" : "Unavailable"}
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button 
                fullWidth 
                variant="contained" 
                color="primary"
                onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
      {/*   CUSTOMER REVIEWS */}
      <List>
        <ListItem>
          <Typography name="reviews" id="reviews" variant="h4">
            Customer Reviews
          </Typography>
        </ListItem>
        {reviews.length === 0 && <ListItem>No review</ListItem>}
        {reviews.map((review) => (
          <ListItem key={review._id}>
            <Grid container>
              <Grid item >
                <Typography>
                  <strong>{review.name}</strong>
                </Typography>
                <Typography>{review.createdAt.substring(0, 10)}</Typography>
              </Grid>
              <Grid item>
                <Rating value={review.rating} readOnly></Rating>
                <Typography>{review.comment}</Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
        <ListItem>
          {userInfo ? (
            <form onSubmit={submitHandler} >
              <List>
                <ListItem>
                  <Typography variant="h4">Leave your review</Typography>
                </ListItem>
                <ListItem>
                  <TextField
                    multiline
                    variant="outlined"
                    fullWidth
                    name="review"
                    label="Enter comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>

                  {loading && <CircularProgress></CircularProgress>}
                </ListItem>
              </List>
            </form>
          ) : (
            <Typography variant="h5">
              Please{' '}
              <Link href={`/login?redirect=/product/${product.slug}`}>
                login
              </Link>{' '}
              to write a review
            </Typography>
          )}
        </ListItem>
      </List>
     
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }, "-reviews").lean();
  await db.disconnect();


  return {
    props: {
      product: db.convertDocToObj(product),

    },
  };
}
