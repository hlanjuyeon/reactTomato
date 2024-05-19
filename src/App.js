import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import { Main } from './pages/main/main';
import { Home } from './pages/home/home';
import { Zero } from './pages/zero/zero';

function App() {

  return (
    <Router> 
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/zero" />}
        />
        <Route path="/zero" element={<Zero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
