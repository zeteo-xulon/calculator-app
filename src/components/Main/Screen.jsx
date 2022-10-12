

const Screen = ({ text }) => {

  function textToString(text){
    if(text === undefined || text === null) { return "0" };
    if(text !== String(text)){
      let a = String(text).split('').map(e => e === "." ? e = "," : e ).join('');
      return a;
    }
    return text
  }

  return (
    <section className="main__screen">
      <p className="screen__text">{ textToString(text) }</p>
    </section>
  );
};

export default Screen;