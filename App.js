import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Setting,Second,Tool} from './screens'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Second" component={Second} />
      <Drawer.Screen name="Tool" component={Tool} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
    </NavigationContainer>

  )
}

const TabNavigation=()=>{
  return(
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={StackNaviagtion} />
      <Tab.Screen name="Second" component={Second} />
      <Tab.Screen name="Tool" component={Tool} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  )
}


const StackNaviagtion=()=> {
  return (


<Stack.Navigator>
    <Stack.Screen name="Home" component={Home} 
    options={{ headerShown: false }}
    />
    <Stack.Screen name="Second" component={Second} />
    <Stack.Screen name="Tool" component={Tool} />
    <Stack.Screen name="Setting" component={Setting} />
  </Stack.Navigator>

    

  );
}


