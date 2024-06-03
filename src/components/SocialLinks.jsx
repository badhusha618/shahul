// components/SocialLinks.js

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const handleResumeClick = () => {
        window.open(process.env.PUBLIC_URL + '/assets/resume.pdf', '_blank');
      };
    
  return (
    <div className="d-none d-lg-flex flex-column position-fixed top-50 start-0 translate-middle-y">
      <ul className="list-unstyled mb-0">
        <li className="d-flex align-items-center mb-3" style={{ marginLeft: '-100px', transition: 'margin-left 0.3s' }}>
          <a
            className="d-flex align-items-center text-white bg-primary p-3 rounded-end"
            href="https://www.linkedin.com/in/badhusha2000/"
            onMouseEnter={e => e.currentTarget.parentNode.style.marginLeft = '-10px'}
            onMouseLeave={e => e.currentTarget.parentNode.style.marginLeft = '-100px'}
          >
            Linkedin <FaLinkedin size={30} className="ms-auto" />
          </a>
        </li>
        <li className="d-flex align-items-center mb-3" style={{ marginLeft: '-100px', transition: 'margin-left 0.3s' }}>
          <a
            className="d-flex align-items-center text-white bg-secondary p-3 rounded-end"
            href="https://github.com/badhusha618"
            onMouseEnter={e => e.currentTarget.parentNode.style.marginLeft = '-10px'}
            onMouseLeave={e => e.currentTarget.parentNode.style.marginLeft = '-100px'}
          >
            Github <FaGithub size={30} className="ms-auto" />
          </a>
        </li>
         <li className="d-flex align-items-center mb-3" style={{ marginLeft: '-100px', transition: 'margin-left 0.3s' }}>
          <button
            className="d-flex align-items-center text-white bg-secondary p-3 rounded-end border-0"
            onClick={handleResumeClick}
            onMouseEnter={e => e.currentTarget.parentNode.style.marginLeft = '-10px'}
            onMouseLeave={e => e.currentTarget.parentNode.style.marginLeft = '-100px'}
          >
            Resume <BsFillPersonLinesFill size={30} className="ms-auto" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;

