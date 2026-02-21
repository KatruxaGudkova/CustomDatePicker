import { useSelector } from 'react-redux';
import './DisplayPage.css';

function formatDate(isoString, mode = 'date') {
  if (!isoString) return null;

  const date = new Date(isoString);
  if (mode === 'date')
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
  if (mode === 'time')
    return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

function DisplayPage() {
  const { name, email, birthDate, meetingTime } = useSelector((state) => state.form);

  const Row = ({ label, value }) => (
    <div className="display__row">
      <span className="display__label">{label}</span>
      <span className={`display__value ${!value ? 'display__value--empty' : ''}`}>
        {value || 'Не указано'}
      </span>
    </div>
  );

  return (
    <div className="display-page">
      <h1 className="display-page__title">Данные из формы</h1>

      <div className="display__card">
        <Row label="Имя" value={name} />
        <Row label="Email" value={email} />
        <Row label="Дата рождения" value={formatDate(birthDate, 'date')} />
        <Row label="Время встречи" value={formatDate(meetingTime, 'time')} />
      </div>
    </div>
  );
}

export default DisplayPage;
