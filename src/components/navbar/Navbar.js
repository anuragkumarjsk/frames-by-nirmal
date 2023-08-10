'use client'
import Link from 'next/link';
import Image from 'next/image';
import styles from './nav.module.css'
import { usePathname } from 'next/navigation';
const navlist = [
    {routeName : 'newborn', href : '/newborn' },
    {routeName : 'toddler', href : '/toddlers' },
    {routeName : 'outdoor', href : '/outdoor' },
    {routeName : 'maternity', href : '/maternity' },
    {routeName : 'family potraits', href : '/family_portraits' },
    {routeName : 'birthday events', href : '/birthday_events' },
    {routeName : 'wedding events', href : '/wedding_events' },
    {routeName : 'food & fashion', href : '/food_and_fashion' },
]

const Navbar = () => {
let pathname = usePathname()
console.log(pathname)
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.nav_home}>
        <Link href={'/'} legacyBehavior>
            <a>
            <Image width={150} height={100} src='/FramesByNirmal.png'/>
            </a>
        </Link>
      </ul>  
      <ul className={styles.nav_links}>
        {navlist.map((item)=>{
          console.log('/'+item.routeName )
        return (<li key={item.href}>
          <Link href={item.href} legacyBehavior>
            <a className={item.href === pathname ? styles.link_text_active:styles.link_text}>{item.routeName}</a>
          </Link>
        </li>)
        })}
      </ul>
    </nav>
  );
};

export default Navbar;


// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar