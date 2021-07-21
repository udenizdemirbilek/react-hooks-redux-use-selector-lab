import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector(state => state.users)
  const userCount = useSelector(state => state.users.length)
  console.log(users, userCount)
  return (
    <div>w
      <ul>
        Users!
        Total Users: {userCount}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
        {users.map((user, index) => <li key={index}>Username: {user.username}, Hometown: {user.hometown}</li>)}        
      </ul>
    </div>
  );
}

export default Users;
