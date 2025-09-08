import React from 'react'
import Navbar from './navbar'
import Link from 'next/link'
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
        <Navbar/>
        <div className={styles.right}>
            <Link className={styles.btn} href="/login" > Login</Link>
            <Link className={styles.btn} href="/registor" > Registor</Link>
            
        </div>
    </header>
  )
}

export default Header
