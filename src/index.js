import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./i18n";
import "./index.css";
import { Banner } from "./pages/banner/Banner";
import { AboutMe } from "./pages/about/AboutMe";
import { Projects } from "./pages/projects/Projects";
import { Header } from "./shared/components/Header";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Outlet />
        </Suspense>
      }
    >
      <Route path="/" element={<Banner />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
