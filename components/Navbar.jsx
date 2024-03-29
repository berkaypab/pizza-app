import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux';

export const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.callButton}>
					<Image
						src="/img/telephone.png"
						alt=""
						width="32"
						height="32"
					></Image>
				</div>
				<div className={styles.texts}>
					<div className={styles.text}>Order Now!</div>
					<div className={styles.text}>0545 124 23 42</div>
				</div>
			</div>
			<div className={styles.item}>
				<ul className={styles.list}>
					<li className={styles.listItem}>Homepage</li>
					<li className={styles.listItem}>Products</li>
					<li className={styles.listItem}>Menu</li>
					<div className={styles.logo}>
						<Link href={`/`}>
							<Image
								src="/img/logolilcaesars.png"
								alt=""
								width="200"
								height="200"
							></Image>
						</Link>
					</div>
					<li className={styles.listItem}>Events</li>
					<li className={styles.listItem}>Blog</li>
					<li className={styles.listItem}>Contact</li>
				</ul>
			</div>
			<Link href="/cart" passHref>
				<div className={styles.item}>
					<div className={styles.cart}>
						<Image
							src="/img/cart.png"
							alt=""
							width="30"
							height="30"
						></Image>
						<div className={styles.counter}>{quantity}</div>
					</div>
				</div>
			</Link>
		</div>
	);
};
