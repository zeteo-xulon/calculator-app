import { createContext, useState } from "react";

export const DataContext = createContext()

export const colorPanel = {
  1: {
    backgrounds: { 
      mainBg: "hsl(222, 26%, 31%)",
      toggleBg: "hsl(223, 31%, 20%)",
      keyPadBg: "hsl(223, 31%, 20%)",
      screenBg: "hsl(224, 36%, 15%)" 
    },
    keys: {
      specialKeysBg: "hsl(225, 21%, 49%)",
      specialKeysShadow: "hsl(224, 28%, 35%)",
      equalKeyBg: "hsl(6, 63%, 50%)",
      equalKeyShadow: "hsl(6, 70%, 34%)",
      normalKeysBg: "hsl(30, 25%, 89%)",
      normalKeysShadow: "hsl(28, 16%, 65%)"
    },
    text:{
      screen: "hsl(0, 0%, 100%)",
      normalPad: "hsl(221, 14%, 31%)",
      specialPad: "hsl(0, 0%, 100%)",
      equalPad: "hsl(0, 0%, 100%)",
      header: "hsl(0, 0%, 100%)"
    },
    switcher:{
      radioButton: "hsl(6, 63%, 50%)"
    }
  },
  2: {
    backgrounds: { 
      mainBg: "hsl(0, 0%, 90%)",
      toggleBg: "hsl(0, 5%, 81%)",
      keyPadBg: "hsl(0, 5%, 81%)",
      screenBg: "hsl(0, 0%, 93%)" 
    },
    keys: {
      specialKeysBg: "hsl(185, 42%, 37%)",
      specialKeysShadow: "hsl(185, 58%, 25%)",
      equalKeyBg: "hsl(25, 98%, 40%)",
      equalKeyShadow: "hsl(25, 99%, 27%)",
      normalKeysBg: "hsl(45, 7%, 89%)",
      normalKeysShadow: "hsl(35, 11%, 61%)"
    },
    text:{
      screen: "hsl(60, 10%, 19%)",
      normalPad: "hsl(60, 10%, 19%)",
      specialPad: "hsl(0, 0%, 100%)",
      equalPad:"hsl(0, 0%, 100%)",
      header: "hsl(60, 10%, 19%)"
    },
    switcher:{
      radioButton: "hsl(25, 98%, 40%)"
    }
  },
  3: {
    backgrounds: { 
      mainBg: "hsl(268, 75%, 9%)",
      toggleBg: "hsl(268, 71%, 12%)",
      keyPadBg: "hsl(268, 71%, 12%)",
      screenBg: "hsl(268, 71%, 12%)" 
    },
    keys: {
      specialKeysBg: "hsl(281, 89%, 26%)",
      specialKeysShadow: "hsl(285, 91%, 52%)",
      equalKeyBg: "hsl(176, 100%, 44%)",
      equalKeyShadow: "hsl(177, 92%, 70%)",
      normalKeysBg: "hsl(268, 47%, 21%)",
      normalKeysShadow: "hsl(290, 70%, 36%)"
    },
    text:{
      screen: "hsl(52, 100%, 62%)",
      normalPad: "hsl(52, 100%, 62%)",
      specialPad: "hsl(0, 0%, 100%)",
      equalPad:"hsl(198, 20%, 13%)",
      header: "hsl(52, 100%, 62%)"
    },
    switcher:{
      radioButton: "hsl(176, 100%, 44%)"
    }
  }
}

const DataProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState(1);
  const [screenText, setScreenText] = useState("0");

  return (
    <DataContext.Provider value={{ colorTheme, setColorTheme, colorPanel, screenText, setScreenText }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;