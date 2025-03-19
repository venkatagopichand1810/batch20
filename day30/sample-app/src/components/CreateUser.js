import { useState } from 'react';
const CreateUser = ({ setUsers, users }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please enter all fields');
      return;
    }
    // Generate a clean numeric ID (incrementally)
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
    const newUser = { id: newId, name, email };
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      // Add to state with generated ID
      setUsers([...users, { ...data, id: newUser.id }]);
      setName('');
      setEmail('');
      alert('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};
export default CreateUser;