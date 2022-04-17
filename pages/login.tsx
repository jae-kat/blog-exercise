import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Error = { message: string };

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Error[]>();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Blog login" />
      </Head>
      <form
        className="flex flex-col items-center justify-center h-screen gap-2"
        onSubmit={async (event) => {
          event.preventDefault();
          const loginResponse = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password }),
          });
          const responseBody = await loginResponse.json();
          if ('errors' in responseBody) {
            setErrors(responseBody.errors);
            return;
          }
          // redirect
          await router.push('/');
        }}
      >
        <h1 className="text-2xl font-bold my-12">Login</h1>
        <div className="flex flex-col max-w-max gap-2">
          <label>
            Username
            <br />
            <input
              className="rounded border-2 border-solid"
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
          {errors && (
            <div className="text-red-400">
              {errors.map((error) => {
                return (
                  <p key={`login-error-${error.message}`}>{error.message}</p>
                );
              })}
            </div>
          )}
          <button className="rounded-full p-2 my-12 text-purple-50 bg-purple-800 hover:bg-purple-700">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
