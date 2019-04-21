/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import HowItWorks from './components/HowItWorks/HowItWorks';
import FeaturedCandidates from './components/FeaturedCandidates/FeaturedCandidates';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LandingPage />
        <HowItWorks />
        <FeaturedCandidates />
      </div>
    );
  }
}
export default App;
