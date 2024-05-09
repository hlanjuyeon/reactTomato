import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import { Main } from './pages/main/main';
import { SignIn } from './pages/signin/signin';
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
        <Route exact path="/sign-in" element={<SignIn />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
