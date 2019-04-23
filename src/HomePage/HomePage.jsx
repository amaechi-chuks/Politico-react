/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Header from '../components/Header/Header';
import LandingPage from '../components/LandingPage/LandingPage';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import FeaturedCandidates from '../components/FeaturedCandidates/FeaturedCandidates';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <HowItWorks />
      <FeaturedCandidates />
    </div>
  );
};
