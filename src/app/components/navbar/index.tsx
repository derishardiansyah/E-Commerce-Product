import Image from "next/image";
import classes from "./style.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarBrand}>
        <div className={classes.leftBrand}>
          <div className={classes.titleBrand}>sneakers</div>
          <div className={classes.menuBrand}>
            <div className={classes.listBrand}>Collections</div>
            <div className={classes.listBrand}>Men</div>
            <div className={classes.listBrand}>Women</div>
            <div className={classes.listBrand}>About</div>
            <div className={classes.listBrand}>Contact</div>
          </div>
        </div>
        <div className={classes.rightNavbar}>
          <div className={classes.cart}>
            <Image
              src="/Assets/images/icon-cart-gray.svg"
              width={20}
              height={20}
              alt="Cart"
            />
          </div>
          <div className={classes.profileNavbar}>
            <Image
              src="/Assets/images/image-avatar.png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      {/* <div className={classes.vector}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1141"
          height="3"
          viewBox="0 0 1141 3"
          fill="none"
        >
          <path d="M0 2L1141 1" stroke="#F7F8FD" stroke-width="2" />
        </svg>
      </div> */}
      {/* <hr /> */}
    </div>
  );
};

export default Navbar;
