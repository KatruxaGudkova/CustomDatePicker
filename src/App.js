import { Routes, Route, NavLink } from 'react-router-dom';
import FormPage from './pages/FormPage/FormPage';
import DisplayPage from './pages/DisplayPage/DisplayPage';
import './App.css';
import './_var.css';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
        >
          Форма
        </NavLink>
        <NavLink
          to="/display"
          className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
        >
          Просмотр
        </NavLink>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
