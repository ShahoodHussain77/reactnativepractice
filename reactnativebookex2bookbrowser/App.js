import {
  createStackNavigator,
} from 'react-navigation';
import SearchScreen from './searchScreen';
import ResultScreen from './ResultScreen';
import BookDetails from './BookDetails';

const App = createStackNavigator({
  Home: { screen: SearchScreen,
    title: 'Search',
    passProps: {
      placeHolder: 'Javascript'
    }
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