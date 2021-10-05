import { useRef } from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Main from "./components/Main/Main";

function App() {
  const scrollTargetRef = useRef()
  return (
    <div className="App">
      <Landing scrollTargetRef={scrollTargetRef}/>
      <Main scrollTargetRef={scrollTargetRef}/>
    </div>
  );
}

export default App;
