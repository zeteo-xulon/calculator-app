import { useState, useEffect } from 'react';
import Screen from './Screen';
import Pad from './Pad'

const Main = () => {
  const [text, setText] = useState("0")

  return (
    <main className='main'>
      <Screen text={text} />
      <Pad />
    </main>
  );
};

export default Main;