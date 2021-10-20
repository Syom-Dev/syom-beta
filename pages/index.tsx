import React, { FC } from "react";

import Layout from "../src/components/Layout";
import SyomHeader from "../src/components/BetaPage/Header";
import SectionTwo from "../src/components/BetaPage/SectionTwo";
import SectionThree from "../src/components/BetaPage/SectionThree";
import { Footer } from "../src/components/Footer";

const Home: FC = () => (
  <Layout>
    <SyomHeader />
    {/* <SectionTwo />
    <SectionThree /> */}
    <Footer />
  </Layout>
);

export default Home;
