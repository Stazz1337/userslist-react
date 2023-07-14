import Users from './Users';
import Main from './Main';
import { useState } from 'react';
import usersData from '../utils/generated.json';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className='wrapper'>
      <Users handleUserClick={handleUserClick} usersData={usersData} />
      {selectedUser && (
        <Main
          user={selectedUser}
          setSelectedUser={setSelectedUser}
          index={usersData.indexOf(selectedUser)}
          usersData={usersData}
        />
      )}
    </div>
  );
}

export default App;
