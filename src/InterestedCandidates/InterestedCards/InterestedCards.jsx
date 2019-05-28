import React from 'react';
import PropTypes from 'prop-types';
import '../../Party/PartyCards/partycard.css';

const InterestedCard = ({ name, party, office }) => {
  return (
    <div className="main-title">
      <div className="image_title_bio">
        <div className="title_text_box">
          <p className="name">{name}</p>
          {party ? <p className="user_bio">{party}</p> : <p>Not updated!</p>}
          {office ? <p className="user_bio">{office}</p> : <p>Not updated!</p>}
        </div>
      </div>
    </div>
  );
};

InterestedCard.propTypes = {
  name: PropTypes.string.isRequired,
  party: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired,
};

export default InterestedCard;
