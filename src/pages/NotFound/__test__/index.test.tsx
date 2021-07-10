import * as React from 'react';
import { MockProvider } from 'utils/tests/MockProvider';
import NotFound from '../index';

describe('<NotFound />', () => {
  test('render content', () => {
    const component = MockProvider('/random', <NotFound />);
    expect(component.length).toEqual(1);
  });
});
