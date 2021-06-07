import Head from 'next/head'
import NavBar from './NavBar';
import { Footer } from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
    </Head>
    <NavBar />
    <div className="container">
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;