import Link from "next/link";
import headerStyles from "../../../styles/Header.module.scss";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <nav className={headerStyles.navbar}>
        <ul>
          <Link href="/">
            <div className={headerStyles.navbar__logo}>
              <img src="/static/images/logo_nobrand 2.png" alt="" />
              <a className={headerStyles.navbar__logo_text}>Beema</a>
            </div>
          </Link>
          <Link href="/about">
            <button className={headerStyles.navbar__btn_start}>
              Get Started
            </button>
          </Link>
          <Link href="/login">
            <a className={headerStyles.navbar__btn_login}>Login</a>
          </Link>
        </ul>
      </nav>
      <main>
        <div className={headerStyles.header__main}>
          <img src="/static/images/logo_nobrand 1.png" alt="" />
          <h3 className={headerStyles.header__main_logo_text}>Beema</h3>
          <p className={headerStyles.header__main_text}>
            Software Development <br /> From the best in the industry
          </p>
          <button className={headerStyles.header__main_btn}>
            Start your Project
          </button>
        </div>
      </main>
    </div>
  );
};

export default Header;
