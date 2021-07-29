import Head from "next/head";

const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Syom | Langt liv for klærne </title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300&display=swap" rel="stylesheet" />
    </Head>
    {/* <NavBar /> */}
    <main className="main">
      {children}
    </main>
  </>
);

export default Layout;
