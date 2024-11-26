import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users', 
    { cache: 'no-store'}
  );
  const users: User[] = await res.json();

  function userR(user: User) {
    return (
        <>
          <li key={user.id}>{user.name}</li>
        </>
    )
  }

  return (
    <>
      <h1>Users</h1>
      <p>{ new Date().toLocaleTimeString() }</p>
      <ul>
        {users.map( userR )}
      </ul>
    </>
  )
}

export default UsersPage