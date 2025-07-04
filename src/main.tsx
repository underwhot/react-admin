import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import Contacts from "./pages/Contacts.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Works from "./pages/Works.tsx";
import Root from "./pages/Root.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Work from "./pages/Work.tsx";

const router = createBrowserRouter(
  [
    {
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "works",
          element: <Works />,
        },
        {
          path: "works/:title",
          element: <Work />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
