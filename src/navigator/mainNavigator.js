import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial173768Navigator from '../features/Tutorial173768/navigator';
import NotificationList173740Navigator from '../features/NotificationList173740/navigator';
import Settings173739Navigator from '../features/Settings173739/navigator';
import Settings173731Navigator from '../features/Settings173731/navigator';
import UserProfile173729Navigator from '../features/UserProfile173729/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial173768: { screen: Tutorial173768Navigator },
NotificationList173740: { screen: NotificationList173740Navigator },
Settings173739: { screen: Settings173739Navigator },
Settings173731: { screen: Settings173731Navigator },
UserProfile173729: { screen: UserProfile173729Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
