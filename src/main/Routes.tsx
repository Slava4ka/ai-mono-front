import { createHashRouter, Navigate } from 'react-router-dom';
import Authorization from 'pages/Authorization';
import Main from 'pages/Main';
import Result from 'pages/Result';
import Template from 'library/components/Template';

export default createHashRouter([
	{
		path: '/app',
		element: <Template />,
		children: [
			{ path: '', element: <Navigate to="/app/main" replace /> },
			{ path: '/app/main', element: <Main />},
			{ path: '/app/result/:file_name', element: <Result />},
		],
	},
	{ path: '/login', element: <Authorization /> },
	{ path: '/', element: <Navigate to="/app/main" replace /> },
	{ path: '*', element: <Navigate to="/app/main" replace /> },
]);
