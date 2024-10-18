// src/routes/Routes.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../features/auth/login';
import Register from '@/features/auth/register';
/*import Access from '../features/access/Access';
import Registration from '../features/auth/Registration';

import Onboarding from '../features/onboarding/Onboarding';
import Dashboard from '../features/dashboard/Dashboard';
import NotFound from '../components/NotFound/NotFound';*/

const AppRoutes = () => (
  <Router>
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/register' element={<Register />} />
      {/*  <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />*/}
    </Routes> 
  </Router>
);

export default AppRoutes;
