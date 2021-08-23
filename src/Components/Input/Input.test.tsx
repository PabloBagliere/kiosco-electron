import { render, screen } from '@testing-library/react';

import Input from './Input';

const mock = {
  className: 'error',
  placeholder: 'prueba',
  name: 'prueba',
  type: 'password',
  status: true,
  role: 'Rol',
  onChange: jest.fn(),
};

it('Check render input role default', () => {
  render(
    <Input
      className={mock.className}
      name={mock.name}
      placeholder={mock.placeholder}
      type={mock.type}
      onChange={mock.onChange}
    />,
  );
  const Element = screen.getByRole('input');

  expect(Element).toBeInTheDocument();
});

it('Render input  disabled on', () => {
  render(
    <Input
      className={mock.className}
      name={mock.name}
      placeholder={mock.placeholder}
      status={mock.status}
      type={mock.type}
      onChange={mock.onChange}
    />,
  );
  const Element = screen.getByRole('input');

  expect(Element).toHaveAttribute('disabled');
});

describe('Render input  disabled off', () => {
  beforeEach(() => {
    render(
      <Input
        className={mock.className}
        name={mock.name}
        placeholder={mock.placeholder}
        role={mock.role}
        type={mock.type}
        onChange={mock.onChange}
      />,
    );
  });
  it('Check render in document', () => {
    const Element = screen.getByRole(mock.role);

    expect(Element).toBeInTheDocument();
  });

  it('Check if it puts the class', () => {
    const Element = screen.getByRole(mock.role);

    expect(Element).toHaveClass(mock.className);
  });

  it('Check disable input', () => {
    const Element = screen.getByRole(mock.role);

    expect(Element).not.toHaveAttribute('disabled');
  });
});
