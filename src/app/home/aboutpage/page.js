
"use client"

import Link from "next/link";
import Image from "next/image";
import "./about.css"

export default function AboutPage() {

  const QuoteHighlight = ({quote}) => {
    return (
      <div>
        <div className="quote-highlight">
          <div className="qdivider">
            <div className="qdivide"></div>
          </div>
          <p className="quote-body">{quote}</p>
          <div className="qdivider">
            <div className="qdivide"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
        <section className="introduction">
          <div className="introduction-head">
            <Image src="/big_rcg.png" height={0} width={0} alt="company" sizes="100vw" className="rcg-logo"/>
            <p className="tag-line">A Leading International Recruitment Firm</p>
            <div className="divider">
                <div className="divide"></div>
            </div>
          </div>
          <div className="introduction-body">
            <p className="subheading">Introduction</p>
            <p className="paragraph">
              Realmer Consulting Agency is a premier international recruitment agency dedicated to providing top-tier recruitment services, business consulting, and travel and tour solutions. With a vast network of over 1,000 candidates spanning all regions of Ghana and beyond, Realmer Consulting 
              Agency stands as a beacon of excellence in the recruitment industry.
            </p>
            <p>
              The company has established two operational branches in Ghana, strategically located in Accra and Kumasi, to effectively cater to the needs of businesses and job seekers alike. 
              Guided by a strong commitment to professionalism, efficiency, and client satisfaction, Realmer Consulting Agency has built partnerships with over 130 companies and organizations worldwide. 
            </p>
          </div>
        </section>
        <section className="services">
          <QuoteHighlight 
            quote="With a vast network of over 1,000 candidates spanning all regions 
            of Ghana and beyond"
          />
          <div className="services-intro">
            <p className="paragraph">
              These collaborations underscore the agency’s capability to connect qualified job seekers with reputable employers across diverse industries. The agency's Chief Executive Officer (C.E.O), Rev. Cosmos Nimako, has been instrumental in shaping the company’s vision, ensuring that it continues to provide world-class 
              recruitment and consultancy services.
            </p>
          </div>
          <div className="services-body">
            <p className="subheading">Our Services</p>
            <p className="paragraph">At Realmer Consulting Agency, we offer a comprehensive range of services tailored to meet the needs of job seekers, employers, and individuals looking for travel and tour assistance.
              Our primary services include: </p>
            <div className="service-list">
              <p className="block-title">1.	Recruitment Services</p>
              <p className="paragraph">As a recruitment agency, our core function is to bridge the gap between job seekers and employers. We recruit workers for various organizations across different sectors, ensuring that businesses find the right talent to drive their operations. Our recruitment process is meticulous, involving thorough screening and vetting of candidates to match them with suitable job opportunities. Our candidate pool comprises 
                professionals from different fields, including:</p>
              <ul>
                <li>Healthcare professionals</li>
                <li>Administrative and clerical staff</li>
                <li>Sales and marketing personnel</li>
                <li>IT specialists</li>
                <li>Engineers and technicians</li>
                <li>Hospitality and tourism workers</li>
                <li>Construction and labor staff</li>
                <li>Domestic workers </li>
              </ul>
              <p className="paragraph">Our recruitment services are not limited to Ghana. We also place candidates in international job positions, helping professionals 
                secure employment opportunities abroad. </p>
            </div>
            <div className="service-list">
              <p className="block-title">2.	Business Consulting </p>
              <p className="paragraph">Realmer Consulting Agency provides expert business consulting services to startups, small businesses, and large corporations. 
              Our consulting services cover: </p>
              <ul>
                <li>Business registration and legal compliance</li>
                <li>Market research and feasibility studies	</li>
                <li>Strategic planning and business development 	</li>
                <li>Human resource management solutions	</li>
                <li>Financial planning and investment advisory</li>
              </ul>
              <p>We work closely with entrepreneurs and organizations to help them achieve their business objectives, optimize operations, 
                and improve overall efficiency. </p>
            </div>
            <div className="service-list">
              <p className="block-title">3.	Travel and Tour Services</p>
              <p className="paragraph">In addition to our recruitment and business consulting services, Realmer Consulting 
                Agency offers travel and tour services. We assist individuals and corporate clients with: </p>
              <ul>
                <li>Visa application and processing</li>
                <li>Flight bookings and reservations</li>
                <li>Hotel accommodations</li>
                <li>Tour packages for leisure and business travel </li>
              </ul>
              <p>Our travel and tour services ensure that our clients have seamless experiences when traveling for work,
                 study, or vacation. </p>
            </div>
          </div>
        </section>
        <section className="purpose">
          <QuoteHighlight 
            quote="Realmer Consulting Agency has built partnerships with over 130 companies and organizations worldwide. "
          />
          <div className="purpose-body">
            <p className="subheading">Why Choose Realmer Consulting</p>
            <p className="paragraph">With numerous recruitment and consulting firms in the industry, Realmer Consulting Agency distinguishes
               itself through several key advantages:</p>
            <div className="purpose-list">
              <p className="block-title">1.	Extensive Network and Global Reach </p>
              <p>Our agency has a vast network of candidates and employer partnerships that extend beyond Ghana to various parts of the world. This enables us to provide job placement opportunities on 
                both local and international levels. </p>
            </div>
            <div className="purpose-list">
              <p className="block-title">2.	Commitment to Excellence</p>
              <p>We adhere to the highest standards of professionalism and ethics in our recruitment and consulting processes. Our team of experts ensures that every candidate is well-vetted and 
                every client receives top-quality service.</p>
            </div>
            <div className="purpose-list">
              <p className="block-title">3.	Personalized Solutions </p>
              <p>We understand that each client has unique needs. That is why we offer tailor-made solutions to job seekers, businesses, and travelers to meet their specific requirements. </p>
            </div>
            <div className="purpose-list">
              <p className="block-title">4.	Efficient Recruitment Process</p>
              <p>Our recruitment process is streamlined to ensure timely placement of candidates. We conduct rigorous screening, background checks, and interviews to match job seekers with the right employers efficiently. </p>
            </div>
            <div className="purpose-list">
              <p className="block-title">5.	Strong Leadership and Vision </p>
              <p>Under the leadership of Rev. Cosmos Nimako, our agency continues to expand and innovate. His vast experience in recruitment, business consulting, and international relations has been pivotal in positioning Realmer Consulting Agency as a leader in the industry. </p>
            </div>
          </div>
          <div className="success-stories">
            <p className="subheading">Success Stories and Achievements</p>
            <p className="paragraph">Since its inception, Realmer Consulting Agency has successfully placed thousands of job seekers in reputable companies across Ghana and internationally.
              Some of our notable achievements include: </p>
            <ul>
              <li>Establishing strategic partnerships with over 130 
              companies and organizations worldwide. </li>
              <li>Expanding our candidate database to over 1,000 skilled 
                professionals across various industries. </li>
              <li>Successfully facilitating international job placements and work visa processing 
                for numerous professionals. </li>
              <li>Assisting businesses in streamlining their operations through 
                expert consulting services. </li>
            </ul>
          </div>
        </section>
        <section className="conclusion">
          <QuoteHighlight 
            quote="Realmer Consulting Agency stands as a beacon of excellence in the
            recruitment industry."
          />
          <div className="future-prospect">
            <p className="subheading">Future Prospects</p>
            <p className="paragraph">As Realmer Consulting Agency continues to grow, we have set ambitious goals to further solidify our presence in the recruitment and consulting sectors.
              Some of our future plans include: </p>
            <ul>
            <li>Expanding our branch network to other African countries and beyond.</li>
            <li>Increasing our employer partnerships to offer more job opportunities to candidates.</li>
            <li>Enhancing our digital recruitment platform to provide seamless online job applications and candidate screenings. </li>
            <li>Strengthening our travel and tour services to cater to a larger clientele. </li>
            </ul>
          </div>
          <div className="conclusion-body">
            <p className="subheading">Conclusion</p>
            <p className="paragraph">Realmer Consulting Agency is a trusted and reliable partner for recruitment, business consulting, and travel services. With a solid reputation built on integrity, professionalism, and efficiency, we continue to connect job seekers with employers, assist businesses in achieving their goals, and provide exceptional travel experiences. Our commitment to excellence and innovation ensures that we remain at the forefront 
              of the recruitment industry. </p>
            <p>If you are an employer looking for qualified candidates, a job seeker searching for new opportunities, or a traveler in need of professional assistance, 
              Realmer Consulting Agency is here to serve you. Join us today and let us help you achieve your career and business aspirations!</p>
          </div>
        </section>
    </div>
  );
}

