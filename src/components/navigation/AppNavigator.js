import { createStackNavigator, createAppContainer } from 'react-navigation'
import Launches from '../../screens/Launches'
import LaunchesDetail from '../../screens/LaunchesDetail'
import SignIn from '../../screens/SingIn'
import SignUp from '../../screens/SignUp'

const AppNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    },
    Launches: {
      screen: Launches,
    },
    LaunchesDetail: {
      screen: LaunchesDetail,
    },
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
    headerStyle: {
      backgroundColor: 'transparent',
    },
  },
)

export default createAppContainer(AppNavigator)
