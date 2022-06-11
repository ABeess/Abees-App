import Router from './routes';
import ThemeProvider from './theme';
import theme from '@/theme';
import NotistackProvider from './components/NotistackProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotistackProvider>
        <Router />
      </NotistackProvider>
    </ThemeProvider>
  );
}

export default App;
