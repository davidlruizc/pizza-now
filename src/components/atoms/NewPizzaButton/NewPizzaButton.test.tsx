import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import NewPizzaButton from './index';

describe('<NewPizzaButton />', () => {
  test('render button with click', () => {
    const mockHandler = jest.fn();

    const component = render(<NewPizzaButton onClick={mockHandler} />);

    const button = component.getByRole('button');
    fireEvent.click(button);

    expect(mockHandler.mock.calls.length).toEqual(1);
  });
});
