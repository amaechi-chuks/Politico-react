/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Header from '../Components/Header/Header';
import LandingPage from '../Components/LandingPage/LandingPage';
import HowItWorks from '../Components/HowItWorks/HowItWorks';
import FeaturedCandidates from '../Components/FeaturedCandidates/FeaturedCandidates';
import Footer from '../Components/Footer/Footer';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <HowItWorks />
      <FeaturedCandidates />
      <Footer />
    </div>
  );
};
