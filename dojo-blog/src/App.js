import './App.css';
import Navbar from './Navbar';
import HomePage from './Home';
function App() {
  const title="Dojo Blog";
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
