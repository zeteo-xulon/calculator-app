import { useContext } from "react";
import { DataContext } from "../DataProvider";

export default function Footer (){
  const { colorPanel, colorTheme } = useContext(DataContext);
  const aStyle = { color: colorPanel[colorTheme].keys.equalKeyBg }
  
  return (
    <footer className='footer' style={{ color: colorPanel[colorTheme].text.screen }}>
      Challenge by <a 
      data-testid="footer__first-link" 
      href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29"
      className="footer__link"
      style={ aStyle }
      >Frontend Mentor</a>. 
      Coded by <a 
      data-testid="footer__second-link" 
      href="https://github.com/zeteo-xulon"
      className="footer__link"
      style={ aStyle }
      >zeteo-xulon</a>.
    </footer>
  );
};