import React from 'react';
import errorDisplay from '../assets/img/error.gif';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const notFound = () => {
  return (
    <div>
      <Header />
      <div className="page-not-found">
        <img src={errorDisplay} alt="eror" />
      </div>
      <Footer />
    </div>
  );
};
export default notFound;
