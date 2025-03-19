import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
const UserList = ({ users, setUsers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user?.id}>
            <td>{user?.id}</td>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>
              {/* Update User */}
              <UpdateUser user={user} users={users} setUsers={setUsers} />
              {/* Delete User */}
              <DeleteUser userId={user?.id} users={users} setUsers={setUsers} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default UserList;