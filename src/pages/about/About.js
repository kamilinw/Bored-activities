import cssImg from "../../images/css.png";
import htmlImg from "../../images/html.png";
import jsImg from "../../images/js.png";
import reactImg from "../../images/react.png";
import AboutTechnology from "../../components/AboutTechnology";

const About = () => {
  return (
    <main className="about">
      <h2>Bored Activities</h2>
      <p>
        It is my own implementation of{" "}
        <a
          href="https://www.boredapi.com/documentation#endpoints-price"
          target="_blank"
          rel="noreferrer"
        >
          Bored API
        </a>
        , witch enables you to find things to do when you&apos;re bored. This is
        my first React application, witch was build during my learning process.
        Check out source code on{" "}
        <a
          href="https://github.com/kamilinw/Bored-activities"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>
      </p>
      <h2>Technologies</h2>
      <div className="tech">
        <AboutTechnology
          imgSrc={jsImg}
          alt="javaScript technology"
          name="JavaScript"
        />
        <AboutTechnology
          imgSrc={reactImg}
          alt="react technology"
          name="React"
        />
        <AboutTechnology imgSrc={htmlImg} alt="html technology" name="HTML" />
        <AboutTechnology imgSrc={cssImg} alt="CSS technology" name="CSS" />
      </div>
      <h2>About me</h2>
      <p>
        Programming has always been my passion. Right now I&apos;m software
        engineer and I&apos;m programming home automation solutions, as well as
        developing software for electric vehicle charging stations. For some
        time I&apos;m learning about web technologies. I think that the
        technical studies I have completed (Mechatronics at the Rzeszów
        University of Technology), will help me to understand real problems and
        find their solutions.
      </p>
    </main>
  );
};

export default About;
