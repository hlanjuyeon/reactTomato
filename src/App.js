import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import { Main } from './pages/main/main';
import { Home } from './pages/Home/home';
import { Header } from './components/header';

//import axios from 'axios';

function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to="/main" ></Navigate>}
        >
        </Route>
        <Route exact path="/main" element={<Main />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
