import { createRouter } from '@expo/ex-navigation';
import HomeScreen from './components/home';
import DetailScreen from './components/details';

export default createRouter(() => ({
  home: () => HomeScreen,
  details: () => DetailScreen
}));
