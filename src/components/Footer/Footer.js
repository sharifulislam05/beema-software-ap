import styles from "../../../styles/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__body}>
        <div className={styles.footer__body_logo}>
          <img src="/static/images/logo_nobrand 2.png" alt="" />
          <p>Beema</p>
        </div>
        <h3 className={styles.footer__body_text}>
          Just say the magical word <br /> and we will do the rest
        </h3>
        <button className={styles.footer__body_btn}>Start your Project</button>
      </div>
      <div>
        <div className={styles.footer__item_wrapper}>
          <ul>
            <li> Privacy Policy</li>
            <li> Terms of Service</li>
            <li> Contact</li>
          </ul>
          <div>
            <FontAwesomeIcon icon={faTwitter} className={styles.footer__icon} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
