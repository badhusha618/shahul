import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/custom.css';

const Skills = () => {
  return (
    <div name='skills' className='w-100 min-vh-100 bg-dark text-light'>
      {/* Container */}
      <div className='container p-4 d-flex flex-column justify-content-center w-100 h-100'>
        <div className='w-100 d-flex flex-column justify-content-center align-items-center mb-4' style={{ marginTop: '180px' }}>
          <p className='display-4 font-weight-bold border-bottom border-info text-center'>Skills</p>
          <p className='py-4 h2 text-center'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
        </div>
        <div className='row text-center py-4'>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>HTML</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>CSS</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>JAVASCRIPT</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>JQUERY</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>KNOCKOUT JS</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>REACT</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>GITHUB</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>.NET</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>PHP</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>BOOTSTRAP</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>MYSQL</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-sm-3 mb-4'>
            <div className='card bg-dark text-light shadow h-100 hover-zoom'>
              <div className='card-body'>
                <p className='card-text'>MSSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
