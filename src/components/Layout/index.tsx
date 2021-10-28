import React from "react";
import Head from "next/head";

import FloatingMenu from "./FloatingMenu";
import ScrollTop from "./ScrollToTop";
import TopMenu from "./TopMenu";

const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Syom | Langt liv for klærne </title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet" />
    </Head>
    {/* <TopMenu />
    <FloatingMenu /> */}
    <main className="main" id="top">
      {children}
      <ScrollTop />
    </main>
  </>
);

export default Layout;
