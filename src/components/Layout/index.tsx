import React from "react";
import Head from "next/head";

import ScrollTop from "./ScrollToTop";
import Menu from "./BurgerMenu/Menu";

const metaDesc = `
En plattform som knytter de som ønkser gi klærne lengre liv med de som har muligheten til å gjøre det.
Alle trenger klær, om du er lidenskapelig interessert eller bare vil holde varmen.
Vi i SYOM vil gjøre det enkelt for folk å få reparert eller sydd om klær
for å gi lengre levetid for hvert plagg og minske forbruket av jordens ressurser.`;

const Layout: React.FC = ({ children }) => (
  <div>
    <Head>
      <title>Syom | Langt liv for klærne </title>
      <meta name="description" content={metaDesc} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet" />
    </Head>

    <Menu />

    <main className="main" id="top">
      {children}
      <ScrollTop />
    </main>

  </div>
);

export default Layout;
