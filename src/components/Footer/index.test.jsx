import { render, screen } from '@testing-library/react';
import Footer from './index'
const address1 = "https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29";
const address2 = "https://github.com/zeteo-xulon";

describe('Footer', () => { 
  it('should render without crash', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer__first-link').getAttribute('href')).toBe(address1);
    expect(screen.getByTestId('footer__second-link').getAttribute('href')).toBe(address2);
  })
  
  // expect(screen.getByRole('link'));
  // expect(screen.getByTestId('footer__second-link').getAttribute('href')).toBe(true);
})