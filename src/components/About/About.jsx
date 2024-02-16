import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutimage} alt="about image" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="cuusor Image"
              className={styles.aboutImage}
            />
            <div className={styles.aboutText}>
              <h3>Fronted Devloper</h3>
              <p>
                I am a Frontend Devloper with Experience in buliding websites
                and DSA with Java
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server-image" />
            <div className={styles.aboutText}>
              <h3>Backend Devloper</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                maiores similique vitae vero accusantium quidem. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Voluptatem, sequi.{" "}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="server-image" />
            <div className={styles.aboutText}>
              <h3>UI/UX Devloper</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                maiores similique vitae vero accusantium quidem. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Voluptatem, sequi.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
