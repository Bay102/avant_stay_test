import { ApolloProvider } from '@apollo/client';
import './App.css';
import { client } from './ApolloClient';
import { SearchPage } from './Components/SearchPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './Components/Providers/AppContextProvider';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/homes" />} />
            <Route path="/homes" element={<SearchPage />} />
            <Route path="/regions/:regionName" element={<SearchPage />} />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
