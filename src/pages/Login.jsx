import React from 'react';
import LoginContainer from '../containers/Login';

import { redirectIfAuthentificated } from '../hoc/redirectIfAuthentificated';

const Login = () => <LoginContainer />;

export default redirectIfAuthentificated(Login);
