import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InterestedCards from '../InterestedCards/InterestedCards';
import '../../Party/PartyCards/PartyCards';

class InterestedList extends Component {
  componentDidMount = () => {
    const { fetchAllInterestdCandidate } = this.props;
    fetchAllInterestdCandidate();
  };

  render() {
    const { fetchInterestList } = this.props;
    return (
      <div>
        <div className="main_page_title">
          <div className="main-grid">
            {fetchInterestList.map(userInterest => (
              <InterestedCards
                key={userInterest.id}
                name={userInterest.firstname}
                party={userInterest.partyname}
                office={userInterest.officename}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

InterestedList.defaultProps = {
  fetchInterestList: [],
};

InterestedList.propTypes = {
  fetchInterestList: PropTypes.shape(),
  fetchAllInterestdCandidate: PropTypes.func.isRequired,
};

export default InterestedList;
