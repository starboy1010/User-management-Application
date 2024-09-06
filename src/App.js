import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Update from './components/update/update';

function App() {
  return (
    <Router>
      <div className="main">
        <div>
          <h3>User Management Application</h3>
        </div>
        <Routes>
          <Route exact path='/' element={<Create/>} />
          <Route exact path='/read' element={<Read/>} />
          <Route path='/update' element={<Update/>} />
        </Routes>
        <div>
          <h5>Made with ❤️ by pratiyush</h5>
        </div>
      </div>
    </Router>
  );
}

export default App;