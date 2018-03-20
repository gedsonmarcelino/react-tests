import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://api.quimera.com/graphql',
    useGETForQueries: true,
    fetchOptions: { method: "GET" }
  }),
  cache: new InMemoryCache()
});

const query = gql`
query FetchPessoas {
  pessoas( cpf: "12345678901" ) {
    id,
    nome
  }
}
`
client.query({
  query: query
}).then( response => console.log(response) )


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();



// client.use([{
//   applyMiddleware(req, next) {
//     req.options.headers = {}
//     if (!req.options.headers) {
//        = {

//       };  // Create the header object if needed.
//     }

//     // get the authentication token from local storage if it exists
//     // AsyncStorage.getItem('sessionToken').then((token) => {
//     //   req.options.headers.Authorization = token ? `${token}` : null;
//     //   next();
//     // });

//     next();
//   }
// }]);