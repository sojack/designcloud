import Image from "next/image"
import styles from "./page.module.css"
import coaches from "./images/coaches.jpg"
import team from "./images/team.jpg"
import logo from "./images/cobra-logo.png"

export const metadata = {
    title: {
      absolute: 'Cobra Masters Swimming',
    },
  }


function page() {
  return (
    <div>
        <div className={styles.container}>
            <Image src={logo} alt="cobra logo" width={100} className={styles.logo} priority/>
            <h1 className={styles.h1}>COBRA SWIM CLUB<br />Masters Swim Program<br /><small>Fun, fitness, and more Fun!</small></h1>
            <p className={styles.p}>The Cobra Swim Club in Brampton has been around for 54 years. The masters program, while off and on for many years, started in earnest three years ago. Like in any program the success is about the people (coaches and swimmers) and the commitment by the club (head coach and board) to provide aquatics active-for-life programming. The driving force for the program is Kim Inglis-Clark and Ian Roopnarine, co-head coaches who frankly <strong>just want to have fun and it’s infectious!</strong> </p>
            <Image src={coaches} alt="coaches" className={styles.img} priority/>
            <p className={styles.p}>They took on this special project encouraged by head coach Ulf Ornhjelm and several keen adult masters. One of the key elements is the close working relationship between Kim and Ian and their ability to share coaching duties given other program responsibilities.</p>
            <p className={styles.p}>The cobra masters swim three times a week at the McMurchy Pool from 8:30 to 9:30 pm. So far, they have 28 swimmers and the numbers are limited only by the available pool time. The swimmers are made up of parents, alumni cobra swimmers, multi-sport athletes, and those who just love to train. While there are tryouts, it is only really to ensure the swimmers have the basic technical and fitness level to complement the training group (no stones). Kim and Ian are hopeful that when the Bellmore Recreation Centre, which has been closed for 5 years, reopens more pool time will be available allowing the program to grow.  </p>
            <p className={styles.p}>One of the benefits the masters swimming program brings is the injection of positive energy into the club — from committed masters swimmers who just want to give back to the club.  It’s been a win-win for all involved including participation in Swimathon sponsorship, fundraising, and volunteering at club events. The masters swimmers have become a big part of the club with younger swimmers  being encouraged and looking up to the masters swimmers. Through the masters program age group swimmers are realizing that they are involved in a lifelong sport and that the skills learned in age group swimming can lead to a healthy lifestyle and enjoyment over their entire lifetime. Beyond being the happiest team on deck at meets.  </p>
            <p className={styles.p}>The highlight in 2023 was the participation of <strong>Creighton Thicke-Rattray</strong> at the 2023 World Aquatics Masters Championships in Fukuoka Japan. Swimming 5 events at worlds and finishing between 17th and 38th respectively. Great job Creighton! Craig is a full-circle Cobra alumnus having swum as an age group swimmer (started at 7 years old), then going off to university participating as a varsity swimmer for Western and then coming back to the club to participate as a masters swimmer. Craig was the <strong>keynote speaker at the 2023 Cobra awards banquet</strong> and talked passionately about how the sport of swimming has enhanced his life providing lifelong friends, a healthy lifestyle and association with a positive/collaborative community. Craig had a powerful message that swimmers and parents at the banquet embraced and celebrated.</p>
            <p className={styles.p}>Thanks Cobra Masters for being such a positive inspiration for our Swim Ontario age-group clubs. </p>
            <Image src={team} alt="team photo"  className={styles.img}/>
            <p className={styles.p}><strong>Masters swimming is a powerful element of the Swim Ontario club toolkit which has the potential to enhance a club’s program and add value both in terms of revenue and through broad-based aquatic, active, healthy-living community advocacy.</strong></p>
            <h3>Find out more about the Brampton Cobra Masters here:</h3>
            <ul className={styles.list}>
                <li><a href="https://www.gomotionapp.com/team/cancobra/page/programs/masters-swimming">Brampton Cobra Masters website</a></li>
                <li><a href="https://www.swimontario.com/athletes/masters/">Swim Ontario Masters website</a></li>
            </ul>
        </div>
    </div>
  )
}

export default page