import Image from 'next/image'
import styles from './page.module.css'
import dclogo from "./images/designcloud.svg"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div>
          <Image src={dclogo} alt="design cloud logo" title="design cloud"/>
        </div>
        <h1>World-class design at your fingertips</h1>
        <p><a href="mailto:designcloud@jsdesigns.ca" title="email">Send us</a> your document and we will turn it into a clear, beautiful, and accessible presentation.</p>
        <h2>Give it a try</h2>
        <p>We create documents for presentations, online, print, displays, etc.</p>
        <p>Turn your rough ideas into finished products.</p>
      </div>

    </main>
  )
}
