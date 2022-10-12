import { render, screen } from '@testing-library/react';
import Header from './index'

describe('Header', () => {
  it('should render with all elements', async () => {
    render(<Header />);
    
    // Test if "calc" text is here, the "theme" text is here, the switcher with 3 possibility
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('calc');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('THEME');
    expect(screen.getAllByRole('radio')).toBePartiallyChecked;
    expect(screen.getAllByRole('radio', {value: "radio1"})).toBeChecked;
  })
})