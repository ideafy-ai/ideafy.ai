import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './router';
import Header from './layouts/Header';
import Landing from './pages/Landing';
function App() {
  return (
    <><Header />
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div></>
  );
}

export default App;
