import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(91, 228, 155)', // Custom primary color
    },
    text: {
      primary: 'rgb(145, 158, 171)',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    error: {
      main: '#ff5252', // Custom error color for badges
    },
    action: {
      selected: 'rgba(0, 167, 111, 0.08)', // Custom selected background color
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
