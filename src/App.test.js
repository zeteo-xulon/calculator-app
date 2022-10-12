import * as React from 'react'
import { render, screen } from '@testing-library/react';
import App  from './App';

it('should renders without crash',  async () => {
  render(<App />);
})
  



  // expect(screen.getByRole('link'));
  // expect(screen.getByTestId('footer__second-link').getAttribute('href')).toBe(true);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();