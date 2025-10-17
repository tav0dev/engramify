import "../styles/globals.css";
import { Manrope } from "next/font/google";
import CookieConsent from "../components/ui/CookieConsent";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

function App({ Component, pageProps }) {
  return (
    <div className={manrope.className}>
      <Component {...pageProps} />
      <CookieConsent />
      <SpeedInsights />
    </div>
  );
}

export default App;