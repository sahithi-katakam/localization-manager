
import { render, screen } from '@testing-library/react';

test('input renders', () => {
  render(<input placeholder="Type here" />);
  expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument();
});
