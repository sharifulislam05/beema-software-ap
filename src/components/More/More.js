import styles from "../../../styles/more.module.scss";

const More = () => {
  return (
    <section>
      <div className={styles.more__header}>
        <p>More about Beema</p>
      </div>
      <div className={styles.more__wrapper}>
        <p className={styles.more__details}>
          Beema is about designing, building and deliverying best quality
          software for your company. <br /> <br />
          We make sure that you get the best software inferstracture and set of
          applications to ensure the best experience of your clients. <br />{" "}
          <br />
          So wether you are handling thousands of payment transactions or you’re
          just starting out, you are in the right place
        </p>
        <img
          src="/static/images/rocket_launch_ 1.png"
          alt=""
          className={styles.more__image}
        />
      </div>
    </section>
  );
};

export default More;
