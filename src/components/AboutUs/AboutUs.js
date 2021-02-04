import styles from "../../../styles/about.module.scss";

const AboutUs = () => {
  return (
    <section>
      <div className={styles.about__header}>
        <h1>
          What others are saying <br /> about us
        </h1>
      </div>
      <div className={styles.feedbacks__container}>
        <div className={styles.feedback__wrapper}>
          <div>
            <img src="/static/images/quota.png" alt="" />
            <p className={styles.comments}>
              I very much enjoyed working with Beema and the team - they have an
              excellent grasp of their subject, and have created something great
              for us.
            </p>
          </div>
          <div className={styles.feedback__footer}>
            <img src="/static/images/Ellipse 6.png" alt="" />
            <p>John coner</p>
          </div>
        </div>
        <div className={styles.feedback__wrapper}>
          <div>
            <img src="/static/images/quota.png" alt="" />
            <p className={styles.comments}>
              I very much enjoyed working with Beema and the team - they have an
              excellent grasp of their subject, and have created something great
              for us.
            </p>
          </div>
          <div className={styles.feedback__footer}>
            <img src="/static/images/Ellipse 7.png" alt="" />
            <p>Megan borguer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
