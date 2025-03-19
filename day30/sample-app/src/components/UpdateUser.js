import { useState } from 'react';
const UpdateUser = ({ user, users, setUsers }) => {
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const handleUpdate = async () => {
    if (!user?.id) return;
    const updatedUser = { ...user, name, email };
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser),
      });
      const data = await response.json();
      // Update state
      setUsers(users.map((u) => (u?.id === user.id ? { ...u, ...data } : u)));
      alert('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </>
  );
};
export default UpdateUser;