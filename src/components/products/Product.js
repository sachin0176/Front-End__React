import React, { useState } from "react";
import styles from "./Product.module.css";
import product1 from "../../assests/productsImg/product1.png";
import product2 from "../../assests/productsImg/product2.png";
import product3 from "../../assests/productsImg/product3.png";

const Product = () => {
  return (
    <div className={styles["products"]}>
      <div className={styles["new-products"]}>
        <div className={styles["new-product"]}>
          <h1>New Products</h1>
          <hr className={styles["styled-hr"]} />
        </div>

        <div className={styles["custom-arrow-icon"]}>
          <div className={styles["arrow-left"]}></div>
          <div className={styles["line"]}>
            <hr className={styles["line-l"]} />
            <hr className={styles["line-r"]} />
          </div>
          <div className={styles["arrow-right"]}></div>
        </div>
      </div>

      <div className={styles["product-m"]}>
        <div className={styles["product-left"]}>
          <p>Apparel</p>
          <p className={styles["product-text__bold"]}>Accessories</p>
          <p>Best sellers</p>
          <p>50% off</p>
        </div>

        <div className={styles["product-list"]}>
          <div className={styles["product-view"]}>
            <img src={product1} />
            <p className={styles["product-text__bold"]}>FLORIDA JACKET</p>
            <p>
              Suffered alteration in some form, bysuffalterattion in some forme,
              byinjected humor, or randomised
            </p>
            <p className={styles["product-text__bold"]}>₹500</p>
          </div>

          <div className={styles["product-view"]}>
            <img src={product2} />
            <p className={styles["product-text__bold"]}>FLORIDA JACKET</p>
            <p>
              Suffered alteration in some form, bysuffalterattion in some forme,
              byinjected humor, or randomised
            </p>
            <p className={styles["product-text__bold"]}>₹500</p>
          </div>
          <div className={styles["product-view"]}>
            <img src={product3} />
            <p className={styles["product-text__bold"]}>FLORIDA JACKET</p>
            <p>
              Suffered alteration in some form, bysuffalterattion in some forme,
              byinjected humor, or randomised
            </p>
            <p className={styles["product-text__bold"]}>₹500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
