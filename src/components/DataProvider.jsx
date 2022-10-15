import { createContext, useState, useEffect } from "react";

export const DataContext = createContext()

const colorPanel = {
  textColor:{ 1: 'hsl(198, 20%, 13%)', 2:'hsl(0, 0%, 100%)', 3:'hsl(52, 100%, 62%)' },
  mainBgColor: { 1: "hsl(222, 26%, 31%)", 2: 'hsl(0, 0%, 90%)', 3: "hsl(268, 75%, 9%)" },
  keypadBgColor: { 1: "hsl(223, 31%, 20%)", 2: 'hsl(0, 5%, 81%)', 3: "hsl(268, 71%, 12%)" },
  screenBgColor: { 1: "hsl(224, 36%, 15%)", 2: 'hsl(0, 0%, 93%)', 3: "hsl(268, 71%, 12%)" },
  keyBgColor: { 1: "hsl(225, 21%, 49%)", 2: 'hsl(185, 42%, 37%)', 3: "hsl(281, 89%, 26%)" },
  keyShadowColor: { 1: "hsl(224, 28%, 35%)", 2: 'hsl(185, 58%, 25%)', 3: "hsl(285, 91%, 52%)" },
  keyBgToggleColor: { 1: "hsl(6, 63%, 50%)", 2: 'hsl(25, 98%, 40%)', 3: "hsl(176, 100%, 44%)" },
  keySpecialBgColor: { 1: "hsl(6, 63%, 50%)", 2: 'hsl(25, 98%, 40%)', 3: "hsl(176, 100%, 44%)" },
  keySpecialShadowColor: { 1: "hsl(6, 70%, 34%)", 2: 'hsl(25, 99%, 27%)', 3: "hsl(177, 92%, 70%)" },
  keySpecialToggleBgColor: { 1: "hsl(6, 63%, 50%)", 2: 'hsl(25, 98%, 40%)', 3: "hsl(176, 100%, 44%)" },
  keySpecialToggleShadowColor: { 1: "hsl(28, 16%, 65%)", 2: 'hsl(35, 11%, 61%)', 3: "hsl(290, 70%, 36%)" }
}

const DataProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState(1);

  const [textColor, setTextColor] = useState(colorPanel.textColor[1]);
  const [mainBgColor, setMainBgColor] = useState(colorPanel.mainBgColor[1]);
  const [keypadBgColor, setKeypadBgColor] = useState(colorPanel.keypadBgColor[1]);
  const [screenBgColor, setScreenBgColor] = useState(colorPanel.screenBgColor[1]);
  const [keyBgColor, setkeyBgColor] = useState(colorPanel.keyBgColor[1]);
  const [keyShadowColor, setKeyShadowColor] = useState(colorPanel.keyShadowColor[1]);
  const [keyBgToggleColor, setKeyBgToggleColor] = useState(colorPanel.keyBgToggleColor[1]);
  const [keySpecialBgColor, setKeySpecialBgColor] = useState(colorPanel.keySpecialBgColor[1]);
  const [keySpecialShadowColor, setKeySpecialShadowColor] = useState(colorPanel.keySpecialShadowColor[1]);
  const [keySpecialToggleBgColor, setKeySpecialToggleBgColor] = useState(colorPanel.keySpecialToggleBgColor[1]);
  const [keySpecialToggleShadowColor, setKeySpecialToggleShadowColor] = useState(colorPanel.keySpecialToggleShadowColor[1]);
  

  const toggleTheme = (color) => { return setColorTheme(color) };

  function changeColorTheme(number){
    setTextColor(colorPanel.textColor[number]); setMainBgColor(colorPanel.mainBgColor[number]);
    setKeypadBgColor(colorPanel.keypadBgColor[number]);setScreenBgColor(colorPanel.screenBgColor[number]);
    setkeyBgColor(colorPanel.keyBgColor[number]);setKeyShadowColor(colorPanel.keyShadowColor[number]);
    setKeyBgToggleColor(colorPanel.keyBgToggleColor[number]);setKeySpecialBgColor(colorPanel.keySpecialBgColor[number]);
    setKeySpecialShadowColor(colorPanel.keySpecialShadowColor[number]);setKeySpecialToggleBgColor(colorPanel.keySpecialToggleBgColor[number]);
    setKeySpecialToggleShadowColor(colorPanel.keySpecialToggleShadowColor[number]);
  }

  useEffect(()=> {
    if(colorTheme === 1){ changeColorTheme(1) }
    if(colorTheme === 2){ changeColorTheme(2) }
    if(colorTheme === 3){ changeColorTheme(3) }
  },[colorTheme])

  return (
    <DataContext.Provider value={{ 
      toggleTheme, textColor, 
      mainBgColor, keypadBgColor, 
      screenBgColor, keyBgColor, 
      keyShadowColor, keyBgToggleColor, 
      keySpecialBgColor, keySpecialShadowColor,
      keySpecialToggleBgColor, keySpecialToggleShadowColor
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;