import { render, screen } from '@testing-library/react';

import Statistics from './Statistics';

test('Render page', () => {
  render(<Statistics />);

  const display = screen.getByText(/Estadisticas/i);

  expect(display).toBeVisible();
});
