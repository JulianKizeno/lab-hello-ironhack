import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the main action', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Awsome!/i);
  expect(linkElement).toBeInTheDocument();
});
