import './App.css';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Main from './components/Main/index';
import DataProvider from './components/DataProvider';

export default function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Main />
        <Footer />
      </DataProvider>
    </div>
  );
}