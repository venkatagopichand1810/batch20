import { useState, useEffect } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import "./App.css"
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Load initial user data
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        // Generate clean numeric IDs starting from 11
        setUsers(data.map((user, index) => ({ ...user, id: 11 + index })));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Student Management System</h1>
      <CreateUser setUsers={setUsers} users={users} />
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
};
export default App;