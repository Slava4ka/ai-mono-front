import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

import {RootState} from 'main/rootReducer';

function withAuth<T>(WrappedComponent: React.ComponentType<T>): React.FC<T> {
	// eslint-disable-next-line func-names
	return function (props: any) {
		const isAuth = useSelector((state: RootState) => state.systemSlice.isAuthorized);

		if (!isAuth) {
			return (<Navigate to="/login" replace />);
		}
		return <WrappedComponent {...props} />;
	};
}

export default withAuth;
