import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/bg.png' layout='fill' alt=''></Image>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LIL CAESARS PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road
            <br /> NewYork, 85022
            <br /> (602) 8456-1412
          </p>
          <p className={styles.text}>
            1654 R. Don Road
            <br /> NewYork, 85022
            <br /> (602) 8456-1412
          </p>
          <p className={styles.text}>
            1654 R. Don Road
            <br /> NewYork, 85022
            <br /> (602) 8456-1412
          </p>
          <p className={styles.text}>
            1654 R. Don Road
            <br /> NewYork, 85022
            <br /> (602) 8456-1412
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};
