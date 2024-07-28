"use client";

import { darkAtom } from "@/utils/helpers";
import { NextUIProvider } from "@nextui-org/system";
import { Provider, useAtom } from "jotai";
import { useEffect } from "react";
import { Bounce, ToastContainer } from "react-toastify";

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
      <Provider>
        <NextUIProvider>
          <main>{children}</main>

          <ToastContainer
            position="top-center"
            autoClose={1000}
            newestOnTop={false}
            closeOnClick
            draggable
            pauseOnHover
            theme={dark ? "dark" : "light"}
            transition={Bounce}
          />
        </NextUIProvider>
      </Provider>
    </>
  );
}
