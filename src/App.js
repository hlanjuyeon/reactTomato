import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import { Main } from './pages/main/main';
import { Home } from './pages/Home/home';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/main" ></Navigate>}
        >
        </Route>
        <Route path="/main" element={<Main />}></Route>
        <Route exactpath="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
