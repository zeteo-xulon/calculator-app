import { useContext } from "react";
import { DataContext } from "../DataProvider";

const Pad = () => {
  const { colorTheme, colorPanel } = useContext(DataContext);

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

  return (
    <section className="pad" style={{ backgroundColor: colorPanel[colorTheme].backgrounds.keyPadBg }} >
      {
        btnList.map((btn)=> { return <button 
          key={btn.name + btn.key} 
          className={ 'btn__' + btn.class } 
          style={ btn.key === 4 || btn.key === 17 || btn.key === 18 ? ( btn.key === 18 ? equalkeyStyle : specialKeyStyle ) : normalKeyStyle }
          >
            { btn.name }
          </button> })
      }
    </section>
  );
};

export default Pad;