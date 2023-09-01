"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./style.module.scss";

interface CartItem {
  thumbnail: string;
  name: string;
  price: string;
  quantity: number;
}

const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const handleMenu = () => {
    setopenMenu(!openMenu);
  };

  const [openCart, setopenCart] = useState(false);
  const handleCart = () => {
    setopenCart(!openCart);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const initialCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];
    setCartItems(initialCart);
  }, []);

  const handleRemoveFromCart = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navbarBrand}>
        <div className={classes.leftBrand}>
          <div className={classes.btnMobile} onClick={handleMenu}>
            <Image
              src="/Assets/images/icon-menu.svg"
              alt="menu"
              width={15}
              height={15}
            />
          </div>
          <div className={classes.titleBrand}>sneakers</div>
          <ul className={classes.menuBrand}>
            <li className={classes.listBrand}>Collections</li>
            <li className={classes.listBrand}>Men</li>
            <li className={classes.listBrand}>Women</li>
            <li className={classes.listBrand}>About</li>
            <li className={classes.listBrand}>Contact</li>
          </ul>
        </div>
        <div className={classes.rightNavbar}>
          <div className={classes.cart} onClick={handleCart}>
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

      {/* menu */}
      {openMenu && (
        <div className={classes.overlay}>
          <div className={classes.sidebarMenu}>
            <Image
              src="/Assets/images/close.png"
              alt="menu"
              width={15}
              height={15}
              onClick={handleMenu}
              className={classes.closeMobile}
            />
            <ul className={classes.sidebarBrand}>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}

      {/* cart */}
      {openCart && (
        <div className={classes.sidebarCart}>
          <div className={classes.cartName}>Cart</div>
          <hr />
          <div className={classes.cartItems}>
            {cartItems.map((item, index) => (
              <div key={index} className={classes.cartItem}>
                <div className={classes.leftItem}>
                  <Image
                    src={item.thumbnail}
                    width={50}
                    height={50}
                    alt="Cart Item"
                    className={classes.cartItemImage}
                  />
                  <div className={classes.itemInfo}>
                    <div className={classes.itemName}>{item.name}</div>
                    <div className={classes.groupPrice}>
                      <div className={classes.itemPrice}>${item.price}</div>
                      <div className={classes.itemQuantity}>
                        x {item.quantity}
                      </div>
                      <div className={classes.totalPrice}>
                        ${parseFloat(item.price) * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.removeCart}>
                  <Image
                    src="/Assets/images/remove.png"
                    width={17}
                    height={17}
                    alt="remove Cart"
                    onClick={() => {
                      handleRemoveFromCart(index);
                    }}
                  />
                </div>
              </div>
            ))}
            <button className={classes.addCart}>
              <div className={classes.boxCart}>
                <div className={classes.chekout}>Checkout</div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
