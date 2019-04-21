import React from 'react';
import { shallow } from '../../src/enzyme';

import App from '../../src/App';

describe('List tests', () => {
  it('renders without crashing', ()=> {
    shallow(<App />);
  })
});
