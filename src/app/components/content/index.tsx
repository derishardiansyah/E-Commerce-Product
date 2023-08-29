import Image from "next/image";
import classes from "./style.module.scss";

const Content = () => {
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
        <div className={classes.normalPrice}></div>
      </div>
    </div>
  );
};

export default Content;
