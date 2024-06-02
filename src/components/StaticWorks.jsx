import React from 'react';
import code from '../assets/code2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Works = () => {
  return (
    <div name='work' className='w-100 min-vh-100 text-light bg-dark'>
      <div className='container p-4 d-flex flex-column justify-content-center w-100 h-100'>
        <div className='pb-4 w-100 d-flex flex-column justify-content-center align-items-center' style={{ marginTop: '200px' }}>
          <p className='display-4 font-weight-bold border-bottom border-info pb-2'>
            Work
          </p>
          <p className='py-4 h2'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='row'>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='col-md-6 col-lg-4 shadow-lg bg-image rounded d-flex justify-content-center align-items-center m-auto custom-div'
          >
            {/* Hover Effects */}
            <div className='overlay d-flex flex-column justify-content-center align-items-center text-center text-light'>
              <span className='h4 font-weight-bold'>
                Telegram Chatbot Application
              </span>
              <p className='text-center'>TELEGRAM CHAT BOT is an Online Search Bot. UI. The main purpose for developing chatbot is to make automatic response without end user. It is an online chatbot system through which customers can view google search, youtube search, and website search. This project is made to be very user-friendly.</p>
              <div className='pt-4 text-center'>
                <a href='https://github.com/badhusha618/Telegram-chatbot'>
                  <button className='btn btn-light text-dark font-weight-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <div
            style={{ backgroundImage: `url(${code})` }}
            className='col-md-6 col-lg-4 shadow-lg bg-image rounded d-flex justify-content-center align-items-center m-auto custom-div'
          > */}
            {/* Hover Effects */}
            {/* <div className='overlay d-flex flex-column justify-content-center align-items-center text-center text-light'>
              <span className='h4 font-weight-bold'>
                CBT Application
              </span>
              <p className='text-center'>A CBT web application built with React and MongoDB</p>
              <div className='pt-4 text-center'>
                <a href='/'>
                  <button className='btn btn-light text-dark font-weight-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Works;
