import { AppRegistry } from 'react-native';
import RegisterPage from './src/pages/register/register-page';
import LoginPage from './src/pages/login/login-page';
import { StackNavigator } from 'react-navigation';

const AppNav = StackNavigator({
    Register: {screen: RegisterPage},
    Login: {screen: LoginPage},
  });

AppRegistry.registerComponent('rnBloodSrc', () => AppNav);
