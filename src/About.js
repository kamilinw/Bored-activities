import cssImg from "./images/css.png";
import htmlImg from "./images/html.png";
import jsImg from "./images/js.png";
import reactImg from "./images/react.png";
import telImg from "./images/tel.png";
import mailImg from "./images/mail.png";
import linkedinImg from "./images/in.png";
import gitImg from "./images/git.png";
import messengerImg from "./images/messenger.png";
import ContactItem from "./ContactItem";

const About = () => {
  return (
    <div className="about">
      <h2>Bored Activities</h2>
      <p>
        This app was developed while I was learning React. It is my own
        implementation of{" "}
        <a
          href="https://www.boredapi.com/documentation#endpoints-price"
          target="_blank"
          rel="noreferrer"
        >
          Bored API.
        </a>
      </p>
      <h2>Technologies</h2>
      <div className="tech">
        <img src={jsImg} alt="javaScript" />
        <img src={reactImg} alt="react" />
        <img src={htmlImg} alt="html" />
        <img src={cssImg} alt="CSS" />
      </div>
      <br />
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut
        euismod ligula, id vehicula libero. Etiam non orci felis. Nunc sed
        ultricies risus. Maecenas iaculis vitae felis sed bibendum. Sed ut
        egestas nisl. Nulla iaculis suscipit risus id porta.
      </p>
    </div>
  );
};

export default About;
