import { useContext } from "react";
import { DataContext } from "../DataProvider";

const Header = () => {
  const { setColorTheme, colorTheme, colorPanel } = useContext(DataContext)
  const color = [1,2,3];



  return (
    <header className='header' style={{ color: colorPanel[colorTheme].text.header }} >
      <h1 className='header__title'>calc</h1>
      
      <nav className="header__nav">
        <h2 className='header__sub'>THEME</h2>

        <aside className="header__nav__container">
          <p className="header__nav__number">
            {
              color.map((e)=> { return <span key={"radioSpan" + e}>{e}</span> })
            }
          </p>
          
          <div 
          className="header__radio" 
          style={{ backgroundColor: colorPanel[colorTheme].backgrounds.toggleBg }}>
            {
              color.map((e)=> {
                return e === colorTheme ? 
                <span 
                key={"radio-" + e}
                value={e} 
                className="header__radio__circle"
                id={"radio-box"+e} 
                style={{ backgroundColor: colorPanel[colorTheme].switcher.radioButton }}
                onClick={()=>{ setColorTheme(e)}}
                /> 
                : 
                <span 
                key={"radio-" + e}
                value={e} 
                className="header__radio__circle"
                id={"radio-box"+e} 
                onClick={()=>{ setColorTheme(e)}} 
                />
              })
            }
          </div>
        </aside>
        
      </nav>
      
    </header>
  );
};

export default Header;