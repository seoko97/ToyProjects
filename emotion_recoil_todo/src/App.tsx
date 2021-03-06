import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@theme/.';
import Main from '@pagelist/main';
import Signin from '@pagelist/signin';
import Signup from '@pagelist/signup';
import AppLayout from '@frames/AppLayout';
import GlobalStyle from '@theme/globalStyle';
import { useSetRecoilState } from 'recoil';
import { userState } from '@states/Atoms';
import { getUserInfo } from '@api/users';

const App = () => {
	const setUserInfo = useSetRecoilState(userState);

	useEffect(() => {
		getUserInfo().then((username) => {
			if (username) setUserInfo({ username });
		});
	}, [setUserInfo]);

	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<GlobalStyle theme={theme} />
					<AppLayout>
						<Switch>
							<Route path="/" component={Main} exact />
							<Route path="/signin" component={Signin} exact />
							<Route path="/signup" component={Signup} exact />
						</Switch>
					</AppLayout>
				</Router>
			</ThemeProvider>
		</>
	);
};

export default App;
