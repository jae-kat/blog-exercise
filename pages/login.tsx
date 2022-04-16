import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Blog login" />
      </Head>
      <div>
        <h1>Login</h1>
        <div>
          <label>
            Username
            <input />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
        </div>
      </div>
    </>
  );
}
