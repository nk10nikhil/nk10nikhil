import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/elements/ThemeProvider";
import {
  useState,
  useEffect,
  lazy,
  Suspense,
  useCallback,
  useMemo,
} from "react";
import BackToTopButton from "./components/elements/BackToTopButton";
import Loader from "./pages/Loader";
import Navbar from "./components/section/Navbar";
import Footer from "./components/section/Footer";
import { useRuntimeProfile } from "./hooks/useRuntimeProfile";
import { getNavigatorConnection } from "./lib/browser";

// Eager load the main page for instant access
import Index from "./pages/Index";

// Lazy load secondary pages (loaded after initial render)
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Lightweight fallback replacing the heavy 3D animation
const MinimalLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-transparent">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const AppContent = () => {
  const { lowPower } = useRuntimeProfile();
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    const connection = getNavigatorConnection();
    const saveData = connection?.saveData === true;
    const slowNetwork = /2g|slow-2g/.test(connection?.effectiveType ?? "");

    if (saveData || slowNetwork || lowPower) {
      return;
    }

    const schedule =
      "requestIdleCallback" in window
        ? (cb: () => void) => window.requestIdleCallback(cb, { timeout: 2500 })
        : (cb: () => void) => window.setTimeout(cb, 1200);

    const id = schedule(() => {
      void import("./pages/Projects");
      void import("./pages/About");
    });

    const prefetchRemainingRoutes = () => {
      void import("./pages/Contact");
      void import("./pages/Services");
      void import("./pages/NotFound");
      window.removeEventListener("pointerdown", prefetchRemainingRoutes);
      window.removeEventListener("keydown", prefetchRemainingRoutes);
    };

    window.addEventListener("pointerdown", prefetchRemainingRoutes, {
      once: true,
      passive: true,
    });
    window.addEventListener("keydown", prefetchRemainingRoutes, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", prefetchRemainingRoutes);
      window.removeEventListener("keydown", prefetchRemainingRoutes);

      if ("cancelIdleCallback" in window) {
        try {
          window.cancelIdleCallback(id);
        } catch {
          // ignore
        }
        return;
      }
      clearTimeout(id);
    };
  }, [lowPower]);

  useEffect(() => {
    // Keep fixed startup delay for branded intro timing consistency (6 seconds)
    let loaderTimer: number | undefined;

    const contentTimer = window.setTimeout(() => {
      setContentReady(true);
      loaderTimer = window.setTimeout(() => {
        setLoading(false);
      }, 10);
    }, 6000);

    return () => {
      window.clearTimeout(contentTimer);
      if (loaderTimer !== undefined) {
        window.clearTimeout(loaderTimer);
      }
    };
  }, []);

  const handleTransitionEnd = useCallback(() => {
    setTransitionComplete(true);
  }, []);

  const contentStyle = useMemo(
    () => ({
      opacity: contentReady ? 1 : 0,
      transition: "opacity 0.4s ease-in",
      pointerEvents: contentReady ? ("auto" as const) : ("none" as const),
    }),
    [contentReady],
  );

  return (
    <>
      {!transitionComplete && (
        <Loader isLoading={loading} onTransitionEnd={handleTransitionEnd} />
      )}

      <div
        className="relative z-[1] bg-background min-h-screen"
        {...(contentStyle && { style: contentStyle })}
      >
        <Navbar />
        <Suspense fallback={<MinimalLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <BackToTopButton />
      </div>
    </>
  );
};

export function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" forcedTheme="dark">
        <TooltipProvider delayDuration={200}>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
