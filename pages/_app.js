// pages/_app.js
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Component is the active page - whenever you navigate between routes, Component will change to the new page. Any props sent to Component will be received by the page.
// pageProps is an object with the initial props that were preloaded for the page by a data fetching method