"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

export function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();

    const timeoutId = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      NProgress.done();
    };
  }, [pathname, searchParams]);

  return null;
}
