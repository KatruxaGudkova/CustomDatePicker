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

// import { useState } from 'react';
// import CustomDatePicker from './components/CustomDatePicker/CustomDatePicker';

// function App() {
//   const [date, setDate]         = useState(null);
//   const [time, setTime]         = useState(null);
//   const [datetime, setDatetime] = useState(null);

//   return (
//     <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 40 }}>

//       <div>
//         <h2>mode="date"</h2>
//         <CustomDatePicker mode="date" value={date} onChange={setDate} label="Дата рождения" />
//         <pre style={{ marginTop: 8, color: '#888' }}>
//           {date ? date.toLocaleDateString('ru-RU') : 'не выбрано'}
//         </pre>
//       </div>

//       <div>
//         <h2>mode="time"</h2>
//         <CustomDatePicker mode="time" value={time} onChange={setTime} label="Время встречи" />
//         <pre style={{ marginTop: 8, color: '#888' }}>
//           {time ? time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) : 'не выбрано'}
//         </pre>
//       </div>

//       <div>
//         <h2>mode="datetime"</h2>
//         <CustomDatePicker mode="datetime" value={datetime} onChange={setDatetime} label="Дата и время" />
//         <pre style={{ marginTop: 8, color: '#888' }}>
//           {datetime ? datetime.toLocaleString('ru-RU') : 'не выбрано'}
//         </pre>
//       </div>

//     </div>
//   );
// }

// export default App;
