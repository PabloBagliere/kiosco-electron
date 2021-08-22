import { render, screen } from '@testing-library/react';

import Product from './Product';

test('Render page', () => {
  render(<Product />);

  const display = screen.getByText(/Productos/i);

  expect(display).toBeVisible();
});
