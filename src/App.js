import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Default from './layouts/default'
import Home from './pages/home';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Default/>}>
              <Route index element={<Home />}></Route>
              <Route path='/everything' element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
