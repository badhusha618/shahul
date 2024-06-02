import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div
      name="home"
      className="min-vh-100 w-100 bg-dark text-white d-flex justify-content-center align-items-center"
    >
      <div className="container d-flex flex-column align-items-center justify-content-center h-100 px-3 flex-md-row">
        <div className="d-flex flex-column justify-content-center h-100 text-center text-md-left">
          <h2 className="display-4 font-weight-bold">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-secondary py-4 max-w-md mx-auto mx-md-0">
            I'm a dedicated Full Stack Web Developer with 3 years of experience in building and maintaining responsive web applications. My expertise spans across various technologies, enabling me to handle both front-end and back-end development seamlessly.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="btn btn-primary d-flex align-items-center"
            >
              About Me
              <span className="ml-2 d-inline-flex align-items-center">
                <HiArrowNarrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-4 mt-md-0">
          <img
            src={me}  
            alt="my profile"
            className="rounded-2xl mx-auto w-75 w-md-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
