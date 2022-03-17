import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Container.less";

const Container = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Container;
