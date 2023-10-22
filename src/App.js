
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom'

function App() {
  return (
    <>
    <Navbar title="KronMan" aboutText="About Me" homeText="Home"/>
    <div className="container my-3">
    <TextFrom heading="Enter the text below to analyze "/>
    </div>
    </>
  );
}

export default App;
