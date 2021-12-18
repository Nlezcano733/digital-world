import React from 'react';

const Footer = (props) => {

  return (
    <footer className="footer">
      <p className="font-text-sm text-center">Developed by Nlezcano - December 2021</p>
      <div className="footer-network">
        <a href={`https://github.com/Nlezcano733/eCommerce-Lezcano`}>
          <i className="fab fa-github-alt"></i>
        </a>
        <a href={`https://www.linkedin.com/in/nlezcano/`}>
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;