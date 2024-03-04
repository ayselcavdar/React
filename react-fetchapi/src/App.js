import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="file"
          name="avatar"
          onChange={(e) => setAvatar(e.target.files[0])}
        />{" "}
        <br />
        <button type="submit" disabled={!name || !avatar}>
          Save
        </button>
      </form>

      <h1>User List</h1>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default App;
