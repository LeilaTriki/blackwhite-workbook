import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Reload once when a page chunk is stale (e.g. after a server restart/redeploy).
if (typeof window !== "undefined") {
  const KEY = "chunk-reload-at";
  const recover = (msg: string) => {
    if (!/Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module/i.test(msg)) return;
    const last = Number(sessionStorage.getItem(KEY) || 0);
    if (Date.now() - last < 10000) return;
    sessionStorage.setItem(KEY, String(Date.now()));
    window.location.reload();
  };
  window.addEventListener("vite:preloadError", (e) => { e.preventDefault(); window.location.reload(); });
  window.addEventListener("error", (e) => recover(String(e.message ?? "")));
  window.addEventListener("unhandledrejection", (e) => recover(String(e.reason?.message ?? e.reason ?? "")));
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultOnCatch: (err: Error) => {
      if (typeof window !== "undefined" && /dynamically imported module|Importing a module script failed/i.test(err?.message ?? "")) {
        const last = Number(sessionStorage.getItem("chunk-reload-at") || 0);
        if (Date.now() - last > 10000) {
          sessionStorage.setItem("chunk-reload-at", String(Date.now()));
          window.location.reload();
        }
      }
    },
  });

  return router;
};
