const DeleteUser = ({ userId, users, setUsers }) => {
    const handleDelete = async () => {
      if (!userId) return;
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          method: 'DELETE',
        });
        // Remove from state
        setUsers(users.filter((user) => user?.id !== userId));
        alert('User deleted successfully!');
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };
    return <button onClick={handleDelete}>Delete</button>;
  };
  export default DeleteUser;