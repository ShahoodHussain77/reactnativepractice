import {
  createStackNavigator,
} from 'react-navigation';
import SearchScreen from './src/searchScreen';
import ResultScreen from './src/ResultScreen';
import BookDetails from './src/BookDetails';
import Dashboard from './src/Dashboard';

const App = createStackNavigator({
  Home: {
    screen: SearchScreen,
  },
  DashboardScreen: {
    screen: Dashboard
  },
  Result: {
    screen: ResultScreen,
    title: 'Results',
    passProps: {
      placeHolder: 'Javascript'
    }
  },
  bookDetails: {
    screen: BookDetails,
    title: 'Results',
    passProps: {
      placeHolder: 'Javascript'
    }
  }
});

export default App;