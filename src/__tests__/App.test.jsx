import React from 'react';
import { shallow } from '../enzyme';

import App from '../components/App';

describe('List tests', () => {
  it('renders without crashing', ()=> {
    shallow(<App />);
  })
});
