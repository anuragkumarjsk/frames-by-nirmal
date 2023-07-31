import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
     <div className={styles.internal_links}>
      <p>Our marvellous work is both appreciated and loved by our clients and the immense amount of testimonials we have, speaks volumes about our brand and our work</p>
     <div>
      <p style={{fontSize:'28px',paddingTop:'15px'}}>Find Us</p>
      <a href='https://goo.gl/maps/aC214mt6CRJ8Hjx46' >
      <div className={styles.location_block}>
            <div className={styles.location_pin}>
             <Image src={'/Icons/location.svg'} width={25} height={35} alt='location'/>
            </div> 
            <p className={styles.location_address}>97, Thirumudi saedhu raman, Krishna Nagar main Rd, Puducherry, 605011 ( Opp.45 feet road petrol bunk)</p>
      </div>
      </a>
     </div>
     </div>
     <div className={styles.social}>
      <div className={styles.left}></div>
      <div className={styles.mid}>© 2023 All Rights Reserved, Frames by Nirmal</div>
      <div className={styles.right}>
          <div className={styles.image_container}>
            <Image width={15} height={15} src='/Social/1.png' alt='social media'/>
          </div>
          <div className={styles.image_container}>
            <Image width={15} height={15} src='/Social/2.png' alt='social media'/>
          </div>
          <div className={styles.image_container}>
            <Image width={15} height={15} src='/Social/3.png' alt='social media'/>
          </div>
          <div className={styles.image_container}>
            <Image width={15} height={15} src='/Social/4.png' alt='social media'/>
          </div>
      </div>
     </div>    
    </div>
  )
}

export default Footer