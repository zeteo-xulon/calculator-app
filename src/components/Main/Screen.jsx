import { useContext } from "react";
import { DataContext } from "../DataProvider"

const Screen = ({ text }) => {
  const { colorPanel, colorTheme } = useContext(DataContext);
  const screenBg = { backgroundColor: colorPanel[colorTheme].backgrounds.screenBg };
  const screenTextColor = { color: colorPanel[colorTheme].text.screen };

  function textToString(text){
    if(text === undefined || text === null) { return "0" };
    if(text !== String(text)){
      let a = String(text).split('').map(e => e === "." ? e = "," : e ).join('');
      return a;
    }
    return text
  }

  return (
    <section className="main__screen" style={ screenBg }>
      <p className="screen__text" style={ screenTextColor } >{ textToString(text) }</p>
    </section>
  );
};

export default Screen;