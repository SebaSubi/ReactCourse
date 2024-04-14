import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)// -->The <React.StrictMode> is the reason why useEffect executes, cleans up, and executes.
// --> <React.StrictMode> does many things, tells you if your using old react code, if you are doing something incorrectly, etc.
//AND every time a component is mounted, it runds the effect, cleans it up, and runs it again, why? to make sure that your 
//component and effect are working properly
