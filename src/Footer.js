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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut
          euismod ligula, id vehicula libero. Etiam non orci felis. Nunc sed
          ultricies risus. Maecenas iaculis vitae felis sed bibendum. Sed ut
          egestas nisl. Nulla iaculis suscipit risus id porta. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Vivamus tempus magna quis semper feugiat.
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
