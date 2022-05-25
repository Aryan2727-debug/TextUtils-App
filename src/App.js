import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Accordion from './components/Accordion';


function App() {
  const [mode , setMode] = useState("dark");  //tells whether dark mode is enabled or not
  const [alert , setAlert] = useState(null);  //tells whether alert is shown or not

  function showAlert(message,type){ 
        setAlert({
          msg:message,
          type:type
        })
  }

  function toggleMode(){
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark mode Enabled" , "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode Enabled" , "success")
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
       <TextForm heading="Enter your text to analyze" mode={mode}/>
       <About />
   </div>
   <Accordion/>  
    </>
  );
}

export default App;
