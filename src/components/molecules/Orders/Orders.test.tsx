import React from 'react';
import Orders from './index';
import { MockProvider } from '../../../utils/tests/MockProvider';

describe('<Orders />', () => {
  test('render component', () => {
    MockProvider('/', <Orders />);
  });
});
