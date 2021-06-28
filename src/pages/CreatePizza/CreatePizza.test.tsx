import { shallow } from 'enzyme';
import React from 'react';
import CreatePizza from './index';

describe('<CreatePizza />', () => {
  test('rendering component', () => {
    shallow(<CreatePizza />);
  });
});
