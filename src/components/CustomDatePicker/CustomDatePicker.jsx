import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

import './CustomDatePicker.css';

registerLocale('ru', ru);

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: currentYear - 1926 + 1 }, (_, i) => 1926 + i);

function CustomDatePicker({ mode = 'date', value, onChange, label }) {
  const isTimeMode = mode === 'time' || mode === 'datetime';
  const [view, setView] = useState('calendar'); // 'calendar' | 'month' | 'year'

  const getDateFormat = () => {
    switch (mode) {
      case 'date':
        return 'dd.MM.yyyy';
      case 'time':
        return 'HH:mm';
      case 'datetime':
        return 'dd.MM.yyyy HH:mm';
      default:
        return '';
    }
  };

  const getPlaceholder = () => {
    switch (mode) {
      case 'date':
        return 'Выберите дату';
      case 'time':
        return 'Выберите время';
      case 'datetime':
        return 'Выберите дату и время';
      default:
        return '';
    }
  };

  return (
    <div className={`datepicker-wrapper datepicker-wrapper--${mode}`}>
      {label && <span className="datepicker-label">{label}</span>}

      <DatePicker
        selected={value}
        onChange={onChange}
        locale="ru"
        dateFormat={getDateFormat()}
        showTimeSelect={isTimeMode}
        showTimeSelectOnly={mode === 'time'}
        timeIntervals={15}
        timeCaption="Время"
        placeholderText={getPlaceholder()}
        isClearable
        autoComplete="off"
        formatWeekDay={(day) => {
          const days = {
            понедельник: 'Пн',
            вторник: 'Вт',
            среда: 'Ср',
            четверг: 'Чт',
            пятница: 'Пт',
            суббота: 'Сб',
            воскресенье: 'Вс',
          };
          return days[day.toLowerCase()] || day;
        }}
        renderCustomHeader={({ date, changeMonth, changeYear, decreaseMonth, increaseMonth }) => (
          <div className="dp-header">
            <div className="dp-header__top">
              <button
                type="button"
                className="dp-header__nav"
                onClick={(e) => {
                  e.preventDefault();
                  decreaseMonth();
                }}
              >
                ‹
              </button>

              <div className="dp-header__center">
                <span
                  className={`dp-header__month ${view === 'month' ? 'dp-header__month--active' : ''}`}
                  onClick={() => setView(view === 'month' ? 'calendar' : 'month')}
                >
                  {MONTHS[date.getMonth()]}
                </span>
                <span
                  className={`dp-header__year ${view === 'year' ? 'dp-header__year--active' : ''}`}
                  onClick={() => setView(view === 'year' ? 'calendar' : 'year')}
                >
                  {date.getFullYear()}
                </span>
              </div>

              <button
                type="button"
                className="dp-header__nav"
                onClick={(e) => {
                  e.preventDefault();
                  increaseMonth();
                }}
              >
                ›
              </button>
            </div>

            {view === 'month' && (
              <div className="dp-overlay">
                {MONTHS.map((month, index) => (
                  <button
                    key={month}
                    type="button"
                    className={`dp-overlay__item ${date.getMonth() === index ? 'dp-overlay__item--active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      changeMonth(index);
                      setView('calendar');
                    }}
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}

            {view === 'year' && (
              <div className="dp-overlay dp-overlay--year">
                {YEARS.map((year) => (
                  <button
                    key={year}
                    type="button"
                    className={`dp-overlay__item ${date.getFullYear() === year ? 'dp-overlay__item--active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      changeYear(year);
                      setView('calendar');
                    }}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
}

export default CustomDatePicker;
