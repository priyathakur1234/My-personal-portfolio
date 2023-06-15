import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, My Name is Priya Thakur</h2>
        <div className="prompt">
          <p> I am an Enthusiastic and dedicated computer engineering undergraduate.
           </p>
          <LinkedInIcon/>
          <div>
          <a href="https://www.linkedin.com/in/priya-thakur-310455204/">LinkedInIcon</a>
        </div>
    
          <EmailIcon />
          <div>
            <a href={`mailto:${"thepriyathakur1@gmail.com"}`}>EmailIcon</a>
          </div>
          <GithubIcon />
          <div>
            <a href=" https://github.com/priyathakur1234">GithubIcon</a>
          </div>
          </div>
          </div>
          
        <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM,
              BootStrap, Yarn, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

    
      export default Home;
