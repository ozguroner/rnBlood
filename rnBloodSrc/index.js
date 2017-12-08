import { AppRegistry } from 'react-native';
import RegisterPage from './src/pages/register/register-page';
import EmailRegisterPage from './src/pages/emailregister/emailregister-page';
import LoginPage from './src/pages/login/login-page';
import { StackNavigator } from 'react-navigation';

const AppNav = StackNavigator({
    Register: {screen: RegisterPage},
    Login: {screen: LoginPage},
    EmailRegister: {screen: EmailRegisterPage}
  });

AppRegistry.registerComponent('rnBloodSrc', () => AppNav);
