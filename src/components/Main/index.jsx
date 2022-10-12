import { useState, useEffect } from 'react';
import Screen from './Screen'

const Main = () => {
  const [text, setText] = useState("0")

  return (
    <main className='main'>
      <Screen text={text} />
    </main>
  );
};

export default Main;