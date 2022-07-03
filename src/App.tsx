import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { defaultStyle } from './styles/theme/defaultStyle'
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultStyle}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
