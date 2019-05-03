import {
  createStackNavigator,
} from 'react-navigation';
import { Main } from './component/main';

const App = createStackNavigator({
  Home: {
    screen: Main,
    title: 'Search',
  }
});

export default App;