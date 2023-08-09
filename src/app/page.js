import Image from 'next/image'
import styles from './page.module.css'
const Runner_grid = () =>{
  return (<>
  <div className={styles.camera_reel}>
    <div className={styles.camera_segment}>
        <div className={styles.cameraicon_container}>
            <img className={styles.camera} width={'350px'}  src='/Icons/camera.svg' alt='img'/>
            <img className={styles.lens} width={'150px'} color='white' src='/Icons/shutter.svg' alt='DSC01311'/>
        </div>    
    </div>
    <div className={styles.reel_segment}>
        <div className={styles.runner_container}>
            <div className={styles.runner_track}>
                <img className={styles.runner_image} src='/Toddler/DSC01199.jpg' alt=' DSC01199 DSC01147 DSC01285 DSC01311'/>
                <img className={styles.runner_image} src='/Toddler/DSC01147.jpg' alt=' DSC01199  DSC01285 DSC01311'/>
                <img className={styles.runner_image} src='/Toddler/DSC01285.jpg' alt=' DSC01199 DSC01147  DSC01311'/>
                <img className={styles.runner_image} src='/Toddler/DSC01311.jpg' alt=' DSC01199 DSC01147 DSC01285 '/>
            </div>
        </div>
    </div>
    <div className={styles.reel_segment_1}>
        <div className={styles.runner_container}>
            <div className={styles.runner_track}>
                <img className={styles.runner_image} src='/Toddler/DSC01199.jpg' alt=' DSC01199 DSC01147 DSC01285 DSC01311'/>
                <img className={styles.runner_image} src='/Toddler/DSC01147.jpg' alt=' DSC01199  DSC01285 DSC01311'/>
                <img className={styles.runner_image} src='/Toddler/DSC01285.jpg' alt=' DSC01199 DSC01147  DSC01311'/>
                <img className={styles.runner_image} src='/Toddler/DSC01311.jpg' alt=' DSC01199 DSC01147 DSC01285 '/>
            </div>
        </div>
      </div>
  </div>
  </>)
}

const Two_x_two_grid = () =>{
  return (<>
    <div style={{padding:'30px'}}>
      <p style={{fontSize:36,fontFamily:'DancingScript-SemiBold',color:'#F4C2C2'}} >Shh! It is nap time, do not wake the babies up! </p>
    </div>
      <div className={styles.gridContainer}>
            <div className={styles.gridItem} style={{ backgroundImage: 'url(/NewBorn/NIR09720.jpg)' }}></div>
            <div className={styles.gridItem} style={{ backgroundImage: 'url(/NewBorn/6Q9A8255.jpg)' }}></div>
            <div className={styles.gridItem} style={{ backgroundImage: 'url(/NewBorn/NIR00790-Edit.jpg)' }}></div>
            <div className={styles.gridItem} style={{ backgroundImage: 'url(/NewBorn/DSC02575-Edit.jpg)' }}></div>
        </div>  
    </>        
  )
}

export default function Home() {
  return (
    <div className={styles.main}>
      <Runner_grid/>
      <Two_x_two_grid/> 
    </div>
  )
}
