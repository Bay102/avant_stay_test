import { ApolloProvider } from '@apollo/client';
import './App.css';
import { client } from './ApolloClient';
import { SearchPage } from './Components/SearchPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './Components/Providers/AppContextProvider';

function App() {
  return (
    <AppContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </AppContextProvider>
  );
}

export default App;
