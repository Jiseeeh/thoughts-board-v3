import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import { Theme, Navbar, Button, Swap, SwapProps, Footer } from "react-daisyui";
import { Toaster } from "react-hot-toast";
import {
  IconSunHigh,
  IconMoon,
  IconFlower,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandPrisma,
} from "@tabler/icons";

const swapProps: SwapProps = {
  rotate: true,
  onElement: <IconMoon />,
  offElement: <IconSunHigh />,
};

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  const handleOnNavbarButtonClick = () => {
    if (router.pathname !== "/") router.push("/");
  };

  return (
    <Theme dataTheme={`${isDarkMode ? "dark" : "light"}`}>
      <main className="min-h-screen flex flex-col">
        {/* global navbar */}
        <Navbar className="flex justify-between">
          <section className="md:ml-auto">
            <Button
              className="text-xl normal-case"
              color="ghost"
              onClick={handleOnNavbarButtonClick}
            >
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
        <Footer className="p-5 mt-auto bg-neutral text-neutral-content">
          {/* TODO: Add links */}
          <section className="h-full flex items-center">
            <section className="flex items-center">
              <Button
                onClick={() =>
                  router.push("https://github.com/Jiseeeh/thoughts-board-v3")
                }
              >
                <IconBrandGithub />
              </Button>
              <Button
                onClick={() =>
                  router.push("https://www.linkedin.com/in/john-carlo-camara/")
                }
              >
                <IconBrandLinkedin />
              </Button>
              <span className="font-bold">
                Made by &lt;Jiseeeh&nbsp;&#47;&gt;{" "}
              </span>
            </section>
          </section>
          <section>
            <Footer.Title>Tech used</Footer.Title>
            <article className="flex flex-col">
              <section className="flex">
                <span>Next.js &nbsp;</span>
                <IconBrandNextjs />
              </section>
              <section className="flex">
                <span>Tailwindcss &nbsp;</span>
                <IconBrandTailwind />
              </section>
              <section className="flex">
                <span>MongoDB &nbsp;</span>
                <IconBrandMongodb />
              </section>
              <section className="flex">
                <span>Prisma &nbsp;</span>
                <IconBrandPrisma />
              </section>
              <section className="flex">
                <span>React-DaisyUI &nbsp;</span>
                <IconFlower />
              </section>
            </article>
          </section>
        </Footer>
        <Toaster />
      </main>
    </Theme>
  );
}
