import styles from "../../../styles/quality.module.scss";

const Quality = () => {
  return (
    <div className={styles.quality__wrapper}>
      <h1 className={styles.quality__head}>Best Quality Software</h1>
      <div className={styles.quality__card_wrapper}>
        <div>
          <h3 className={styles.quality_card_head}>
            Fully integrated services
          </h3>
          <p className={styles.quality__card_body}>
            We build and deliver fully integrated webapps with customized
            control panels that fit your compnay needs.
          </p>
        </div>
        <div className={styles.quality__card_img}>
          <img src="/static/images/quality1.png" alt="" />
        </div>
      </div>
      <div className={styles.quality__card_wrapper}>
        <div className={styles.quality__card_img}>
          <img src="/static/images/quality1.png" alt="" />
        </div>
        <div>
          <h3 className={styles.quality_card_head}>Mobile optimized</h3>
          <p className={styles.quality__card_body}>
            We build and deliver fully integrated webapps with customized
            control panels that fit your compnay needs.
          </p>
        </div>
      </div>
      <div className={styles.quality__card_wrapper}>
        <div>
          <h3 className={styles.quality_card_head}>Quality is our priority</h3>
          <p className={styles.quality__card_priority}>
            We have teams of professional developers, designers and managers
            that ensures delivering the best software quality for your company
          </p>
        </div>
        <div className={styles.quality__card_img}>
          <img src="/static/images/quality3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Quality;
