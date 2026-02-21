import DatePicker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

import './CustomDatePicker.css';


registerLocale('ru', ru);

function CustomDatePicker({ mode = 'date', value, onChange, label }) {
  const isTimeMode = mode === 'time' || mode === 'datetime';

  const getDateFormat = () => {
    switch(mode) {
      case 'date': 
        return 'dd.MM.yyyy'
      case 'time':
        return 'HH:mm'
      case 'datetime':
        return 'dd.MM.yyyy HH:mm'
      default:
        return ''
    }

  };

  const getPlaceholder = () => {
    switch(mode) {
      case 'date': 
        return 'Выберите дату'
      case 'time':
        return 'Выберите время'
      case 'datetime':
        return 'Выберите дату и время'
      default:
        return ''
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
      />
    </div>
  );
}

export default CustomDatePicker;
