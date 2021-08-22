import { render, screen } from '@testing-library/react';

import Sell from './Sell';

test('Render page', () => {
  render(<Sell />);

  const display = screen.getByText(/Vender/i);

  expect(display).toBeVisible();
});
