import { render, screen } from '@testing-library/react';

import Sales from './Sales';

test('Render page', () => {
  render(<Sales />);

  const display = screen.getByText(/Ventas/i);

  expect(display).toBeVisible();
});
