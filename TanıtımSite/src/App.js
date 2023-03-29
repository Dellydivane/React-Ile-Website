import './App.css';
import { useState } from 'react';
import Navbar from './component/navbar'
import Anasayfa from './component/anasayfa'
import Calisma from './component/calisma'
import Project from './component/project'
import Footer from './component/footer'
import Avatar from './component/avatar';

function App() {
  const [backgroundColor, setBackgroundColor] = useState();

  const handleBackgroundColorChange = (color) => {
    console.log(color)
    setBackgroundColor(color);
  }
  return (
    <>
      <Navbar colorAl={handleBackgroundColorChange} />
      <Anasayfa  />
      <Avatar/>
      <Calisma colorGonder={backgroundColor}/>
      <Project/>
      <Footer/>
    </>
  );
}

export default App;
