import { mount } from 'enzyme';
import React from 'react';
import Header from './index';

describe('<Header />', () => {
  const mockHandler = jest.fn();

  test('render component', () => {
    mount(<Header onNavigate={mockHandler} />);
  });

  test('click create new pizza', () => {
    const wrapper = mount(<Header onNavigate={mockHandler} close={false} />);
    wrapper.find('button').simulate('click');
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
