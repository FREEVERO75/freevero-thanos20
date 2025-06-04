import {
  ACCOUNT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  USERS_ROUTE,
} from '../constants/paths';
import { AccountPage } from '../pages/accountPage/AccountPage';
import { HomePage } from '../pages/homePage/HomePage';
import { LoginPage } from '../pages/loginPage/LoginPage';
import { RegisterPage } from '../pages/registerPage/RegisterPage';
import { UsersPage } from '../pages/usersPage/UsersPage';

export const routes = [
  { path: HOME_ROUTE, element: <HomePage />, showHeaderAndFooter: false },
  {
    path: REGISTER_ROUTE,
    element: <RegisterPage />,
    showHeaderAndFooter: false,
  },
  { path: LOGIN_ROUTE, element: <LoginPage />, showHeaderAndFooter: false },
  { path: ACCOUNT_ROUTE, element: <AccountPage />, showHeaderAndFooter: true },
  { path: USERS_ROUTE, element: <UsersPage />, showHeaderAndFooter: true },
  { path: '*', element: <HomePage /> },
];
