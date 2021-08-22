import { render, screen } from '@testing-library/react';

import Stock from './Stock';

test('Render page', () => {
  render(<Stock />);

  const display = screen.getByText(/Stock/i);

  expect(display).toBeVisible();
});
