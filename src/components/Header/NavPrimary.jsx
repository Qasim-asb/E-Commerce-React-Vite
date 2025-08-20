import React, { useEffect, useRef } from 'react'
import styles from './Header.module.css'
import { FaShopify } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

const NavPrimary = () => {
  const cartCount = useSelector(state => state.cart.length)
  const cartContainerRef = useRef(null)

  useEffect(() => {
    cartContainerRef.current.classList.add(styles.cartAdded)

    const timer = setTimeout(() => {
      cartContainerRef.current.classList.remove(styles.cartAdded)
    }, 500)

    return () => clearTimeout(timer)
  }, [cartCount])

  return (
    <nav className={`${styles.navPrimary} ${styles.container}`}>
      <Link to='/'><div className={styles.logoContainer}>
        <h1>V-Shop</h1>
        <FaShopify />
      </div></Link>

      <div className={styles.searchBox}>
        <input type="text" placeholder='Search Items...' />
        <button><IoSearchOutline /></button>
      </div>

      <Link to='./cart'><div ref={cartContainerRef} className={styles.cartContainer}>
        <FiShoppingCart className={styles.cartIcon} />
        <span className={styles.cartCount}>{cartCount}</span>
      </div></Link>
    </nav>
  )
}

export default NavPrimary
