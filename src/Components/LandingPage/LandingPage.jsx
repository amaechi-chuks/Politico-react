import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/global/header.css';
import '../../assets/style/landing-page.css';
import '../../assets/style/global/buttons.css';
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
          <Link to="/signup" className="btn btn-white">
            Get Started
          </Link>
          <Link to="view-more-candidate" className="btn btn-hollow">
            View Candidates
          </Link>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
