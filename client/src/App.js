import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Login from './pages/Login';
import Store from './pages/Store';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Site from './Site';
import './styles/App.css';

const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {

return (
    <ApolloProvider client={client}>
        <Router>

            <Routes>

                <Route
                    path='/'
                    element={<Site />}
                />

                <Route
                    path='/Login'
                    element={ <>
                    <Nav/>
                    <Login/>
                    </> }
                />
                <Route
                    path='/Signup'
                    element={ <>
                      <Nav/>
                      <Signup/>
                      </> }
                />
                <Route
                    path='/Store'
                    element={ <>
                      <Nav/>
                      <Store/>
                      </> }
                />
            </Routes>
        </Router>
    </ApolloProvider>
)
};

export default App;
