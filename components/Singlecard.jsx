import * as React from 'react';
import { Badge, CardActionArea, CssBaseline, CardActions,CardContent,CardMedia,Typography, styled } from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';


export default function SingleCard({product,addToCartHandler }) {
  function truncate (string,n){
    return string?.length > n ? string.substr(0, n - 1) : string;
  }

  return (
    <>
    <CssBaseline/>
   
    <StyledCard sx={{ maxWidth: 345 }}>
     <NextLink href={`/product/${product.slug}`} passHref> 
    <CardActionArea>
      <Image
        width={200}
        height={240}
        src={product.image}
        alt={product.name}
         />
     </CardActionArea>
       </NextLink> 
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          {truncate(product.name,15)}

        </Typography>
        <Typography  variant="body2" color="#efeb4c">
          {truncate(product.description,15)}
        </Typography>
        
        <Typography >
         equipment: {product.brand}
        </Typography>
        <Typography >
         Muscle: {product.category}
        </Typography>
        
      </CardContent>
      <CardActions sx={{gap:'5px'}}>
                  {
                        product.countInStock > 0
                        ? 
                        <>
                        <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                        variant="dot"
                      > 
                      
                      </StyledBadge>
                      <button className='button' sx={{boxShadow:'2px 2px 5px #BABECC'}}
                         onClick={() => addToCartHandler(product)}> Add </button>
                        </>
                       : <Typography variant="h6" color="red"> Not Available</Typography>
                    }
     
      </CardActions>
    </StyledCard>
    </>
  );
}


const StyledCard = styled("div")(({ theme }) => ({
  width: '280px',
  height: 'auto',
  padding: '40px',
  borderRadius: '8px',
  boxShadow: '2px 2px 5px #BABECC,-5px -5px 10px #ffffff73'
}));



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));