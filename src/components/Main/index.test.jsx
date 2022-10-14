import { render, screen } from '@testing-library/react';
import Main from './index';
import Screen from './Screen';
import Pad from './Pad';



// =========== Main Test ===========
describe('Main', () => {
  it('should render without crash', () => { render(<Main />) });

  it('should have the different component wrapped on main', () => {
    render(<Main />);
    const main = document.querySelector('.main');
    const Screen = document.querySelector('.main__screen');
    expect(main).toContainElement(Screen);
  })



  // =========== Screen Test ===========
  it('should render without crash', () => { render(<Screen />) });

  it('should return the default value', () => {
    let text = null;
    render(<Screen text={text}/>);
    const screenText = document.querySelector('.screen__text');
    expect(screenText).toHaveTextContent('0');
  });

  it('should return the modified value', () => {
    let text = "13,99";
    render(<Screen text={text}/>);
    const screenText = document.querySelector('.screen__text');
    expect(screenText).toHaveTextContent('13,99');
  });

  it('should return the value as text', () => {
    let text = Number(13.99);
    console.log(typeof text, "line 33")
    render(<Screen text={text}/>);
    const screenText = document.querySelector('.screen__text');
    expect(screenText).toHaveTextContent('13,99');
  });
})



// =========== Pad Test ===========
describe('Pad testing suit', ()=> {
  it('should render without crash', ()=> { render(<Pad />) });
  it('should have 18 button', async ()=> {
    render(<Pad />);
    const btnList = await screen.findAllByRole('button');
    expect(btnList).toHaveLength(18);
  })
})