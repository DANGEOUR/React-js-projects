
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <>
      <Navbar brand="My Web"/>
      <div className="container">
        <Textbox />
      </div>
    </>
  );
}

export default App;
