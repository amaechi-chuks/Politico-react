import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <p className="credits">
          Politico | Copyright &copy; Amaechi-Chuks&nbsp;
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
