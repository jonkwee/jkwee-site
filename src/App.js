import { useState } from 'react'
 
import './App.css';
import Landing from './components/Landing/Landing';
import Main from "./components/Main/Main";
import StickySocialMedia from './components/StickySocialMedia/StickySocialMedia'

function App() {
  const [showMain, isShowMain] = useState(false)

  const updateShowMainSection = () => {
    isShowMain(true)
  }

  return (
    <div className="App">
      <Landing showMainSectionFunc={updateShowMainSection}/>
      <StickySocialMedia shouldDisplay={showMain}/>
      <Main shouldDisplay={showMain}/>
    </div>
  );
}

export default App;
