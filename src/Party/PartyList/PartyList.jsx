import React from 'react';
import PropTypes from 'prop-types';
import PartyCards from '../PartyCards/PartyCards';
import '../PartyCards/partycard.css';

const PartyList = props => {
  const { partyList, modalOpen, deleteParty, user, fetchAllParty } = props;
  return (
    <div>
      <div className="main_page_title">
        <div className="main-grid">
          {partyList.map(party => (
            <PartyCards
              user={user}
              key={party.id}
              logourl={party.logourl}
              name={party.name}
              initials={`${party.name
                .split(' ')
                .pop()
                .toUpperCase()}`}
              hqAddress={party.hqaddress}
              modalOpen={() => modalOpen(party.id)}
              fetchAllParty={fetchAllParty}
              deleteParty={() => deleteParty(party.id)}
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
  deleteParty: PropTypes.func.isRequired,
  fetchAllParty: PropTypes.func.isRequired,
};

export default PartyList;
