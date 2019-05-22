import React from 'react';
import Header from '../Components/Header/Header';
import errorDisplay from '../assets/img/ErrorImage.gif';

const notFound = () => {
  return (
    <div>
      <Header />
      <div className="page-not-found">
        <img src={errorDisplay} alt="eror" />
      </div>
    </div>
  );
};
export default notFound;
