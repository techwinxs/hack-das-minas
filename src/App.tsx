import { ThemeProvider } from 'styled-components';
import defaultStyle from './styles/theme/defaultStyle'
import GlobalStyles from './styles/GlobalStyles';

import HowDoYouFeel from './pages/how-do-you-feel';
// import Avatar from './components/sections/Avatar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultStyle}>
      <GlobalStyles />
      <HowDoYouFeel />
      {/* <Avatar /> */}
    </ThemeProvider>
  );
}

export default App;
