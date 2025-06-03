import { HomePage } from '../pages/homePage/HomePage';

export const routes = [
  { path: '/home', element: <HomePage /> },
  { path: '*', element: <HomePage /> },
];
