import { useContext } from 'react';
import { UserContext } from './UserContext';

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>Profile (Child Component)</h3>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Profile;