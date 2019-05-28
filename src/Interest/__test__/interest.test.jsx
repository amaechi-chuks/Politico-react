import React from 'react';
import { shallow } from 'enzyme';
import InterestForm from '../InterestForm/InterestForm';

describe('Interest component', () => {
  it('should match snapshot', () => {
    const wrap = <InterestForm />;
    expect(wrap).toMatchSnapshot();
  });
});
