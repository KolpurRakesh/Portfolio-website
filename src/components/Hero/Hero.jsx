import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "Hi, I'm Rakesh";
  const typingSpeed = 100; // Adjust typing speed as needed
  const loopDelay = 1000; // Adjust loop delay as needed

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= textToType.length) {
        setTypedText(textToType.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedText(""); // Reset typed text
          index = 0;
          // Restart typing animation after loop delay
          setInterval(() => {
            if (index <= textToType.length) {
              setTypedText(textToType.slice(0, index));
              index++;
            } else {
              clearInterval(typingInterval);
            }
          }, typingSpeed);
        }, loopDelay);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className={styles.title}>{typedText}</h1>
        </motion.div>
        <p className={styles.description}>
        Full Stack Web Developer | DSA in Java | MS Office Expert | Frontend Web Development Enthusiast | Video Editor | B. Com Business Analytics Student.
        </p>
        <span className={styles.mobile}> Full Stack Web Developer </span>
        <a href="mailto:mju646139@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        className={styles.heroimage}
        src={getImageUrl("hero/rakhi.webp")}
        alt="Hero Image of hero"
        style={{
          
        }}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
