import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGithubSquare,
  FaBootstrap,
  FaUserGraduate,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
const Skills = () => {
  const skills = [
    {
      Name: "HTML5 ",
      Degree: "100%",
      Icon: <FaHtml5 />,
      color: "#FF5733",
    },
    {
      Name: "CSS",
      Degree: "95%",
      Icon: <FaCss3Alt />,
      color: "#1572b6",
    },
    {
      Name: " JAVASCRIPT",
      Degree: "80%",
      Icon: <IoLogoJavascript />,
      color: "#f7df1e",
    },
    {
      Name: " SASS",
      Degree: "98%",
      Icon: <FaSass />,
      color: "#cf649a",
    },
    {
      Name: " REACTJS",
      Degree: "80%",
      Icon: <FaReact />,
      color: "#61dafb",
    },
    {
      Name: " NEXTJS",
      Degree: "80%",
      Icon: <RiNextjsFill />,
      color: "white",
    },
    {
      Name: " GITHUB",
      Degree: "90%",
      Icon: <FaGithubSquare />,
      color: "white",
    },
    {
      Name: " REDUX",
      Degree: "95%",
      Icon: <SiRedux />,
      color: "#764abc",
    },
    {
      Name: " BOOTSTRAP",
      Degree: "90%",
      Icon: <FaBootstrap />,
      color: "#8307fa",
    },
  ];
  return (
    <div className="Skills">
      <Container>
        <Row>
          <Col md={12} lg={6} className="Skills-Card">
            <div className="head">MY SKILLS</div>

            {skills.map((skills) => (
              <div className="skills-Details" key={skills.Name}>
                <div className="lable">
                  {skills.Name}
                  <span style={{ color: skills.color }}> {skills.Icon}</span>
                </div>
                <div className="progress-container">
                  <div
                    className="progress-width"
                    data-degree={skills.Degree}
                    style={{ width: skills.Degree }}
                  ></div>
                </div>
              </div>
            ))}
          </Col>
          <Col md={12} lg={6} className="Image-Card">
            <Image
              src="/slills.png"
              alt="skills"
              width={700}
              height={500}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
