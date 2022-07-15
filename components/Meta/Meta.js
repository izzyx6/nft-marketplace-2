import Head from "next/head";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

const Meta = ({ title, keywords, description }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="apple-touch-icon" sizes="152x152" href="/logo.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
    <link rel="manifest" href="/site.webmanifest" />
    {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
    <title>{title}</title>
  </Head>
);

Meta.defaultProps = {
  title: "Chaintusker NFT Marketplace",
  keywords: "NFT, crypto, blockchain, polygon, ERC20",
  description: "Get the latest NFTs in the market",
};

Meta.propTypes = propTypes;
export default Meta;
