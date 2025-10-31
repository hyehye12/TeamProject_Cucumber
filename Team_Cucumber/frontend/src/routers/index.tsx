// router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage, PersonPage, TestHome, TestPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <TestPage />,
    children: [
      { index: true, element: <TestHome /> },
      { path: ":name", element: <PersonPage /> },
    ],
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
