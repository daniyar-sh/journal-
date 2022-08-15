
import './App.css';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';
function App() {
  return (
    <div className="App">
      <div className='reclamaverh'> <h1>реклама верх</h1></div>
      <div className='AppWrapper'>
        <div className='appRec'> <h1>реклама с лева</h1></div>
      <div className='mainContent'>
      <Header/>
      <Content/>
      <Footer/>
      </div>
     <div className='appRec'><h1>реклама с права</h1></div>
      </div>
    </div>
  );
}

export default App;
