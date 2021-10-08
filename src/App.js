import { useState } from 'react'
 
import './App.css';
import Landing from './components/Landing/Landing';
import Main from "./components/Main/Main";

function App() {
  const [showMain, isShowMain] = useState(true)

  const updateShowMainSection = () => {
    isShowMain(true)
  }

  return (
    <div className="App">
      {/* <Landing showMainSectionFunc={updateShowMainSection}/> */}
      <Main shouldDisplay={showMain}/>
    </div>
  );
}

export default App;
