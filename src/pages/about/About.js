import cssImg from "../../images/css.png";
import htmlImg from "../../images/html.png";
import jsImg from "../../images/js.png";
import reactImg from "../../images/react.png";
import AboutTechnology from "../../components/AboutTechnology";
import AboutApplicationInfo from "../../components/AboutApplicationInfo";

const About = () => {
  return (
    <main className="about">
      <h2>Bored Activities</h2>
      <AboutApplicationInfo />
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
        My name is Kamil and I&apos;m software engineer. I&apos;m programming
        home automation solutions, as well as developing software for electric
        vehicle charging stations. Programming has always been my passion.
        I&apos;m also interested in web technologies including JavaScript,
        React, HTML, CSS, Java and REST API. I graduated with honors from
        Rzeszow University of Technology with a degree in mechatronics. I think
        a technical background will help me to understand and find solutions to
        complex problems.
      </p>
    </main>
  );
};

export default About;
