/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Components/Global/Buttons';
import '../../Party/PartyCards/partycard.css';

class InterestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interestDetails: {
        office: '',
        party: '',
      },
    };
  }

  handleChange = ({ target }) => {
    const { interestDetails } = this.state;
    interestDetails[target.id] = target.value;
    this.setState({ interestDetails });
  };

  handleClick = () => {
    const { declareInterest } = this.props;
    const id = JSON.parse(localStorage.getItem('user')).id;
    declareInterest(id);
  };

  render() {
    const { partyList, officeList } = this.props;
    const { officeList: allOffice } = officeList;
    const { partyList: allParties } = partyList;
    return (
      <div className="main-title">
        <div className="image_title_bio">
          <div className="form-card">
            <label htmlFor="issue-type">
              Select Political Party
              <span>*</span>
            </label>
            <select id="party" onChange={this.handleChange}>
              <option default>-- Select Political Party --</option>
              {allParties.map(party => (
                <option key={party.id}>{party.name}</option>
              ))}
            </select>
            <label htmlFor="issue-type">
              Select Office Type
              <span>*</span>
            </label>
            <select onChange={this.handleChange}>
              <option default>-- Select Office Type --</option>
              {allOffice.map(office => (
                <option key={office.id}>{office.name}</option>
              ))}
            </select>
            <Button
              value="Apply"
              className="btn btn-primary user-form"
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
InterestForm.defaultProps = {
  officeList: {},
  partyList: {},
};

InterestForm.propTypes = {
  declareInterest: PropTypes.func.isRequired,
  officeList: PropTypes.shape(),
  partyList: PropTypes.shape(),
};
export default InterestForm;
