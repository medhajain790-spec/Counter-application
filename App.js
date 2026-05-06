import { UserContext } from './UserContext';
import Profile from './Profile';

function App() {
  const user = { name: 'Medha', role: "Admin" };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h2>Context API Demo</h2>
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;