import { Box } from "@material-ui/core";

import Layout from "../src/components/Layout";
import TextBoxes from "../src/components/TextBoxes";
import SyomHeader from "../src/components/Header";

const Home = () => (
    <Layout>
        <SyomHeader />
        <Box mt={20}>
            <TextBoxes />
        </Box>
    </Layout>
);

export default Home;
