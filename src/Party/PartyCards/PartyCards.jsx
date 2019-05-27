import React from 'react';
import PropTypes from 'prop-types';
import './partycard.css';

const ReviewerRequestCard = ({ name, logoUrl, hqAddress, initials }) => {
  return (
    <div className="main-title">
      <div className="image_title_bio">
        <div className="profile_image">
          {logoUrl ? (
            <img className="user_pic" src={logoUrl} alt="" />
          ) : (
            <p className="initials">{initials}</p>
          )}
        </div>
        <div className="title_text_box">
          <p className="name">{name}</p>
          {hqAddress ? (
            <p className="user_bio">{hqAddress}</p>
          ) : (
            <p>
              Currently this party has relocated to a different location. The
              hqAddress will soon be populated
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

ReviewerRequestCard.propTypes = {
  name: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  hqAddress: PropTypes.string.isRequired,
};

export default ReviewerRequestCard;
