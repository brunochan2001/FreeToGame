import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './lib/theme';
import { GamePage, GameSinglePage } from './pages';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<GamePage />} />
            <Route path=":id" element={<GameSinglePage />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default App;
