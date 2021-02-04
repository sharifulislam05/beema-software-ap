import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import More from "../More/More";
import Quality from "../Quality/Quality";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Quality />
      <AboutUs />
      <More />
      <Footer />
    </div>
  );
};

export default Layout;
