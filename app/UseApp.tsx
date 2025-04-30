"use client";

import React from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import useAuthStateListener from "@/hooks/useAuthStateListener";
import { QueryClient, QueryClientProvider } from "react-query";
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { Toaster } from 'react-hot-toast';
import Navbar from "@/components/Navbar/Navbar";

const queryClient = new QueryClient();

export default function UseApp({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AppWrapper>{children}</AppWrapper>
    </Provider>
  );
};

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Lista de rutas que usan un diseño diferente
  const simpleLayoutRoutes = ["/signin", "/register", "/auth/accounts/forgot-password", "/auth/accounts/reset-password", "/admin"];
  const isSimpleLayout = simpleLayoutRoutes.includes(pathname);

  return (
    <SessionProvider>
      <ThemeProvider
        storageKey="theme"
        defaultTheme="system"
        enableSystem
        enableColorScheme
        disableTransitionOnChange
        attribute="class"
      >
        <AuthStateListenerWrapper>
          <QueryClientProvider client={queryClient}>
            <NextTopLoader
              color="#6C47BF"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              zIndex={1600}
              showAtBottom={false}
            />
            <>
              {!isSimpleLayout && <Navbar />}

              <div
                role="main"
                id="content-wrapper"
                className={`bg-white dark:bg-neutral-900 min-h-dvh duration-200 w-full`}
              >
                {!isSimpleLayout && (
                  <div className="w-full mx-auto max-w-screen-2xl grid grid-cols-1 md:grid-cols-[270px_1fr]">
                    <div className="w-full">
                      {/* <NavbarHeader /> */}
                      <div className="w-full mx-auto max-w-screen-xl">
                        {children}
                      </div>
                    </div>
                  </div>
                )}

                {isSimpleLayout && (
                  <>
                    {children}
                  </>
                )}
              </div>

              {/* {!isSimpleLayout && <NavbarBottom />} */}
            </>
            {/* toaster */}
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: '#333',
                  color: '#fff',
                },
              }}
            />
          </QueryClientProvider>
        </AuthStateListenerWrapper>
      </ThemeProvider>
    </SessionProvider>
  );
};

// Hacemos uso de useAuthStateListener dentro de un componente envuelto por SessionProvider
const AuthStateListenerWrapper = ({ children }: { children: React.ReactNode }) => {
  useAuthStateListener();
  return <>{children}</>;
};