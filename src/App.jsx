import  { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Route ,Routes, BrowserRouter } from 'react-router-dom';


function App() {
  const [theme, setTheme] = useState('light');
  const [textcolor, setTextcolor] = useState('dark');
  const [alert, setAlert] = useState(null);

  function sendAlert(message, type) {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    
  }
  

  function handleTheme() {
    if (theme === 'light') {
      setTheme('dark');
      setTextcolor('light');
      document.body.style.backgroundColor = 'rgb(5,38,69)';
      sendAlert("Dark mode has been enabled", "success");
    } else {
      setTheme('light');
      setTextcolor('dark');
      document.body.style.backgroundColor = 'white';
      sendAlert("Dark mode has been disabled", "warning");
    }
  }

  function handleThemeYellow() {
    if (theme === 'light') {
      setTheme('dark');
      setTextcolor('light');
      document.body.style.backgroundColor = 'yellow';
      sendAlert("Yellow Dark mode has been enabled", "success");
    } else {
      setTheme('light');
      setTextcolor('dark');
      document.body.style.backgroundColor = 'white';
      sendAlert("Yellow Dark mode has been disabled", "warning");
    }
  }

  function handleThemeGreen() {
    if (theme === 'light') {
      setTheme('dark');
      setTextcolor('light');
      document.body.style.backgroundColor = 'green';
      sendAlert("Green Dark mode has been enabled", "success");
    } else {
      setTheme('light');
      setTextcolor('dark');
      document.body.style.backgroundColor = 'white';
      sendAlert("Green Dark mode has been disabled", "warning");
    }
  }

  function handleThemeBlack() {
    if (theme === 'light') {
      setTheme('dark');
      setTextcolor('light');
      document.body.style.backgroundColor = 'black';
      sendAlert(" Black Dark mode has been enabled", "success");
    } else {
      setTheme('light');
      setTextcolor('dark');
      document.body.style.backgroundColor = 'white';
      sendAlert("Back Dark mode has been disabled", "warning");
    }
  }

  function handleThemeRed() {
    if (theme === 'light') {
      setTheme('dark');
      setTextcolor('light');
      document.body.style.backgroundColor = 'red';
      sendAlert("Red Dark mode has been enabled", "success");
    } else {
      setTheme('light');
      setTextcolor('dark');
      document.body.style.backgroundColor = 'white';
      sendAlert("Red Dark mode has been disabled", "warning");
    }
  }

  return (
    <BrowserRouter>
     <Navbar theme={theme} 
        textcolor={textcolor}
        handleTheme={handleTheme}
        handleThemeBlack={handleThemeBlack}
        handleThemeGreen={handleThemeGreen}
        handleThemeRed={handleThemeRed}
        handleThemeYellow={handleThemeYellow} />
      <Alert alert={alert} />
      <div className="container my-2">
      
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Hero theme={theme} sendAlert={sendAlert}/>} /> 
      </Routes>
      </div>
    </BrowserRouter>
      
  );
}

export default App;
