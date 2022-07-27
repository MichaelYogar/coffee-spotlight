import Chakra from "../components/Chakra";
import Font from "../components/Font";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Chakra>
      <Font />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default MyApp;
