import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"

//import react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router><Header/></Router>
      
      

    </div>
  );
}
export default App;