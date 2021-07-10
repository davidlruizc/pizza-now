import * as React from 'react';
import HomeList from '../index';
import { MockProvider } from 'utils/tests/MockProvider';

describe('<HomeList />', () => {
  test('Home list renders', () => {
    const component = MockProvider('/', <HomeList />);
    expect(component.length).toEqual(1);
  });
});
