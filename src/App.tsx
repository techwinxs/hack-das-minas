import { ThemeProvider } from 'styled-components';
import defaultStyle from './styles/theme/defaultStyle'
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultStyle}>
      <GlobalStyles />
      <div className="App">
        Hack
      </div>
    </ThemeProvider>
  );
}

export default App;
