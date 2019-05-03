/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Play from './Artist';
import Home from './Home';

AppRegistry.registerComponent(appName, () => Home);
