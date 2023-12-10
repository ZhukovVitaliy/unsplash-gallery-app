import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ReristerLogin } from '../pages/rerister-login.jsx';
import { Layout } from './Layout.js';

const HomePage = lazy(() => import('../pages/home.jsx'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
const ImageDetails = lazy(() => import('../pages/image-details.jsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ReristerLogin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/image-details/:id" element={<ImageDetails />} />

        {/* <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/image"
          element={
            <PrivateRoute redirectTo="/image" component={<imagePage />} />
          }
        /> */}
      </Route>
    </Routes>
  );
};

export default App;
