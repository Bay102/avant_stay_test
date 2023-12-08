import { ApolloProvider } from '@apollo/client';
import './App.css';
import { client } from './ApolloClient';
import { Search } from './Components/Search';

function App() {
  return (
    <ApolloProvider client={client}>
      <Search />
    </ApolloProvider>
  );
}

export default App;
