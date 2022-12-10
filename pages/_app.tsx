import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Theme, Navbar, Button, Swap, SwapProps } from "react-daisyui";
import { IconSunHigh } from "@tabler/icons";
import { IconMoon } from "@tabler/icons";

const swapProps: SwapProps = {
  rotate: true,
  onElement: <IconMoon />,
  offElement: <IconSunHigh />,
};

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Theme dataTheme={`${isDarkMode ? "dark" : "light"}`}>
      <main className="min-h-screen">
        {/* global navbar */}
        <Navbar className="flex justify-between">
          <section className="md:ml-auto">
            <Button className="text-xl normal-case" color="ghost">
              Thoughts Board
            </Button>
          </section>
          <section className="md:mr-auto">
            <Swap
              {...swapProps}
              active={isDarkMode}
              onClick={() => setIsDarkMode((prevActive) => !prevActive)}
            ></Swap>
          </section>
        </Navbar>
        {/* main content */}
        <Component {...pageProps} />
        {/* global footer */}
      </main>
    </Theme>
  );
}
