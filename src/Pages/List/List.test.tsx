import { render, screen } from '@testing-library/react';

import List from './List';

test('Render page', () => {
  render(<List />);

  const display = screen.getByText(/Listado/i);

  expect(display).toBeVisible();
});
