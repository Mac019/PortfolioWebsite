import React, { useState } from "react";
import "./About.css";
import lap from "../assets/Lap.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={lap} alt="About" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Hi, I'm Makarand Jagadale, a frontend developer currently pursuing
              an engineering degree from Vishwakarma Institute of Technology,
              Pune. I specialize in creating dynamic and responsive web
              applications using technologies like React, Redux, HTML5, CSS3,
              JavaScript, and Figma. Feel free to browse my portfolio to see my
              work. You can contact me at 9322759443 or via email at
              makarandjagadale916@gmail.com
            </p>
            <div className="tab-title">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => opentab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
                onClick={() => opentab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => opentab("education")}
              >
                Education
              </p>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <ul>
                <li>
                  <span>Web Development</span>
                  <br />
                  React.js
MongoDB , 
Tailwind CSS ,
Express.js ,
Node.js , 
HTML5 ,
CSS3 ,
JavaScript
                </li>
               
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "experience" ? "active-tab" : ""
              }`}
              id="experience"
            >
              <ul>
                <li>
                  <span>Efilia Technologies
                  </span>
                  <br />
                  Currently working as a Web Developer
                </li>
               
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  <span>Vishwakarma Institute Of Technology Pune</span>
                  <br />
                  Pre-Final Year CGPA - 8.07
                </li>
                <li>
                  <span>Abasaheb Garware College</span>
                  <br />
                  12th Grade - 83.83% 
                </li>
                <li>
                  <span>Paranjape Vidya Mandir</span>
                  <br />
                  Schooling 10th Grade - 88%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
