import React from "react";
import { getImageUrl } from "../../utils";
import "./Expeirence.module.css";
import skils from "../../data/skills.json";
import history from '../../data/history.json';
import styles from './Expeirence.module.css';
const Expeirence = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experince</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skils.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillimgcontaner}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
            {
                history.map((hisoryItem,id)=>{
                    return <li key={id} className={styles.hisoryItem}>
                        <img src={getImageUrl(hisoryItem.imageSrc)} alt={hisoryItem.organisation}  />
                        <div className={styles.historyItemDeatils}>
                            <h3>{`${hisoryItem.role},${hisoryItem.organisation}`}</h3>
                            <p>{`${hisoryItem.startDate},${hisoryItem.endDate}`}</p>
                            <ul>
                                {hisoryItem.experiences.map((experice,id)=>{
                                    return <li key={id}>
                                        {experice}
                                    </li>
                                })}
                            </ul>
                        </div>
                    </li>
                })
            }
        </ul>
      </div>
    </section>
  );
};

export default Expeirence;
