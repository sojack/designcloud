import Image from "next/image"
import styles from "./keeley.module.css"
import hydra from "./KeeleyHydra.jpg"
import hydraLogo from "./logo-Hydra.svg"
import keeleyLogo from "./logo-keeley-w.svg"

export const metadata = {
    title: 'Keeley Electronics - Hydra',
    description: 'Unionville Theatre Company',
    }

function page() {
  return (
    <div className={styles.container}>
        <Image src={hydra} alt="Keeley Hydra" title="Keeley Hydra" className={styles.mainPhoto} priority={true}/>
        <div  className={styles.main}>
            <Image src={hydraLogo} alt="Keeley Hydra" title="Keeley Hydra" className={styles.logos}/>
            <p>
            The HYDRA combines high-fidelity Reverb and Tremolo to add space and dimension to your guitar, bass, or keyboard signal. After the team at Keeley completed the ECCOS, we wanted to craft the perfect companion pedal, the tone of which had to make it impossible to turn off.
            </p>
            <Image src={keeleyLogo} alt="Keeley Hydra" title="Keeley Hydra" className={styles.logos}/>

        </div>
    </div>
  )
}

export default page