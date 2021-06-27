import React from 'react';
import Content from './index';
import renderer from 'react-test-renderer';

describe('<Content />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Content>Pizza Now</Content>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
