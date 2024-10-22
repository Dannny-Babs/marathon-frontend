// src/routes/Routes.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../features/auth/login';
import Register from '@/features/auth/register';
import ForgotPassword from '@/features/auth/forgotPassword';
import Dashboard from '@/features/dashboard/page';
import ErrorPage from '@/components/layout/404-page';
// import Access from '../features/access/Access';
// import Registration from '../features/auth/Registration';
// import Onboarding from '../features/onboarding/Onboarding';
// import NotFound from '../components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,

  },
  {
    path: "/dashboard/*",
    element: <Dashboard />,

  },


  //   path: "/onboarding",
  //   element: <Onboarding />,
  // },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default function AppRoutes(): JSX.Element {
  return <RouterProvider router={router} />;
}

