import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataProvider"

const Screen = () => {
  const { colorPanel, colorTheme, screenText } = useContext(DataContext);
  const [displayedText, setDisplayedText] = useState(screenText)

  const screenBg = { backgroundColor: colorPanel[colorTheme].backgrounds.screenBg };
  const screenTextColor = { color: colorPanel[colorTheme].text.screen };


  function textToString(text){
    if(text === undefined || text === null || text === "") { return "0" };
    let textWithComa = String(text).split('').map(e => e === "." ? e = "," : e ).join('');
    return setDisplayedText(textWithComa);
  }

  useEffect(()=>{
    textToString(screenText)
  },[screenText])

  return (
    <section className="main__screen" style={ screenBg }>
      <p className="screen__text" style={ screenTextColor }>{ displayedText }</p>
    </section>
  );
};

export default Screen;