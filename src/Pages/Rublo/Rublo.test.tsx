import { render, screen } from '@testing-library/react';

import Rublo from './Rublo';

test('Render page', () => {
  render(<Rublo />);

  const display = screen.getByText(/Rublo/i);

  expect(display).toBeVisible();
});
