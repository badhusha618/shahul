import React from 'react';
import code from '../assets/code2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/custom.css';

const Works = () => {
  return (
    <div name='work' className='w-100 min-vh-100 text-light bg-dark'>
      <div className='container p-4 d-flex flex-column justify-content-center w-100 h-100'>
        <div className='pb-8 w-100 d-flex flex-column align-items-center' style={{ marginTop: '200px' }}>
          <p className='display-4 font-weight-bold border-bottom border-info text-center text-light'>
            Work
          </p>
          <p className='h4 py-3 text-center'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='row'>
          {/* Grid Item */}
          {[...Array(6)].map((_, index) => (
            <div className='col-12 col-sm-6 col-md-4 mb-4' key={index}>
              <div
                style={{ backgroundImage: `url(${code})` }}
                className='shadow-lg rounded-md d-flex justify-content-center align-items-center bg-image hover-opacity'
              >
                {/* Hover Effects */}
                <div className='opacity-0 hover-opacity-content d-flex flex-column justify-content-center align-items-center'>
                  <span className='text-lg font-weight-bold text-white'>
                    CBT Application
                  </span>
                  <p className='text-center'>A CBT web application built with React and MongoDB</p>
                  <div className='pt-3 text-center'>
                    <a href='/'>
                      <button className='btn btn-light m-2'>
                        Demo
                      </button>
                    </a>
                    <a href='/'>
                      <button className='btn btn-light m-2'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
