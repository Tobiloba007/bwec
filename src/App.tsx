import type { ComponentType } from "react";
import { RouterProvider, useRouter } from "@/app/router";
import type { Route } from "@/app/router";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutPage } from "@/pages/AboutPage";
import { EventsPage } from "@/pages/EventsPage";
import { HomePage } from "@/pages/HomePage";
import { MentorshipPage } from "@/pages/MentorshipPage";
import { ProgramsPage } from "@/pages/ProgramsPage";

const PAGES: Record<Route, ComponentType> = {
  home: HomePage,
  about: AboutPage,
  programs: ProgramsPage,
  mentorship: MentorshipPage,
  events: EventsPage,
};

function Shell() {
  const { route } = useRouter();
  const Page = PAGES[route];

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-dark focus:px-5 focus:py-3 focus:font-heading focus:text-[14px] focus:text-white focus:shadow-lg"
        href="#main"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" key={route} className="page-enter">
        <Page />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}
