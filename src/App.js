import { useContext } from 'react';
import { DataContext } from "./components/DataProvider";
import './App.css';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Main from './components/Main/index';

export default function App() {
  const { colorPanel, colorTheme } = useContext(DataContext);

  return (
    <div className='app__container' style={{ backgroundColor: colorPanel[colorTheme].backgrounds.mainBg }}>
      <div className="app" style={{ backgroundColor: colorPanel[colorTheme].backgrounds.mainBg }}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}