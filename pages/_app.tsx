import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Theme } from "react-daisyui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme dataTheme="light">
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
    </Theme>
  );
}
