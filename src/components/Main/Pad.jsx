
const Pad = () => {
  let btnList= [
    {key: 1, btn:'7'}, {key: 2, btn:'8'}, {key: 3, btn:'9'}, {key: 4, btn:'DEL'},
    {key: 5, btn:'4'}, {key: 6, btn:'5'}, {key: 7, btn:'6'}, {key: 8, btn:'+'},
    {key: 9, btn:'1'}, {key: 10, btn:'2'}, {key: 11, btn:'3'}, {key: 12, btn:'-'},
    {key: 13, btn:'.'}, {key: 14, btn:'0'}, {key: 15, btn:'/'}, {key: 16, btn:'x'},
    {key: 17, btn:'RESET'}, {key: 18, btn:'='}];

  return (
    <section className="pad">
      {
        btnList.map((btn)=> { return <button key={btn.key} className={ 'btn__' + btn.btn } >{ btn.btn }</button> })
      }
    </section>
  );
};

export default Pad;