import './App.css';

function App() {
const title ="Blog title";
  const obj={a: 10,b: 20};// Objects and booleans cannot be binded in react
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{Math.random()*100}</p>
        <p>{JSON.stringify(obj)}</p>
      </div>
    </div>
  );
}

export default App;
