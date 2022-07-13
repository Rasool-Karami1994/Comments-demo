import Header from "../components/Header";
import Footer from "../components/Footer";

const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayOut;
