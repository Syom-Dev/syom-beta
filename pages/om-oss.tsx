import React, { FC } from "react";

import Layout from "../src/components/Layout";
import AboutHeader from "../src/components/About/Header";
import { Footer } from "../src/components/Footer";

const About: FC = () => (
  <Layout>
    <AboutHeader />

    <Footer />
  </Layout>
);

export default About;
