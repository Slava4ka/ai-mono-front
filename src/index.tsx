import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import routes from 'main/Routes';
import store from 'main/rootReducer';
import ThemeConfig from 'resources/theme';
// import AuthorizationContainer from 'library/components/AuthorizationContainer';

import './resources/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
	<Provider store={store}>
		<ThemeConfig>
			<RouterProvider router={routes} />
		</ThemeConfig>
		<ToastContainer />
	</Provider>,
);
