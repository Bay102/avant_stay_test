import { ApolloProvider } from '@apollo/client';
import './App.css';
import { client } from './ApolloClient';
import { SearchPage } from './Components/SearchPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './Components/Providers/AppContextProvider';

function App() {
  return (
    <AppContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/homes" />} />
            <Route path="/homes" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </AppContextProvider>
  );
}

export default App;
