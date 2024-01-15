import Image from "next/image"
import "./page.css"

function page() {
  return (
    <div id="main">
        <div className="info">
            <h1 className="name">Vivian Shaw</h1>
            <p className="title"><em>Office Manager & Administrator</em></p>
            <p className="email"><a href="mailto:vshaw1010@gmail.com">vshaw1010@gmail.com</a></p>
            <p className="address">Richmond Hill, ON</p>
            <p className="phone"><a href="tel:289-231-9642">289-231-9642</a></p>
            <p className="emoji">🌻</p>
        </div>
        <div className="resume">
            <div>
                <h2>Summary</h2>
                <p>I’m a result-oriented office administrator with 30+ years of experience having worked in sales and marketing, customer care, event planning, project management, client retention, contract negotiation, and most recently office management.  The skills I’ve acquired throughout my career have been shaped by industries such as print media and signage, residential home building and online sales.  My strengths are rooted in the confidence I have knowing I can manage both small tasks and large projects effectively and efficiently.</p>
            </div>
            <div>
                <h2>Key Skills</h2>
                <p> Production Coordinator,  Customer Relations,  Project Management,  Event Planning,
 Data Collection,  Critical Thinker,  Workshop Leader,  Basic Bookkeeping (QuickBooks)</p>
            </div>
            <div>
                <h2>Software Knowledge</h2>
                <p> Microsoft Office,  ClickUp,  HubSpot,  QuickBooks,  Zoom,  SmartTouch Interactive </p>
            </div>
            <div>
                <h2>Employment History</h2>
                <ul>
                    <li>2022&ndash;Current: <strong>TLA Graphics</strong> &mdash; <em>Office Manager</em></li>
                    <li>2003&ndash;2022: <strong>Frontdoor Developments</strong> &mdash; <em>Office Administrator</em></li>
                    <li>2000&ndash;2002: <strong>Chapters Online</strong> &mdash; <em>Executive Assistant to VP Sales and Marketing</em></li>
                    <li>1999&ndash;2000: <strong>Vermont Castings</strong> &mdash; <em>Manager of Marketing Administration</em></li>
                    <li>1997&ndash;1999: <strong>SE Global Technologies</strong> &mdash; <em>Executive Assistant to VP Sales</em></li>
                    <li>1994&ndash;1997: <strong>Fenwick Insurance</strong> &mdash; <em>Office Administrator</em></li>
                </ul>
            </div>
            <div>
                <h2>Experience</h2>
                <h3>TLA Graphics - 2022 to Present</h3>
                <h4>Office Manager</h4>
               <ul>
                    <li>Oversee client orders through all stages of sales, quoting, design, production, and shipping. </li>
                    <li>Outsource jobs to vendors and follow through to make sure it is completed on schedule.</li>
                    <li>Coordinate production workflow to keep track of and order print and fabrication materials.</li>
                    <li>Communicate and follow up with clients to ensure their expectations are being met.</li>
                    <li>Confirm all materials and visuals are included and labelled for installation jobs.</li>
                    <li>Visit vendors to pick up and/or to drop off completed orders.</li>
                    <li>Negotiate material pricing with vendors to keep in line with the production budget.</li>
               </ul>

            <h3>Frontdoor Developments - 2003 to 2022</h3>
            <h4>Office Administrator</h4>
               <ul>
                    <li>Tracked project data, generated schedules, and kept management informed of important changes.</li>
                    <li>Collected customer information and updated CRM (SmarTouch) to track leads for sales.</li>
                    <li>Submitted enrolments for new home warranty with Tarion.</li>
                    <li>Supported Sales and Marketing teams with sales events, including internal and external print media, communication with potential buyers and administrative support during sales events.</li>
                    <li>Coordinated and maintained parking permits, established postal codes and mailbox set up with various city departments for construction site staff.</li>
                    <li>Supported the planning department’s efforts to obtain building permits by filling out forms and submitting documents to various municipalities.</li>
                    <li>Assisted the customer service department with deficiency and audit work orders by establishing the work order, sending it to various trades and following up with both the homeowner and Tarion.</li>
                    <li>Provided administrative support to coworkers by taking on additional work during high-volume periods.</li>
                    <li>Consulted with technology professionals to purchase and set up employee email accounts, cell phones and computers. </li>
                    <li>Tracked, reviewed and negotiated Rogers business accounts.</li>
                    <li>Made weekly sales deposits at various banks as needed.</li>
                    <li>Created and maintained computer and paper-based filing systems</li>
               </ul>

            <h3>Chapters Online - 2000 to 2001</h3>
            <h4>Executive Assistant </h4>
               <ul>
                    <li>Scheduled and organized the calendar of the Vice President of Marketing and Merchandising. </li>
                    <li>Communicated daily with the VP’s executive team.</li>
                    <li>Scheduled both internal and external meetings, ensuring all supplies and equipment were on hand.</li>
                    <li>Created PowerPoint presentations for team meetings when needed.</li>
                    <li>Assisted team leaders with elevated customer concerns requiring management decisions.  Coordinated with VP’s executive team on social media campaigns, B2B and marketing strategies.</li>
                    <li>Managed company wide special events.</li>
               </ul>
            </div>
            <div>
                <h2>Education and Training</h2>
                <p>Humber College – Executive Assistant Program</p>
                <p>West Humber Collegiate – (OSSD) graduated with honours.</p>
                <p>Priority Management.</p>
                <p>American Management Association – Partnering with your Boss.</p>
                <p>Career Track – Excellent Customer Service and Conflict Resolution.                </p>
            </div>
            <div>
                <h2>Community Volunteer Work</h2>
                <strong>The Bridge Markham</strong> – 2018 to Present
                <p>Event Coordinator</p>
                <ul>
                    <li>Used HubSpot to set up email registrations, created and managed an excel sheet to track registrations and payments.</li>
                    <li>Assisted group leaders with workshop material distribution. Point of contact for attendees at the beginning of workshop startup.</li>
                </ul>
                <p>Co-Facilitator of Divorce Care</p>
                <ul>
                    <li>Set-up and distribute Zoom meeting details, establish group guidelines, lead discussions, research for relevant content to share, communicate weekly with registrants.</li>
                </ul>
            </div>
            <p className="emoji">🪴</p>

        </div>
    </div>
  )
}

export default page