import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { PAGE_META } from "@/data/site";

export const ROUTES = ["home", "about", "programs", "mentorship", "events"] as const;

export type Route = (typeof ROUTES)[number];

const isRoute = (value: string): value is Route => (ROUTES as readonly string[]).includes(value);

export const routeFromPath = (pathname: string = location.pathname): Route => {
  const value = pathname.replace(/^\/|\/$/g, "");
  return isRoute(value) ? value : "home";
};

type RouterValue = {
  route: Route;
  navigate: (to: Route, anchor?: string) => void;
};

const pathFor = (route: Route) => (route === "home" ? "/" : `/${route}`);

/** Open Graph keys live on `property`; every other meta tag uses `name`. */
const metaAttribute = (key: string) => (key.startsWith("og:") ? "property" : "name");

function setMeta(key: string, content: string) {
  const attribute = metaAttribute(key);
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.append(tag);
  }
  tag.setAttribute("content", content);
}

/** Keeps the canonical link pointing at the current page rather than the home page. */
function setCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.append(link);
  }
  link.setAttribute("href", href);
}

const RouterContext = createContext<RouterValue | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(routeFromPath);

  useEffect(() => {
    const onPopState = () => setRoute(routeFromPath());
    addEventListener("popstate", onPopState);
    return () => removeEventListener("popstate", onPopState);
  }, []);

  // Keep the document head in sync so each route is shareable and indexable.
  useEffect(() => {
    const meta = PAGE_META[route];
    const url = `${location.origin}${pathFor(route)}`;

    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("og:title", meta.title);
    setMeta("og:description", meta.description);
    setMeta("og:url", url);
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setCanonical(url);
  }, [route]);

  const navigate = (to: Route, anchor?: string) => {
    if (to !== route) {
      history.pushState({}, "", to === "home" ? "/" : `/${to}`);
      setRoute(to);
    }
    setTimeout(
      () =>
        anchor
          ? document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" })
          : scrollTo({ top: 0, behavior: "smooth" }),
      20,
    );
  };

  return <RouterContext.Provider value={{ route, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterValue {
  const value = useContext(RouterContext);
  if (!value) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return value;
}
