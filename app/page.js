import Link from 'next/link'
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
        <p><a href="mailto:designcloud@jsdesigns.ca" title="email">Send us</a> your document and we will turn it into a clear, beautiful, and accessible landing page that is easy to read and to share online.</p>
        <h2>Give it a try</h2>
        <p>We create documents for presentations, online, print, displays, etc. <br />Turn your rough ideas into finished products.</p>
        <h2>Samples</h2>
        <p><Link href="/flato">Event Brochure</Link> - Advertisement</p>
        <p><Link href="/periodictable">Periodic Table</Link> - reference material</p>
        <p><Link href="/cobra">Article</Link> - clear, easy to read, responsive and easy to share.</p>
        <h2>Add-ons</h2>
        <ul className={styles.ul}>
          <li>Custom domain name</li>
          <li>QR-code</li>
          <li>Logo design</li>
          <li>Interactive / motion design</li>
          <li>3D renderings</li>
          <li>Advanced typesetting, math and science</li>
        </ul>
      </div>
    </main>
  )
}
