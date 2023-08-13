import Link from 'next/link'
import React from 'react'
import { ImFilm } from 'react-icons/im';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} container fluid`}>
        <div className={styles.headerWrapper}>
            <Link className={styles.headerLogo} href='./' >
            <ImFilm/>NEXTFILMS
            </Link>

            <nav className={styles.headerNavMenu}>
                <Link href='./'>MOVIES</Link>
                <Link href='./'>SERIES</Link>
                <Link href='./'>KIDS</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header