// pages/_app.js
import "../styles/global.css";
import Script from "next/script";
// import StarryBackground from "../components/starryBackground";
import LeafBackground from "../components/leafBackground";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* -- Optional backgrounds */}
      {/* <StarryBackground /> */}
      {/* <LeafBackground /> */}
      <Component {...pageProps} />
      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  );
}

// Component is the active page - whenever you navigate between routes, Component will change to the new page. Any props sent to Component will be received by the page.
// pageProps is an object with the initial props that were preloaded for the page by a data fetching method
