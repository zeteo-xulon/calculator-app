
const Pad = () => {
  let btnList= [
    {key: 1, name:'7', class:"7"}, {key: 2, name:'8', class:"8"}, {key: 3, name:'9', class:"9"}, {key: 4, name:'DEL', class:"del"},
    {key: 5, name:'4', class:"4"}, {key: 6, name:'5', class:"5"}, {key: 7, name:'6', class:"6"}, {key: 8, name:'+', class:"plus"},
    {key: 9, name:'1', class:"1"}, {key: 10, name:'2', class:"2"}, {key: 11, name:'3', class:"3"}, {key: 12, name:'-', class:"-"},
    {key: 13, name:'.', class:"dot"}, {key: 14, name:'0', class:"0"}, {key: 15, name:'/', class:"slash"}, {key: 16, name:'x', class:"x"},
    {key: 17, name:'RESET', class:"reset"}, {key: 18, name:'=', class:"equal"}];

  return (
    <section className="pad">
      {
        btnList.map((btn)=> { return <button key={btn.key} className={ 'btn__' + btn.class } >{ btn.name }</button> })
      }
    </section>
  );
};

export default Pad;