import Head from 'next/head';
import { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Blog user registration" />
      </Head>
      <form
        className="flex flex-col items-center justify-center h-screen gap-2"
        onSubmit={async (event) => {
          event.preventDefault();
          const registerResponse = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password }),
          });
        }}
      >
        <h1 className="text-2xl font-bold my-3">Register</h1>
        <div className="flex flex-col max-w-max gap-2">
          <label>
            Username
            <br />
            <input
              className="rounded border-2  border-solid"
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
            />
          </label>
          <label>
            Password
            <br />
            <input
              className="rounded border-2 border-solid"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </label>
          <button className="rounded-full p-2 my-3 text-purple-50 bg-purple-800 border-white border-solid hover:border-purple-300 border-2">
            Register
          </button>
        </div>
      </form>
    </>
  );
}
