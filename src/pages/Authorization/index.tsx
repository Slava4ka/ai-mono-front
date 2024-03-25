import React from 'react';
import { RootState } from 'main/rootReducer';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AuthorizationForm from './components/AuthorizationForm';

interface IProps {}

const Authorization: React.FunctionComponent<IProps> = () => {
	const isAuth = useSelector((state: RootState) => state.systemSlice.isAuthorized);

	if (isAuth) {
		return (<Navigate to="/app/main" replace />);
	}

	return <AuthorizationForm />;
};

export default Authorization;
