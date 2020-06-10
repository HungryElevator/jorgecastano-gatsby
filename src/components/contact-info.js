import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FcLike, FcAbout, FcCommandLine, FcGraduationCap, FcIdea } from 'react-icons/fc';

import styles from './contact-info.module.scss';
import SocialIcons from './social-icons';


const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          jorge
          email
        }
      }
    }
  `);
  const info = data.site.siteMetadata;

  return (
    <div className={styles.Contact}>
      <h1>CONTACT</h1>
      <div className={styles.Block}>
        <section>
          <p>Say hello on social media!</p>
          <SocialIcons theme="Dark" position="Left" />
        </section>
        <section className={styles.Mail}>
          <p>Send me an email</p>
          <a href={`mailto:${info.email}`}>{info.email}</a>
        </section>
      </div>
      <h3>Let's work together</h3>
      <section className={styles.ShortInfo}>
        <p>{['I ', <FcLike />, ' Software Development in many ways.']}</p>
        <p>I like to speak about JavaScript and modern development in conferences and events, but I am also a doer with hands-on experience in famous frameworks and libraries.</p>
        <p>I believe that it is better to train developers and retain talent instead of looking <i>ad infinitum</i> for a new best fit. Code quality lasts over quick development. Practice makes perfection.</p>
        <p>All that said, this is how we can collaborate:</p>
      </section>
      <div className={styles.Block}>
        <section className={styles.Work}>
          <h4><FcAbout /> <span>Conferences</span></h4>
          <p>I can host or speak on your next corporate event / tech conference. My talks include technology with high doses of humor. Invite me to speak.</p>
          <ul>
            <li>Digital Transformation</li>
            <li>Future & Technology</li>
            <li>Day-to-day Software Development</li>
            <li>Team engagement & Gamification</li>
            <li>Motivation & Happiness at Work</li>
          </ul>
        </section>
        <section className={styles.Work}>
          <h4><FcCommandLine /> <span>Coding</span></h4>
          <p>I can build your next MVP, design your next app architecture, work as a Senior Developer onsite / freelance, find the reasons of bad performance in your code, or be the next Tech Lead in your Front End Team.</p>
          <ul>
            <li>Front End Development</li>
            <li>Software Engineering Consultancy</li>
            <li>Lead & Principal Engineer Roles</li>
            <li>JavaScript Solutions</li>
            <li>Code Quality Analysis</li>
          </ul>
        </section>
        <section className={styles.Work}>
          <h4><FcGraduationCap /> <span>Mentorship</span></h4>
          <p>I can help your development team in their own road to be Senior Developers. I strongly believe that training your team is preferable than looking for a new perfect match.</p>
          <ul>
            <li>Career Development & Personal Path</li>
            <li>Programming Best Practices</li>
            <li>Applications Architecture</li>
            <li>Data Structures & Algorithms</li>
            <li>JavaScript Pros & Cons</li>
            <li>Pair Programming</li>
          </ul>
        </section>
        <section className={styles.Work}>
          <h4><FcIdea /> <span>Volunteering</span></h4>
          <p>I am of the idea that technology should be for everyone. If you are part of a small community, school, or association, and can't afford to pay an education in programming, we can talk about how I can help you.</p>
          <ul>
            <li>Programming master classes</li>
            <li>Software applications & uses</li>
            <li>How to get into tech</li>
            <li>Tech benefits & Tech jobs</li>
            <li>Where to start</li>
          </ul>
        </section>
      </div>
      <h2>Get in touch!</h2>
      <div className={styles.Block}>
        <section>
          <p>Reach me online</p>
          <SocialIcons theme="Dark" position="Left" />
        </section>
        <section className={styles.Mail}>
          <p>Or send me an email</p>
          <a href={`mailto:${info.email}`}>{info.email}</a>
        </section>
      </div>
    </div>
  );
};

export default ContactInfo;