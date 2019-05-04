import React from 'react';
import errorDisplay from '../assets/img/ErrorImage.gif';
import Header from '../Components/Global/Header';

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
