import { mount } from 'enzyme';
import React from 'react';
import NotFound from './index';

describe('<NotFound />', () => {
  test('render content', () => {
    mount(<NotFound />);
  });
});
