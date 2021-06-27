import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from 'utils/tests';

test('full app rendering/navigation', () => {
  renderWithRouter(<App />);

  expect(screen.getByText(/pizza now/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  renderWithRouter(<App />, { route: '/something-that-does-not-match' });

  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});
