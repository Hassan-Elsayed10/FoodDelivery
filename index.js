/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './slices'
const connectedApp = ()=> (
    <Provider store={store}>
       <App/>
    </Provider>
    );
AppRegistry.registerComponent(appName, () => connectedApp);