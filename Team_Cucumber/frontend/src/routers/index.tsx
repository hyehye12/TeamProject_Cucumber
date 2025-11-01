// router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LandingPage,
  TestHeminPage,
  TestJoowonPage,
  TestNaraPage,
  TestPage,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <TestPage />,
    children: [
      { path: "Hemin", element: <TestHeminPage /> },
      { path: "Joowon", element: <TestJoowonPage /> },
      { path: "Nara", element: <TestNaraPage /> },
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
