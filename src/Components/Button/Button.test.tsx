import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

import Button from './Button';

const mock = {
  children: 'test',
  Onclick: jest.fn(),
  status: true,
  className: 'cancel',
};

describe('Render button disabled off', () => {
  beforeEach(() => {
    render(
      <Button Onclick={mock.Onclick} className={mock.className}>
        {mock.children}
      </Button>,
    );
  });

  it('Check render in document', () => {
    const Element = screen.getByText(mock.children);

    expect(Element).toBeInTheDocument();
  });

  it('Check role assigned', () => {
    const Element = screen.getByRole('button', { name: mock.children });

    expect(Element).toBeInTheDocument();
  });

  it('Check click event', () => {
    const Element = screen.getByRole('button', { name: mock.children });

    useEvent.click(Element);

    expect(mock.Onclick).toHaveBeenCalledTimes(1);
  });

  it('Check if it puts the class', () => {
    const Element = screen.getByRole('button', { name: mock.children });

    expect(Element).toHaveClass(mock.className);
  });

  it('Check disable button', () => {
    const Element = screen.getByRole('button', { name: mock.children });

    expect(Element).not.toHaveAttribute('disabled');
  });
});

describe('Render button disabled on', () => {
  beforeEach(() => {
    render(
      <Button Onclick={mock.Onclick} className={mock.className} status={mock.status}>
        {mock.children}
      </Button>,
    );
  });

  it('Check click event', () => {
    const Element = screen.getByRole('button', { name: mock.children });

    useEvent.click(Element);

    expect(mock.Onclick).toHaveBeenCalledTimes(0);
  });

  it('Check disable button', () => {
    const Element = screen.getByRole('button', { name: mock.children });

    expect(Element).toHaveAttribute('disabled');
  });
});
