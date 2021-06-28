import { shallow } from 'enzyme';
import React from 'react';
import HomeList from './index';

describe('<HomeList />', () => {
  test('Home list renders', () => {
    shallow(<HomeList />);
  });
});
