import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Fell to reach Out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:mju646139@gmail.com">mju646139@gmail.com</a>
        </li>
        <li  className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkdin icon"
          />
          <a href="mailto:https://www.linkedin.com/in/krakeshfullstack">
            LinkdingProfile
          </a>
        </li>
        <li  className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          <a href="mailto:https://github.com/KolpurRakesh">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
