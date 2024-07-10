import { useRoutes } from 'react-router-dom';

import MainLayout from '../components/Layouts/MainLayout';
import { ROUTE_PATH } from '../config/route_paths';
import { Home, Service } from '../pages';

const ProtectedRoute = () => {
  // const token = localStorage.getItem(common.LOCAL_STORAGE_KEYS.TOKEN);
  // if (!token) {
  //   return <Navigate to={RoutePath.LOGIN} replace />;
  // }
  return <MainLayout />;
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: ROUTE_PATH.HOME,
          element: <Home />,
        },
        {
          path: ROUTE_PATH.SERVICE,
          element: <Service />,
        },
      ],
    },
  ]);
}
