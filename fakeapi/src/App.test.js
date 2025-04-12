import { render, screen } from '@testing-library/react';
import App from './App';
import card from './card';

test('renders learn react link', () => {
  render(<App />);
  (<card/>)
});
