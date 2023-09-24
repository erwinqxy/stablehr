import { Dashboard } from './Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Onramp from './pages/OnrampPage';
import SwapPage from './pages/SwapPage';
// import Experiment from './examples/Experiment';


const links = [
  { path: '/Dashboard', label: 'Dashboard', element: <Onramp /> },
  { path: '/Onramp', label: 'Onramp', element: <Onramp /> },
  { path: '/Swap', label: 'Swap', element: <SwapPage /> },
  { path: '/Inbox', label: 'Inbox', element: <Onramp /> },
  // { path: '/Experiment', label: 'Experiment', element: <Experiment/> },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard children={<Outlet />}
      links={links} />,
    errorElement: <Navigate to={'/'} replace />,
    children: [
      {
        index: true,
        element: <Navigate to={links[0].path} replace />
      },
      ...links
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
