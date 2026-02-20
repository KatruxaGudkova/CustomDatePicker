import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';
import { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';

registerLocale('ru', ru);

function CustomDatePicker({ mode = 'date', value, onChange, label }) {
  const isTimeMode = mode === 'time' || mode === 'datetime';

  const getDateFormat = () => {
    if (mode === 'date')     return 'dd.MM.yyyy';
    if (mode === 'time')     return 'HH:mm';
    if (mode === 'datetime') return 'dd.MM.yyyy HH:mm';
  };

  const getPlaceholder = () => {
    if (mode === 'date')     return 'Выберите дату';
    if (mode === 'time')     return 'Выберите время';
    if (mode === 'datetime') return 'Выберите дату и время';
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
            'понедельник': 'Пн',
            'вторник':     'Вт',
            'среда':       'Ср',
            'четверг':     'Чт',
            'пятница':     'Пт',
            'суббота':     'Сб',
            'воскресенье': 'Вс',
          };
          return days[day.toLowerCase()] || day;
        }}
      />
    </div>
  );
}

export default CustomDatePicker;