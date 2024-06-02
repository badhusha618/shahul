import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/custom.css';

const Contact = () => {
  return (
    <div name='contact' className='w-100 min-vh-100 bg-dark d-flex justify-content-center align-items-center p-4'>
      <div className='d-flex flex-column max-w-600 w-100'>
        <div className='pb-4 d-flex flex-column justify-content-center w-100 h-100 align-items-center'>
          <p className='display-4 font-weight-bold border-bottom border-info text-light text-center'>Contact</p>
          <p className='text-light py-3'>Send me a message</p>
        </div>
        <input className='form-control mb-3' type='text' placeholder='Name' name='name' />
        <input className='form-control mb-3' type='email' placeholder='Email' name='email' />
        <textarea className='form-control mb-3' name='message' rows='10' placeholder='Message'></textarea>
        <button className='btn btn-outline-light btn-block hover-bg-info'>Let's Collaborate</button>
      </div>
    </div>
  );
};

export default Contact;
