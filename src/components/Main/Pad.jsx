import { useContext, useState } from "react";
import { DataContext } from "../DataProvider";

const Pad = () => {
  const { colorTheme, colorPanel, screenText, setScreenText } = useContext(DataContext);
  const [stockCalculation, setStockCalculation] = useState([]);

  let btnList= [
    {key: 1, name:'7', class:"7"}, {key: 2, name:'8', class:"8"}, {key: 3, name:'9', class:"9"}, {key: 4, name:'DEL', class:"del"},
    {key: 5, name:'4', class:"4"}, {key: 6, name:'5', class:"5"}, {key: 7, name:'6', class:"6"}, {key: 8, name:'+', class:"plus"},
    {key: 9, name:'1', class:"1"}, {key: 10, name:'2', class:"2"}, {key: 11, name:'3', class:"3"}, {key: 12, name:'-', class:"-"},
    {key: 13, name:'.', class:"dot"}, {key: 14, name:'0', class:"0"}, {key: 15, name:'/', class:"slash"}, {key: 16, name:'x', class:"x"},
    {key: 17, name:'RESET', class:"reset"}, {key: 18, name:'=', class:"equal"}];

    const normalKeyStyle = {
      backgroundColor: colorPanel[colorTheme].keys.normalKeysBg,
      boxShadow: `${colorPanel[colorTheme].keys.normalKeysShadow} 0px 5px 0px`,
      color: colorPanel[colorTheme].text.normalPad,
    }
    const specialKeyStyle = {
      backgroundColor: colorPanel[colorTheme].keys.specialKeysBg,
      boxShadow: `${colorPanel[colorTheme].keys.specialKeysShadow} 0px 5px 0px`,
      color: colorPanel[colorTheme].text.specialPad
    }
    const equalkeyStyle = {
      backgroundColor: colorPanel[colorTheme].keys.equalKeyBg,
      boxShadow: `${colorPanel[colorTheme].keys.equalKeyShadow} 0px 5px 0px`,
      color: colorPanel[colorTheme].text.equalPad,
    }  

    function checkfloat(num){
      let regex = new RegExp(/["."]/g)
      let isItAFloatNumber = regex.test(String(num));
      return isItAFloatNumber ? parseFloat(num) : num ;
    }
    const parseFloat = num => String(num).split('.')[1].length > 5 ? Number(num).toFixed(5) : Number(num) ;

    const pushKey = (e) => { 
      const ThereIsASpecialKey = ['-', "+", "=", "DEL", "RESET", "/",".","x"].find(key=> key === e);
      if(ThereIsASpecialKey){ return resolveSpecialKey(e) }
      return screenText === "0" ? setScreenText(e) : setScreenText(screenText + e)
     }

    const resolveSpecialKey = (e) => {
      let parsedScreenText = Number(String(screenText).split('').map((z)=> z === "," ? z = "." : z ).join(''))
      if(e === "RESET"){ setStockCalculation([]); return setScreenText("0") }
      if(e === "DEL"){ return screenText.length === 1 ? setScreenText("0") : setScreenText(String(screenText).split('').slice(0,-1).join('')) }
      if(e === ".") {
        let isThereAComa =  screenText.split('').find(key => key === ".");
        return isThereAComa ? setScreenText(screenText) : setScreenText(screenText + e);
      }

      if(stockCalculation.length === 0){ return stockIt(parsedScreenText, e) }
      if(stockCalculation.length === 1){ return stockIt(stockCalculation[0], e) }
      if(stockCalculation.length > 1){      
        let resolved = calculate(stockCalculation[0], stockCalculation[1], parsedScreenText);
        let resolveFloatChecked = checkfloat(resolved);
        setStockCalculation(['+','-','/','x'].find((k)=> e === k) ? [resolveFloatChecked, e] : [resolveFloatChecked]);
        return e === "=" ? setScreenText(String(resolveFloatChecked)) : setScreenText('0');
      }
    }
     
    // function stockIt(parsedScreenText, e){
    //   if(e === "+"){ setStockCalculation([parsedScreenText, "+"]); return setScreenText("0") }
    //   if(e === "-"){ setStockCalculation([parsedScreenText, "-"]); return setScreenText("0") }
    //   if(e === "/"){ setStockCalculation([parsedScreenText, "/"]); return setScreenText("0") }
    //   if(e === "x"){ setStockCalculation([parsedScreenText, "x"]); return setScreenText("0") }
    //   if(e === "="){ return setScreenText(stockCalculation[0]) }
    // }
    function stockIt(parsedScreenText, e){
      switch (e){
        case "+":
          setStockCalculation([parsedScreenText, "+"]); 
          setScreenText("0");
          break;
        case "-":
          setStockCalculation([parsedScreenText, "-"]); 
          setScreenText("0");
          break;
        case "/":
          setStockCalculation([parsedScreenText, "/"]); 
          setScreenText("0");
          break;
        case "x":
          setStockCalculation([parsedScreenText, "x"]); 
          setScreenText("0");
          break;
        case "=":
          setScreenText(stockCalculation[0]);
          break;
        default:
          console.log("something went wrong in function stockIt");
          break;
      }
    }

    function calculate(firstNumber, specialKey, secondNumber){
      if(specialKey === "+"){ return firstNumber + secondNumber }
      if(specialKey === "-"){ return firstNumber - secondNumber }
      if(specialKey === "/"){ return firstNumber / secondNumber }
      if(specialKey === "x"){ return firstNumber * secondNumber }
    }

  return (
    <section className="pad" style={{ backgroundColor: colorPanel[colorTheme].backgrounds.keyPadBg }} >
      {
        btnList.map((btn)=> { 
          return <button 
          key={btn.name + btn.key} 
          className={ 'btn__' + btn.class } 
          style={ btn.key === 4 || btn.key === 17 || btn.key === 18 ? ( btn.key === 18 ? equalkeyStyle : specialKeyStyle ) : normalKeyStyle }
          onClick={(keyPressed)=> { pushKey(keyPressed.target.textContent) }}
          >
            { btn.name }
          </button> 
          })
      }
    </section>
  );
};

export default Pad;