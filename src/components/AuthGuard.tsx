"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      // Allow access to reset-password page without authentication
      if (pathname === "/reset-password") {
        setIsAuthenticated(true);
        return;
      }

      if (!token) {
        router.replace("/signin");
      } else {
        setIsAuthenticated(true);
      }
    }
  }, [pathname, router]);

  if (isAuthenticated === null) {
    return null;
  }

  return <>{children}</>;
}
