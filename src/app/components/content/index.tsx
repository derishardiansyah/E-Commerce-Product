"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./style.module.scss";

const Content = () => {
  const [quantity, setQuantity] = useState(0);
  const imageAssets = [
    "/Assets/images/image-product-1.jpg",
    "/Assets/images/image-product-2.jpg",
    "/Assets/images/image-product-3.jpg",
    "/Assets/images/image-product-4.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(imageAssets[0]);
  const [cart, setCart] = useState<any>([]);
  const [openModal, setopenModal] = useState(false);

  const handleMin = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleThumbnailClick = (newImage: string) => {
    setSelectedImage(newImage);
  };

  const addToCart = () => {
    const result = {
      thumbnail: selectedImage,
      name: "Fall Limited Edition Sneakers",
      price: "125.00",
      quantity: quantity,
    };
    setCart([...cart, result]);
    setQuantity(0);
  };

  // data tidak hilang saat refresh
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const initialCart = storedCart ? JSON.parse(storedCart) : [];
    setCart(initialCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.imageProduct}>
          <div className={classes.thumbnail}>
            <Image
              src={selectedImage}
              layout="fill"
              alt="ThumbnailProduct"
              className={classes.thumbnailPreview}
              onClick={() => {
                setopenModal(true);
              }}
            />
          </div>

          <div className={classes.product}>
            {imageAssets.map((image, index) => (
              <div
                key={index}
                className={`${classes.thumbnailImage} ${
                  selectedImage === image ? classes.activeThumbnail : ""
                }`}
                onClick={() => handleThumbnailClick(image)}
              >
                <Image
                  src={image}
                  width={62}
                  height={62}
                  alt={`Product-${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.description}>
          <div className={classes.productCompany}>sneaker company</div>
          <div className={classes.productName}>
            Fall Limited Edition Sneakers
          </div>
          <div className={classes.productDescription}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </div>
          <div className={classes.priceMobile}>
            <div className={classes.price}>
              <div className={classes.priceDiscount}>$125.00</div>
              <div className={classes.box}>
                <div className={classes.discount}>50%</div>
              </div>
            </div>
            <div className={classes.normalPrice}>
              <s>$250.00</s>
            </div>
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
            <button className={classes.addCart} onClick={addToCart}>
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
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <div className={classes.backDrop}>
          <div className={classes.imageProduct}>
            <div className={classes.closeModal}>
              <Image
                src="/Assets/images/icon-close.svg"
                alt="Close Modal"
                width={20}
                height={20}
                onClick={() => {
                  setopenModal(false);
                }}
              />
            </div>
            <div className={classes.thumbnail}>
              <Image
                src={selectedImage}
                layout="fill"
                alt="ThumbnailProduct"
                className={classes.thumbnailPreview}
              />
            </div>
            <div className={classes.product}>
              {imageAssets.map((image, index) => (
                <div
                  key={index}
                  className={`${classes.thumbnailImage} ${
                    selectedImage === image ? classes.activeThumbnail : ""
                  }`}
                  onClick={() => handleThumbnailClick(image)}
                >
                  <Image
                    src={image}
                    width={62}
                    height={62}
                    alt={`Product-${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
