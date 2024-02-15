import Image from "next/image"
import styles from "./keeley.module.css"
import hydra from "./images/KeeleyHydra.jpg"
import hydraLogo from "./images/logo-Hydra.svg"
import keeleyLogo from "./images/logo-keeley-w.svg"
import back from "./images/back-detail.png"
import wire from "./images/wire.png"

export const metadata = {
    title: 'Keeley Electronics - Hydra',
    description: 'Unionville Theatre Company',
    }

function page() {
  return (
    <div className={styles.container}>
        <Image src={hydra} alt="Keeley Hydra" title="Keeley Hydra" className={styles.mainPhoto} priority={true} placeholder="blur"/>
        <div  className={styles.main}>
            <Image src={hydraLogo} alt="Keeley Hydra" title="Keeley Hydra" className={styles.logos}/>
            <p>
            The HYDRA combines high-fidelity Reverb and Tremolo to add space and dimension to your guitar, bass, or keyboard signal. After the team at Keeley completed the ECCOS, we wanted to craft the perfect companion pedal, the tone of which had to make it impossible to turn off.
            </p>
            <Image src={keeleyLogo} alt="Keeley Hydra" title="Keeley Hydra" className={styles.logos}/>
        </div>
        <div className={styles.secondaryImagesContainer}>
            <div className={styles.imageWrap}>
                <Image src={wire} alt="Keeley Hydra" title="Keeley Hydra" className={styles.secondaryImages}/>
            </div>

            <div className={styles.imageWrap}>
                <Image src={back} alt="Keeley Hydra" title="Keeley Hydra" className={styles.secondaryImages}/>
            </div>
        </div>
    </div>
  )
}

export default page