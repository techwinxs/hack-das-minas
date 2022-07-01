import { ThemeProvider } from 'styled-components';
import defaultStyle from './styles/theme/defaultStyle'
import GlobalStyles from './styles/GlobalStyles';

import Avatar from './components/Avatar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultStyle}>
      <GlobalStyles />
      <Avatar />
    </ThemeProvider>
  );
}

export default App;
