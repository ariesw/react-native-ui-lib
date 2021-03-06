import {Navigation} from 'react-native-navigation';
import BasicListScreen from './BasicListScreen';
import ContactsListScreen from './ContactsListScreen';
import ConversationListScreen from './ConversationListScreen';
import GridListScreen from './GridListScreen';

Navigation.registerComponent('example.lists.BasicListScreen', () => BasicListScreen);
Navigation.registerComponent('example.lists.ContactsListScreen', () => ContactsListScreen);
Navigation.registerComponent('example.lists.ConversationListScreen', () => ConversationListScreen);
Navigation.registerComponent('example.lists.GridListScreen', () => GridListScreen);
