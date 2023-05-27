import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      Made With  ❤️ by&nbsp;   <Link href={'https://www.instagram.com/thisiszarbiyeff/'} target='_blank' >   Nahid Zarbiyev</Link>
    </footer>
  )
}

export default Footer