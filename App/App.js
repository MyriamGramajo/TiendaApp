
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './src/navigators/TabNavigator';
import { DrawerNavigator } from './src/navigators/DrawerNavigator';
import { StackNavigator } from './src/navigators/StackNavigator';
import { AuthContext } from './src/contexts/AuthContext';
import { AuthProvider } from './src/providers/AuthProvider';
//import { StackNavigator } from './src/navigators/StackNavigator';

export default function App() {
  return(
  
    <> 
     <StatusBar backgroundColor={'#e1bee7'} />
     <AuthProvider>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>

      </AuthProvider>
    </>

  );
}




 // {/*<StackNavigator />*/}