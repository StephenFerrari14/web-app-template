import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import GlobalProvider from './GlobalProvider.tsx'
import theme from './theme.tsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalProvider>
        <RouterProvider router={routes} />
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
