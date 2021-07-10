import * as React from 'react';
import { MockProvider } from 'utils/tests/MockProvider';
import CreatePizza from '../index';

describe('<CreatePizza />', () => {
  test('rendering component', () => {
    const component = MockProvider('/create-pizza', <CreatePizza />);
    expect(component.length).toEqual(1);
  });
});
