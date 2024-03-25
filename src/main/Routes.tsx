import { createHashRouter, Navigate } from 'react-router-dom';
import Authorization from 'pages/Authorization';
import Main from 'pages/Main';

export default createHashRouter([
	{ path: '/app/main', element: <Main />},
	{ path: '/login', element: <Authorization /> },
	{ path: '*', element: <Navigate to="/app/main" replace /> },
]);
