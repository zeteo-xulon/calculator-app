import { useContext, useState } from "react";
import { DataContext } from "../DataProvider";

/** SCENARIO
 * Each time the user is clicking a key, it will check the key.
 * For special key, like operator or DEL / RESET, a calculation is done to sum the onscreen value
 * @returns a value for the screen, it will be sended by the Datacontext to the Dataprovider.
 */
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

    /**
     * Will verify if there is more than 5 float number, and fix it to 5 if there is more.
     * @param {Number} num - the sum calculated precedently
     * @returns a number with float fixed to 5 max after dot, or normal sum number.
     */
    function checkfloat(num){
      let regex = new RegExp(/["."]/g)
      let isItAFloatNumber = regex.test(String(num));
      return isItAFloatNumber ? parseFloat(num) : num ;
    }

    /**
     * Verify if there is more than 5 digit after the dot and fix it
     * @param {Number} num - a float number
     * @returns a fixed number with maximum 5 number after decimal.
     */
    const parseFloat = num => String(num).split('.')[1].length > 5 ? Number(num).toFixed(5) : Number(num) ;

    /**
     * Resolve operator or special keys, and display the value on screen
     * @param {String} e key pressed by the user
     * @returns String with key resolved or added
     */
    const pushKey = (e) => { 
      const ThereIsASpecialKey = ['-', "+", "=", "DEL", "RESET", "/",".","x"].find(key=> key === e);
      if(ThereIsASpecialKey){ return resolveSpecialKey(e) }
      return screenText === "0" ? setScreenText(e) : setScreenText(screenText + e)
     }

    /**
     * When a key that is not a normal number is pressed, it need some calculation.
     * RESET will set to 0 the calculation
     * DEL will erase the last digit from the sum number or the on screen number
     * "." Will be added to the number, but not if there is already one.
     * And then for all operator, there is 3 possibility :
     *  0. nothing was stocked before, so we just stock whats on screen and the operator
     *  1. there is already a sum number, then we will continue to stock it, and add the operator
     *  2+. there is a number, and an operator, so we go for calculation with onscreen number to add
     * @param {String} e - the key pressed by the user 
     * @returns 
     */
    const resolveSpecialKey = (e) => {
      let parsedScreenText = Number(String(screenText).split('').map((z)=> z === "," ? z = "." : z ).join(''))
      if(e === "RESET"){ setStockCalculation([]); return setScreenText("0") }
      if(e === "DEL"){ 
        if(stockCalculation.length === 1){
          let deletedLastNumber = Number(String(screenText).split('').slice(0,-1).join(''));
          setStockCalculation([deletedLastNumber]);
        }
        return screenText.length === 1 ? setScreenText("0") : setScreenText(String(screenText).split('').slice(0,-1).join('')) }
      if(e === ".") {
        let isThereAComa =  screenText.split('').find(key => key === ".");
        return isThereAComa ? setScreenText(screenText) : setScreenText(screenText + e);
      }

      if(stockCalculation.length === 0){ return stockIt(parsedScreenText, e) }
      if(stockCalculation.length === 1){ return stockIt(stockCalculation[0], e) }
      if(stockCalculation.length > 1){ return makeTheSum(parsedScreenText, e) }
    }
    
    /**
     * Calculate the sum using stockCalculation array, and the screen String parsed
     * @param {Number} parsedScreenText - the onscreen value, in Number and with a dot
     * @param {String} e - the key pressed
     * @returns the sum
     */
    function makeTheSum(parsedScreenText, e){
      let resolved = calculate(stockCalculation[0], stockCalculation[1], parsedScreenText);
      let resolveFloatChecked = checkfloat(resolved);
      setStockCalculation(['+','-','/','x'].find((k)=> e === k) ? [resolveFloatChecked, e] : [resolveFloatChecked]);
      return e === "=" ? setScreenText(String(resolveFloatChecked)) : setScreenText('0');
    }

    /**
     * Will stock the onscreen value and the key operator into an array
     * @param {Number} parsedScreenText - the onscreen text resolved as a Number, and coma replaced by a dot
     * @param {String} e - the operator key pressed
     */
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

    /**
     * Calculate the sum of the 2 value using the operator
     * @param {Number} firstNumber - the first value to calculate
     * @param {String} specialKey - the key operator stocked in the stockCalculation array
     * @param {Number} secondNumber - the second value that is on screen
     * @returns the sum as a Number
     */
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