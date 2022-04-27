import './App.css';
import Counter from './Counter';
import CounterClass from './CounterClass';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App">Counter App in ReactJS</h1>
      </header>
      <Counter initValue={0} />
      <CounterClass initValue={1} />
      <CounterClass initValue={100} />

    </div>
  );
}

export default App;
