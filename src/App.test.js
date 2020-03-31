import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Les paragraphes sont séparés par une ligne vide', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/sont séparés par une ligne/i);
  expect(linkElement).toBeInTheDocument();
});
