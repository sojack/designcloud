import Image from "next/image"
import styles from "./page.module.css"
import title from "./title.png"
import td from "./td.png"
import lm from "./LM.png"
import photofac from "./photofac.png"
import smash from "./smash-01.png"

export const metadata = {
    title: 'Joseph and the Amazing Technicolor Dreamcoat',
    description: 'Unionville Theatre Company',
    }

function page() {
  return (
    <div className={styles.main}>
        <div className={styles.top}> {/* top will hold title and UTC logo */}
            <Image className={styles.title} src={title} alt="title" priority={true}></Image>
        </div>
        <div className={styles.bottom}>
            <div className={styles.date}>February 22–25, 2024</div>
            <div className={styles.info}>
                <div className={styles.left}>
                    <p>FLATO MARKHAM THEATER</p>
                    <p>171 Town Centre Blvd, Markham</p>
                </div>
                <div className={styles.right}>
                    <p>For tickets: 905 305-7469</p>
                    <p><a href="https://www.flatomarkhamtheatre.ca">www.flatomarkhamtheatre.ca</a></p>
                </div>
            </div>
            <div className={styles.sponsors}>
                <div className={styles.sponsorsTxt}>Thank you to our sponsors:</div>
                <div className={styles.sponsorsImageContainer}>
                    <div  className={styles.sponsorsImages}><Image className={styles.sponsorsImage} src={td} alt="TD"></Image></div>
                    <div  className={styles.sponsorsImages}><Image className={styles.sponsorsImage} src={lm} alt="Long & McQuade"></Image></div>
                    <div  className={styles.sponsorsImages}><Image className={styles.sponsorsImage} src={photofac} alt="photoac"></Image></div>
                    <div  className={styles.sponsorsImages}><Image className={styles.sponsorsImage + " "+styles.rounded} src={smash} alt="smash"></Image></div>
                </div>
                <div><a href="https://www.unionvilletheatre.ca">www.unionvilletheatre.ca</a></div>
                <div className={styles.smalltext}>
                    <p>Presented through special arrangement with Concord Theatricals on behalf of  the Really Useful Group <a href="www.concordtheatricals.com">www.concordtheatricals.com</a>
                    <br/>Unionville Theatre Company is a not-for-profit organization.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default page