import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

import './CustomDatePicker.css';

registerLocale('ru', ru);

const DAYS = {
  понедельник: 'Пн',
  вторник: 'Вт',
  среда: 'Ср',
  четверг: 'Чт',
  пятница: 'Пт',
  суббота: 'Сб',
  воскресенье: 'Вс',
};

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

const MODS = {
  date: 'date',
  time: 'time',
  datetime: 'datetime',
};

const VIEW = {
  calendar: 'calendar',
  month: 'month',
  year: 'year',
};

const START_YEAR = 1900;

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: currentYear - START_YEAR + 1 }, (_, i) => START_YEAR + i);

function CustomDatePicker({ mode = MODS.date, value, onChange, label }) {
  const isTimeMode = mode === MODS.time || mode === MODS.datetime;
  const [view, setView] = useState(VIEW.calendar);

  const getDateFormat = () => {
    switch (mode) {
      case MODS.date:
        return 'dd.MM.yyyy';
      case MODS.time:
        return 'HH:mm';
      case MODS.datetime:
        return 'dd.MM.yyyy HH:mm';
      default:
        return '';
    }
  };

  const getPlaceholder = () => {
    switch (mode) {
      case MODS.date:
        return 'Выберите дату';
      case MODS.time:
        return 'Выберите время';
      case MODS.datetime:
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
        showTimeSelectOnly={mode === MODS.time}
        timeIntervals={15}
        timeCaption="Время"
        placeholderText={getPlaceholder()}
        isClearable
        autoComplete="off"
        formatWeekDay={(day) => DAYS[day.toLowerCase()] || day}
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
                  className={`dp-header__month ${view === VIEW.month ? 'dp-header__month--active' : ''}`}
                  onClick={() => setView(view === VIEW.month ? VIEW.calendar : VIEW.month)}
                >
                  {MONTHS[date.getMonth()]}
                </span>
                <span
                  className={`dp-header__year ${view === VIEW.year ? 'dp-header__year--active' : ''}`}
                  onClick={() => setView(view === VIEW.year ? VIEW.calendar : VIEW.year)}
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

            {view === VIEW.month && (
              <div className="dp-overlay">
                {MONTHS.map((month, index) => (
                  <button
                    key={month}
                    type="button"
                    className={`dp-overlay__item ${date.getMonth() === index ? 'dp-overlay__item--active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      changeMonth(index);
                      setView(VIEW.calendar);
                    }}
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}

            {view === VIEW.year && (
              <div className="dp-overlay dp-overlay--year">
                {YEARS.map((year) => (
                  <button
                    key={year}
                    type="button"
                    className={`dp-overlay__item ${date.getFullYear() === year ? 'dp-overlay__item--active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      changeYear(year);
                      setView(VIEW.calendar);
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
