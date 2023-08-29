"use client";

import Image from "next/image";
import React, { useState } from "react";
import classes from "./style.module.scss";

const Content = () => {
  const [quantity, setQuantity] = useState(1);
  const handleMin = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className={classes.content}>
      <div className={classes.imageProduct}>
        <div className={classes.thumbnail}>
          <Image
            src="/Assets/images/image-product-1.jpg"
            width={400}
            height={400}
            alt="ThumbnailProduct"
          />
        </div>
        <div className={classes.product}>
          <Image
            src="/Assets/images/image-product-1.jpg"
            width={62}
            height={62}
            alt="Product"
          />
          <Image
            src="/Assets/images/image-product-2.jpg"
            width={62}
            height={62}
            alt="Product"
          />
          <Image
            src="/Assets/images/image-product-3.jpg"
            width={62}
            height={62}
            alt="Product"
          />
          <Image
            src="/Assets/images/image-product-4.jpg"
            width={62}
            height={62}
            alt="Product"
          />
        </div>
      </div>
      <div className={classes.description}>
        <div className={classes.productCompany}>sneaker company</div>
        <div className={classes.productName}>Fall Limited Edition Sneakers</div>
        <div className={classes.productDescription}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </div>
        <div className={classes.price}>
          <div className={classes.priceDiscount}>$125.00</div>
          <div className={classes.box}>
            <div className={classes.discount}>50%</div>
          </div>
        </div>
        <div className={classes.normalPrice}>
          <s>$250.00</s>
        </div>
        <div className={classes.cartProduct}>
          <div className={classes.addProduct}>
            <div className={classes.boxAdd}>
              <Image
                src="/Assets/images/icon-minus.svg"
                width={12}
                height={4}
                alt="min Product"
                onClick={handleMin}
              />
              <div className={classes.numberProduct}>{quantity}</div>
              <Image
                src="/Assets/images/icon-plus.svg"
                width={12}
                height={10}
                alt="plus Product"
                onClick={handlePlus}
              />
            </div>
          </div>
          <div className={classes.addCart}>
            <div className={classes.boxCart}>
              <div className={classes.imageCart}>
                <Image
                  src="/Assets/images/icon-cart-white.svg"
                  width={17}
                  height={15}
                  alt="cart Product"
                />
              </div>
              <div className={classes.addToCart}>Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
