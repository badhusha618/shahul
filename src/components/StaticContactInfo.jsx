import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StaticContactInfo = () => {
  return (
    <div
      name="contact"
      className="w-100 min-vh-100 bg-dark text-white d-flex justify-content-center align-items-center p-4"
    >
      <div className="d-flex flex-column max-w-500 w-100">
        <div className="pb-4 d-flex flex-column justify-content-center w-100 align-items-center">
          <p className="display-4 font-weight-bold border-bottom border-info pb-2">
            Contact
          </p>
          <p className="text-secondary py-2">Here are my contact details:</p>
        </div>
        <div></div>
        <div className="col-12 bg-light text-dark p-3 rounded mb-3 custom-left-border">
          <p>Name: Shahul Hameed Badhusha</p>
        </div>
        <div className="col-12 bg-light text-dark p-3 rounded mb-3 custom-left-border">
          <p>Email: officialbadhusha@gmail.com</p>
        </div>
        <div className="col-12 bg-light text-dark p-3 rounded mb-3 custom-left-border">
          <p>Message: Feel free to reach out to me for collaboration or inquiries!</p>
        </div>
      </div>
    </div>
  );
}

export default StaticContactInfo;
