import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/themes/default";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
