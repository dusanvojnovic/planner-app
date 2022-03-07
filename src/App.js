import { Route, BrowserRouter, Routes } from 'react-router-dom';

import MainBox from './components/MainBox/MainBox';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/user" element={<MainBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
