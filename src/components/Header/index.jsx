

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>calc</h1>
      <h2 className='header__sub'>THEME</h2>
      <fieldset className="header__radio">
        <input type="radio" name="radio" value="radio1" id="radio-box1" defaultChecked />
        <input type="radio" name="radio" value="radio2" id="radio-box2" />
        <input type="radio" name="radio" value="radio3" id="radio-box3" />
      </fieldset>
    </header>
  );
};

export default Header;