import Head from 'next/head';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.children}</main>
    </div>
  );
}
