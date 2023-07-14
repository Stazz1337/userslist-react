import { List } from 'react-virtualized';
import userPic from '../images/user-hands-svgrepo-com.svg';

const Users = ({ usersData, handleUserClick }) => {
  return (
    <List
      width={300}
      height={300}
      rowHeight={30}
      rowCount={usersData.length}
      rowRenderer={({ key, index, style }) => {
        const user = usersData[index];

        return (
          <ul key={key} style={style} index={index} className='nav'>
            <li
              className='nav__list-item'
              onClick={() => handleUserClick(user)}
            >
              <img src={userPic} alt='user-icon' className='nav__icon'></img>
              Пользователь {index + 1}
            </li>
          </ul>
        );
      }}
    />
  );
};

export default Users;
