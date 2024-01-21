import { useState, useEffect } from "react";
import axios from "axios";
import "./table.css";
import { ButtonWithVariants } from "./Buttons";
const Statehandlers = () => {
  interface Address {
    stree: string;
    city: string;
    zipcode: string;
  }
  interface User {
    id: string;
    username: string;
    email: string;
    address: Address;
  }

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const allusers: User[] = res.data;
        setUsers(allusers);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const handleSelectUser = (user: User) => {
    const allSelectUsers = [...selectedUsers];
    // check if user is already selected
    const userFound = allSelectUsers.find((u) => u.id === user.id);
    if (userFound) {
      // remove this user-:
      const updatedUsers = allSelectUsers.filter((u) => u.id !== user.id);
      setSelectedUsers(updatedUsers);
      return;
    }
    setSelectedUsers([...allSelectUsers, user]);
  };
  console.log(selectedUsers);

  const handleSelectAllUsers = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
      return;
    }
    setSelectedUsers([...users]);
  };

  return (
    <>
      {/* <ButtonWithVariants title={"Add Usres"} variant="primary" type="button" /> */}
      <table>
        <thead>
          <tr>
            <th>
              <input
                onClick={handleSelectAllUsers}
                checked={selectedUsers.length > 0}
                type="checkbox"
              />
            </th>
            <th>User name</th>
            <th>User name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr
                className={`text-center ${
                  selectedUsers.some((u) => u.id === user.id)
                    ? "bg-red-200"
                    : ""
                }`}
                key={user.id}
              >
                <td>
                  <input
                    onClick={() => handleSelectUser(user)}
                    type="checkbox"
                    checked={selectedUsers.some((u) => u.id === user.id)}
                  />
                </td>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                {/* Add more table cells as needed */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Statehandlers;
