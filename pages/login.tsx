import Head from 'next/head';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Blog login" />
      </Head>
      <form>
        <h1>Login</h1>
        <div>
          <label>
            Username
            <input
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </label>
          <button>Login</button>
        </div>
      </form>
    </>
  );
}
