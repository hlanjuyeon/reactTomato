import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import { Main } from './pages/main/main';
import { Home } from './pages/Home/home';
import { TodoitemInput } from './components/todoitemInput';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" ></Navigate>}
        >
        </Route>
        {/* <Route
          path="/country-input"
          element={<Navigate to="/main" ></Navigate>}
        >
        </Route> */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/country-input" element={<TodoitemInput />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
