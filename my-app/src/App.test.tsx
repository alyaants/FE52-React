import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('tab', () => {
  render(<App />);
  const linkElement = screen.getByText(/tab/i);
  expect(linkElement).toBeInTheDocument();
});
