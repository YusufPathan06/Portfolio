import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yusuf Pathan </span>
            <br />I am a highly skilled ReactJS developer with 2.6 years of
            experience designing and implementing complex web applications. I
            have a deep understanding of React's component-based architecture
            and have developed a wide range of applications using React,
            including e-commerce platforms, social networks, and enterprise
            software.
            <br />I am proficient in a range of front-end technologies,
            including HTML, CSS, and JavaScript, and I have experience working
            with a variety of back-end technologies such as Node.js, Express,
            and MongoDB. I have also worked extensively with popular React
            libraries such as Redux, React Router, and Jest.
            <br />
            Throughout my career, I have consistently delivered high-quality
            code and innovative solutions to complex problems. I have a strong
            attention to detail and am committed to writing maintainable and
            scalable code. I am passionate about staying up-to-date with the
            latest developments in the ReactJS ecosystem and am always eager to
            learn and experiment with new technologies.
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
