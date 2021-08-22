import { render, screen } from '@testing-library/react';

import CashDesk from './CashDesk';

test('Render page', () => {
  render(<CashDesk />);

  const display = screen.getByText(/caja/i);

  expect(display).toBeVisible();
});
