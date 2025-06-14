import {
  ACCOUNT_ROUTE,
  ADD_VEHICLE_ROUTE,
  FINAL_VEHICLE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  USERS_ROUTE,
  VEHICLE_DASHBOARD_ROUTE,
} from '../constants/paths';
import { ADMIN } from '../constants/roles';
import { AccountPage } from '../pages/accountPage/AccountPage';
import { AddVehiclePage } from '../pages/addVehiclePage/addVehiclePage';
import { FinalVehiclePage } from '../pages/finalVehiclePage/FinalVehiclePage';
import { HomePage } from '../pages/homePage/HomePage';
import { LoginPage } from '../pages/loginPage/LoginPage';
import { RegisterPage } from '../pages/registerPage/RegisterPage';
import { UsersPage } from '../pages/usersPage/UsersPage';
import { VehicleDashboardPage } from '../pages/vehicleDashboardPage/VehicleDashboardPage';

export const routes = [
  { path: HOME_ROUTE, element: <HomePage />, showHeaderAndFooter: false },
  {
    path: REGISTER_ROUTE,
    element: <RegisterPage />,
    showHeaderAndFooter: false,
  },
  { path: LOGIN_ROUTE, element: <LoginPage />, showHeaderAndFooter: false },
  {
    path: ACCOUNT_ROUTE,
    element: <AccountPage />,
    showHeaderAndFooter: true,
    protected: true,
  },
  {
    path: USERS_ROUTE,
    element: <UsersPage />,
    showHeaderAndFooter: true,
    protected: true,
    roles: [`${ADMIN}`],
  },
  {
    path: VEHICLE_DASHBOARD_ROUTE,
    element: <VehicleDashboardPage />,
    showHeaderAndFooter: true,
    protected: true,
  },
  {
    path: ADD_VEHICLE_ROUTE,
    element: <AddVehiclePage />,
    showHeaderAndFooter: true,
    protected: true,
  },
  {
    path: FINAL_VEHICLE_ROUTE,
    element: <FinalVehiclePage />,
    showHeaderAndFooter: true,
    protected: true,
  },
  { path: '*', element: <HomePage /> },
];
