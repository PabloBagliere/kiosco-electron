import { render } from '@testing-library/react';

import App from './App';

test('Render div and class', () => {
  const { container } = render(<App />);

  const app = container.querySelector('.App');

  expect(app).toBeVisible();
});
