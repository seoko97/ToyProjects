import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../utils/apollo';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const client = useApollo(pageProps);

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

export default MyApp;
