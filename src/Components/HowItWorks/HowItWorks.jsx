import React from 'react';
import '../../assets/style/buttons.css';
import '../../assets/style/howItWorks.css';

const HowItWorks = () => {
  return (
    <div>
      <section className="how-to">
        <div className="partition">
          <h2 className="section-title">How it works</h2>
          <p className="section-text">
            One, Two, Three steps to make your vote count
          </p>
          <div className="steps">
            <div className="column step">
              <i className="fas fa-4x fa-user-circle" />
              <p className="section-text1">
                Create an account and login as a user. You can decide to update
                your profile for better view on the platform
              </p>
            </div>
            <div className="column step">
              <i className="fas fa-4x fa-check-circle" />
              <p className="section-text1">
                Vote to any political party of your choice by selecting the
                party, your favorite candidate and submit your vote.
              </p>
            </div>
            <div className="column step">
              <i className="fas fa-4x fa-th-list" />
              <p className="section-text1">
                You can view the results of the election by the end of the
                election at your profile page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HowItWorks;
