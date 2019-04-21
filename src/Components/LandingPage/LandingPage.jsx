import React from 'react';
import '../../assets/style/header.css';
import '../../assets/style/landing-page.css';
import '../../assets/style/buttons.css';
import '../../assets/style/howItWorks.css';

const LandingPage = () => {
  return (
    <div>
      <section className="hero">
        <h2 className="hero-title">Your Vote Is Your Right</h2>
        <p className="hero-paragraph">
          Politico is a platform that enables citizens give their mandate to
          politicians running different government offices while building trust
          in the process through transparency.
        </p>
        <div className="hero-cta">
          <a href="./signup.html" className="btn btn-white">
            Get Started
          </a>
          <a href="./view-more-candidate.html" className="btn btn-hollow">
            View Candidates
          </a>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
