import React from 'react';
import { shallow } from '../enzyme';

import App from '../App';

describe('App tests', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
