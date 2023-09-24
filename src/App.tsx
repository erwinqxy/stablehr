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
import HomeIcon from "./resources/assets/icons/home.svg";
import OnrampIcon from "./resources/assets/icons/onramp.svg";
import SwapIcon from "./resources/assets/icons/swap.svg";
import InboxIcon from "./resources/assets/icons/inbox.svg";
import MessageIcon from "./resources/assets/icons/message.svg";
import AddressPage from "./pages/AddressBook";

const links = [
  {
    path: "/home",
    label: "Home",
    element: <HomePage />,
    icon: HomeIcon,
  },
  { path: "/onramp", label: "Onramp", element: <Onramp />, icon: OnrampIcon },
  { path: "/swap", label: "Swap", element: <SwapPage />, icon: SwapIcon },
  // { path: "/inbox", label: "Inbox", element: <Onramp />, icon: InboxIcon }
  { path: "/addressBook", label: "Address Book", element: <AddressPage />, icon: InboxIcon },
  // { path: '/Experiment', label: 'Experiment', element: <Experiment/> },
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
