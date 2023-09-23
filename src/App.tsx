import { Dashboard } from "./Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Onramp from "./pages/OnrampPage";
import SwapPage from "./pages/SwapPage";
import HomePage from "./pages/HomePage";

const links = [
  { path: "/home", label: "Home", element: <HomePage /> },
  { path: "/onramp", label: "Onramp", element: <Onramp /> },
  { path: "/swap", label: "Swap", element: <SwapPage /> },
  { path: "/inbox", label: "Inbox", element: <Onramp /> },
  { path: "/messages", label: "Messages", element: <Onramp /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard children={<Outlet />} links={links} />,
    errorElement: <Navigate to={"/"} replace />,
    children: [
      {
        index: true,
        element: <Navigate to={links[0].path} replace />,
      },
      ...links,
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
