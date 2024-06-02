import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-100 min-vh-100 bg-dark text-light d-flex justify-content-center align-items-center"
    >
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <div className="py-4 rounded bg-info d-flex flex-column justify-content-center align-items-center w-75" style={{ marginTop: '200px' }}>
          <div className="container mb-4">
            <div className="row mb-4">
              <div className="col text-center">
                <p className="h1 font-weight-bold border-bottom border-dark">
                  About
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm text-right h2 font-weight-bold">
                <p>
                  Hi. I'm Shahul Hameed Badhusha, nice to meet you. Please take a
                  look around.
                </p>
              </div>
              <div className="col-sm">
                <p>
                  {" "}
                  💼 As a passionate Software Developer, I bring a wealth of experience and expertise to the table. I thrive on solving complex problems, creating innovative solutions, and helping others succeed.
                  <br/>
                  🚀 My mission is to drive positive change in the tech industry, deliver exceptional user experiences, and empower businesses with data-driven insights.
                  <br/>
                  🌍 I'm a firm believer in the power of continuous learning, effective communication, and diversity and inclusion. I stay ahead of the curve by keeping up with emerging trends, taking on new challenges, and mentoring others.
                  <br/>
                  🤝 I'm here to connect with like-minded professionals, exchange ideas, and explore opportunities for collaborations, new ventures, etc. Feel free to reach out, and let's embark on this journey together.
                  <br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
