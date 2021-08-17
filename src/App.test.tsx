import { render, screen } from '@testing-library/react';

import App from './App';

test('Prueba', () => {
  render(<App />);
  const linkElement = screen.getByText(/hola/i);

  expect(linkElement).toBeInTheDocument();
});
