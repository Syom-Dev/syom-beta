import React, { FC } from "react";

import Layout from "../src/components/Layout";
import SyomHeader from "../src/components/Forside/Headers/Header3";
import { Footer } from "../src/components/Footer";
import SectionTwo from "../src/components/BetaPage/SectionTwo";
import SectionThree from "../src/components/Forside/SectionThree";
import SectionDonation from "../src/components/BetaPage/SectionDonation";
import SkipToNextSection from "../src/components/Layout/SkipToNextSection";

const Home: FC = () => (
  <Layout>
    <SyomHeader />
    <SectionTwo />
    <SectionThree />
    <SectionDonation />
    <Footer />
    <SkipToNextSection sectionIds={["hvorfor", "hvordan", "blimed", "donasjon"]} />
  </Layout>
);

export default Home;
