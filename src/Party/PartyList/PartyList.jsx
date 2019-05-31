import React from 'react';
import PropTypes from 'prop-types';
import PartyCards from '../PartyCards/PartyCards';
import '../PartyCards/partycard.css';

const PartyList = props => {
  const { partyList, modalOpen, adminRejectRequest, user } = props;
  return (
    <div>
      <div className="main_page_title">
        <div className="main-grid">
          {partyList.map(party => (
            <PartyCards
              user={user}
              key={party.id}
              logoUrl={party.logoUrl}
              name={party.name}
              initials={`${party.name
                .split(' ')
                .pop()
                .toUpperCase()}`}
              hqAddress={party.hqaddress}
              modalOpen={() => modalOpen(party.id)}
              adminRejectRequest={() => adminRejectRequest(party.user_id)}
              button="Edit"
              button1="Delete"
              btnClass="btn-accept"
              btnClass1="btn-reject"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

PartyList.defaultProps = {
  partyList: [],
  user: [],
};

PartyList.propTypes = {
  partyList: PropTypes.shape(),
  user: PropTypes.shape(),
  modalOpen: PropTypes.func.isRequired,
  adminRejectRequest: PropTypes.func.isRequired,
};

export default PartyList;
