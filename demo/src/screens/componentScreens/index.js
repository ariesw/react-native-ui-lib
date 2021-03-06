import {Navigation} from 'react-native-navigation';
import AvatarsScreen from './AvatarsScreen';
import AnimatedImageScreen from './AnimatedImageScreen';
import ButtonsScreen from './ButtonsScreen';
import BadgesScreen from './BadgesScreen';
import CardsScreen from './CardsScreen';
import ConnectionStatusBarScreen from './ConnectionStatusBarScreen';
import FormScreen from './FormScreen';
import PageControlScreen from './PageControlScreen';

Navigation.registerComponent('example.components.AvatarsScreen', () => AvatarsScreen);
Navigation.registerComponent('example.components.AnimatedImageScreen', () => AnimatedImageScreen);
Navigation.registerComponent('example.components.ButtonsScreen', () => ButtonsScreen);
Navigation.registerComponent('example.components.BadgesScreen', () => BadgesScreen);
Navigation.registerComponent('example.components.CardsScreen', () => CardsScreen);
Navigation.registerComponent('example.components.ConnectionStatusBar', () => ConnectionStatusBarScreen);
Navigation.registerComponent('example.components.FormScreen', () => FormScreen);
Navigation.registerComponent('example.components.PageControlScreen', () => PageControlScreen);
