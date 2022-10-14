

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>calc</h1>
      
      <nav className="header__nav">
        <h2 className='header__sub'>THEME</h2>

        <aside className="header__nav__container">
          <p className="header__nav__number">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </p>
          
          <fieldset className="header__radio">
            <input type="radio" name="radio" value="radio1" id="radio-box1" defaultChecked />
            <input type="radio" name="radio" value="radio2" id="radio-box2" />
            <input type="radio" name="radio" value="radio3" id="radio-box3" />
          </fieldset>
        </aside>
        
      </nav>
      
    </header>
  );
};

export default Header;