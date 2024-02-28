import React from "react";
import Image from "next/image";
import { Rating, Typography } from "@mui/material";
import styles from "../styles/ProductItem.module.css";
import NextLink from 'next/link'

export default function ProductItem({ product  }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) : string;
  }

  return (
    <div className={styles.containercards}>
      <div className={styles.card}>
        <div className={styles.cover}>
        
        <NextLink href={`/product/${product.slug}`} passHref>
          <a>
          <Image
            src={product.image}
            width={160}
            height={160}
            className={styles.img}
            alt=""
            key={product.slug}
          />
          </a>
</NextLink>
          <div className={styles.imgback}>
            <h3></h3>
          </div>
        </div>
        <div className={styles.description}>
          <h2>{truncate(product.name, 13)}</h2>
          <Typography  variant="body2" color="#efeb4c">
          {truncate(product.description,15)}
        </Typography>
          <Rating
            name="size-small"
            defaultValue={5}
            size="small"
            sx={{ color: "#dcca87" }}
          />

          
          
        </div>
      </div>
    </div>
  );
}
