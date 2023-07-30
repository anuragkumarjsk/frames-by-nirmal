import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <div style={{padding:'30px'}}>
        <p style={{fontSize:36,fontFamily:'DancingScript-SemiBold',color:'#F4C2C2'}} >Shh! It is nap time, do not wake the babies up! </p>
      </div>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem} style={{ backgroundImage: 'url(/NewBorn/NIR09720.jpg)' }}></div>
            <div className={styles.gridItem} style={{ backgroundImage: 'url(/NewBorn/6Q9A8255.jpg)' }}></div>
            <div className={styles.gridItem} style={{ backgroundImage: 'url(/NewBorn/NIR00790-Edit.jpg)' }}></div>
            <div className={styles.gridItem} style={{ backgroundImage: 'url(/NewBorn/DSC02575-Edit.jpg)' }}></div>
          </div>      
    </div>
  )
}
