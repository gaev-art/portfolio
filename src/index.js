import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  NavLink,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./i18n";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <div className=" flex h-[70px] justify-center items-center gap-10 w-full">
            <NavLink to="/aboutMe">aboutMe</NavLink>
            <NavLink to="/projects">projects</NavLink>
          </div>
          <Outlet />
        </Suspense>
      }
    >
      <Route path="/" element={<div>Main</div>} />
      <Route path="/aboutMe" element={<div>AboutMe</div>} />
      <Route path="/projects" element={<div>Projects</div>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
