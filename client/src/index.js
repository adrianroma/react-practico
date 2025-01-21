import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
          EXAMEN PRÁCTICO
          </Typography>
        </Toolbar>
      </AppBar>
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
);