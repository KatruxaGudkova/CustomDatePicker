import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setName, setEmail, setBirthDate, setMeetingTime, resetForm } from '../../store/formSlice';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import './FormPage.css';

function FormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, email, birthDate, meetingTime } = useSelector((state) => state.form);

  const birthDateObj = birthDate ? new Date(birthDate) : null;
  const meetingTimeObj = meetingTime ? new Date(meetingTime) : null;

  return (
    <div className="form-page">
      <h1 className="form-page__title">Заполните данные</h1>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/display');
        }}
      >
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Имя
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            placeholder="Введите имя"
          />
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            id="email"
            type="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            placeholder="example@mail.com"
          />
        </div>

        <div className="form__group">
          <CustomDatePicker
            mode="date"
            label="Дата рождения"
            value={birthDateObj}
            onChange={(date) => dispatch(setBirthDate(date))}
          />
        </div>

        <div className="form__group">
          <CustomDatePicker
            mode="time"
            label="Время встречи"
            value={meetingTimeObj}
            onChange={(date) => dispatch(setMeetingTime(date))}
          />
        </div>

        <div className="form__actions">
          <button type="submit" className="btn-primary">
            Посмотреть
          </button>
          <button type="button" className="btn-secondary" onClick={() => dispatch(resetForm())}>
            Сбросить
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
