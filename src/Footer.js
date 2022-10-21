import telImg from "./images/tel.png";
import mailImg from "./images/mail.png";
import linkedinImg from "./images/in.png";
import gitImg from "./images/git.png";
import messengerImg from "./images/messenger.png";
import ContactItem from "./ContactItem";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h2 style={{ color: "white" }}>Bored activities</h2>
        <p>
          This is my first React application. It is my own implementation of{" "}
          <a
            href="https://www.boredapi.com/documentation#endpoints-price"
            target="_blank"
            rel="noreferrer"
          >
            Bored API.
          </a>{" "}
          Check out source code on{" "}
          <a
            href="https://github.com/kamilinw/Bored-activities"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository
          </a>
        </p>
      </div>
      <div className="footer-contact">
        <h2 style={{ color: "white" }}>Contact</h2>
        <div className="contact-details">
          <div className="contact-name">
            <p>Kamil Wnęk</p>
          </div>
          <ContactItem
            imgPath={linkedinImg}
            alt="linkedin"
            info="LinkedIn"
            link="https://www.linkedin.com/in/wnek-kamil/"
          />
          <ContactItem
            imgPath={telImg}
            alt="telephone"
            info="+48 607 473 375"
          />
          <ContactItem
            imgPath={gitImg}
            alt="github"
            info="Github"
            link="https://github.com/kamilinw"
          />
          <ContactItem
            imgPath={mailImg}
            alt="mail"
            info="kamil.wnek@gmail.com"
          />
          <ContactItem
            imgPath={messengerImg}
            alt="messenger"
            info="Messenger"
            link="https://www.facebook.com/kamil.wnek.96"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
