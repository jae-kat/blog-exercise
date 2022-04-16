import Head from 'next/head';

export default function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Blog login" />
      </Head>
      <div>
        <h1>Register</h1>
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
