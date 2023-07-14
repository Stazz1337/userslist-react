import userPic from '../images/user-hands-svgrepo-com.svg';
import { useState } from 'react';

const Main = ({ user, index, setSelectedUser }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const [message, setMessage] = useState('');

  const handleSave = () => {
    setMessage('Пользователь сохранен');
    setTimeout(() => {
      setMessage('');
    }, 1000);
  };

  return (
    <div className='main'>
      <p className='main__list-header'>Пользователь {index + 1} </p>

      <div className='main__list-wrapper'>
        <img src={userPic} alt='user-icon' className='main__icon'></img>
        <ul className='main__list'>
          <li className='main__list-item'>
            <label className='main__list-label'>
              Имя
              <input
                type='text'
                name='firstName'
                value={user.firstName}
                onChange={handleInputChange}
                className='main__list-input'
              />
            </label>
          </li>
          <li className='main__list-item'>
            <label className='main__list-label'>
              Фамилия
              <input
                type='text'
                name='lastName'
                value={user.lastName}
                onChange={handleInputChange}
                className='main__list-input'
              />
            </label>
          </li>
          <li className='main__list-item'>
            <label className='main__list-label'>
              Возраст
              <input
                type='number'
                name='age'
                value={user.age}
                onChange={handleInputChange}
                className='main__list-input'
              />
            </label>
          </li>
          <li className='main__list-item'>
            <label className='main__list-label'>
              Email
              <input
                type='email'
                name='email'
                value={user.email}
                onChange={handleInputChange}
                className='main__list-input'
              />
            </label>
          </li>
        </ul>
      </div>

      <button onClick={handleSave} className='main__save-button'>
        Сохранить
      </button>
      <p className='main__info'>{message}</p>
    </div>
  );
};

export default Main;
