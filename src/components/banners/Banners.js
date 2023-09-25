import React,{useEffect, useState} from "react";
import styles from  "./Banners.module.css";
import poster from "../../assests/poster-img.png";
import star from "../../assests/Star.png";
import { FiArrowUpRight } from "react-icons/fi";

const Banners = () => {


  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  const [isConditionwidth, setIsConditionWidth] = useState(false);
  const [isConditionHeight, setIsConditionHeight] = useState(false);

  // Function to check the condition (e.g., screen width)
  const checkCondition = () => {
    const screenWidth = window.innerWidth;
    const screenHeight= window.innerHeight;
    console.log(screenHeight +",sh, sw"+screenWidth);
    // Replace 768 with your desired screen width condition
    setIsConditionWidth(screenWidth <=1319);
    setIsConditionHeight(screenHeight<=2852);
    console.log(isConditionHeight +","+isConditionwidth)
  };

  // Add an event listener to check the condition when the window is resized
  useEffect(() => {
    checkCondition();
    window.addEventListener("resize", checkCondition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkCondition);
    };
  }, []);
  return<div className={styles.banners}>
  {" "}
  {/* Use styles object for class name */}
  <div className={styles["banner-headers"]}>
    {" "}
    {/* Access class name with bracket notation */}
    <div className={styles["banner-header__above"]}>
      {" "}
      {/* Access class name with bracket notation */}
      <h1 className={styles["font-style"]}>ShopKart</h1>{" "}
      {/* Access class name with bracket notation */}
      <div className={`font-style ${styles["banner-header__right"]}`}>
        {" "}
        {/* Mix CSS module class with regular class */}
        <p>Wishlist(0)</p>
        <p>Bag(0)</p>
      </div>
    </div>
    <hr className={styles["styled-hr"]} />
    <div
      className={`${styles["font-style"]} ${styles["banner-header__below"]}`}
    >
      {" "}
      {navbar.map((bar) => (
        <div key={bar.id}>
          <p>{bar.name}</p>
          {bar.child && (
            <div>
              <hr style={{ margin: "0", padding: "0" }} />
              {bar.child.map((p) => (
                <p style={{ fontWeight: "lighter" }} key={p.id}>
                  {p.name}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  <div className={styles["yellow"]}></div>
  <div className={styles["banner-name"]}>
    <h1>Fresh</h1>
    {/* <img className={styles['fresh']} src={fresh} />
  <img className={styles['tott']} src={tott} />
  <img className={styles['look']} src={look} /> */}
    <h1 id={styles['banner-tott']} className={styles["banner-tott"]}>
      <span className={styles[("border-text", "countLook")]}>2</span>
      <span className={styles[("border-text", "countLook")]}>0</span>
      <span className={styles[("border-text", "countLook")]}>2</span>
      <span className={styles[("border-text", "countLook")]}>2</span>
    </h1>
    <h1 style={{ marginLeft: "3rem" }}>Look</h1>
  </div>
  <div className={styles["banner-two"]}>
    <img src={star} style={{ filter: "200%" }} />
  </div>
  <div className={styles["banner-one"]}>
    <img src={poster} />
  </div>
  <div className={styles["name-price"]}>
    <p>Oregon Jacket</p>
    <p>₹500.0</p>
  </div>
  <div className={styles["hr-container"]}>
    <hr className={styles["styled-hr"]} />
  </div>
  <div className={styles["see-more"]}>
    <p>
      See more <FiArrowUpRight className={styles["arrow-icon"]} />{" "}
    </p>
  </div>
</div> 
    
};

export default Banners;
