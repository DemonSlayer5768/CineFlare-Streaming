// pages/_app.js
import "../styles/global.css";
import ThemeToggle from "../components/ThemeToggle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeToggle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
