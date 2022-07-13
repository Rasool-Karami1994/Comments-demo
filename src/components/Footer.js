import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="icons-container">
        <a href="https://www.instagram.com/rasoolkarami_1994/">
          <AiFillInstagram />
        </a>
        <a href="http://github.com/Rasool-karami1994">
          <AiFillGithub />
        </a>
        <a href="mailto:rasoolkarami2304@gmail.com?cc=email-cc@gmail.com&bcc=email-bcc@gmail.com&subject=Subject Using Mailto.co.uk&body=Email Using Body">
          <SiGmail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
