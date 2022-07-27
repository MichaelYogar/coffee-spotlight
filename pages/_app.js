import Chakra from "../components/Chakra";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Chakra>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default MyApp;
