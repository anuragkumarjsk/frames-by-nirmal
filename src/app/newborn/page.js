import React from 'react'
import styles from './page.module.css'

const Newborn = () => {
  return (
    <div className={styles.base_container}>
      <div className={styles.scale_container}>
                <div className={styles.card_image_container} ><img className={styles.card_image} src='/Outdoor/NIR08680.jpg' alt='  NIR08601147 NIR08601285 NIR08601311'/></div>
                <div className={styles.card_image_container} ><img className={styles.card_image} src='/Outdoor/NIR08691.jpg' alt='   NIR08601285 NIR08601311'/></div>
                <div className={styles.card_image_container} ><img className={styles.card_image} src='/Outdoor/NIR08694.jpg' alt='  NIR08601147  NIR08601311'/></div>
                <div className={styles.card_image_container} ><img className={styles.card_image} src='/Outdoor/NIR08714.jpg' alt='  NIR08601147 NIR08601285 '/></div>
      </div>
      
    </div>
  )
}

export default Newborn