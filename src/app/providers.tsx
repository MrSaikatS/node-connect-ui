"use client";

import { darkAtom } from "@/utils/atoms";
import { NextUIProvider } from "@nextui-org/system";
import { useAtom } from "jotai";
import { useEffect } from "react";

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

export function Providers({ children }: ProvidersProps) {
  const [dark, setDark] = useAtom(darkAtom);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <NextUIProvider>
        <main>
          {children}
          </main>
          </NextUIProvider>
    </>
  );
}
