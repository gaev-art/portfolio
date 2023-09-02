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

import { Header } from "./shared/components/Header";

import "./i18n";
import "./assets/scss/style.scss";
import { Main } from "./pages/Main";
import { AboutPage } from "./pages/About";
import { ProjectsPage } from "./pages/Projects";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <div className="wrapper">
            <Header />
            <main className="page">
              <Outlet />
            </main>
          </div>
        </Suspense>
      }
    >
      <Route path="/" element={<Main />} />
      <Route path="/aboutMe" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
