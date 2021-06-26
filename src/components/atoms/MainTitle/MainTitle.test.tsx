import { render, screen } from '@testing-library/react';
import React from 'react';
import MainTitle from './index';

describe('<MainTitle />', () => {
  test('renders an image emoji', () => {
    render(<MainTitle />);

    const emoji = screen.getByRole('img');
    expect(emoji).toHaveAttribute('src', 'pizza.png');
    expect(emoji).toHaveAttribute('alt', 'pizza-emoji');
  });

  test('renders title content', () => {
    const component = render(<MainTitle />);

    component.getByText(/Pizza Now/i);
  });
});
