import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Setting,Second,Tool} from './screens'
import {color} from './utils/constants'
import Ionicons from '@expo/vector-icons/Ionicons'
import Header from './components/Header'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeTabNavigation} option={{tilte:"Home"}} />
      <Drawer.Screen name="Second" component={HomeTabNavigation} />
      <Drawer.Screen name="Tool" component={HomeTabNavigation} />
      <Drawer.Screen name="Setting" component={HomeTabNavigation} />
    </Drawer.Navigator>
    </NavigationContainer>

  )
}

const HomeTabNavigation=()=>{
  return(
    <Tab.Navigator 
    screenOptions={({route})=>({
      // headerShown:false,
      tabBarStyle:{
       backgroundColor:color.black,
       borderColor:color.black,
       elevation:0
      },
 
       tabBarIcon:({focused,color,size})=>{
         let iconName;
         
         if (route.name === 'Home tab') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Second tab') {
          iconName = focused ? 'md-checkbox' : 'md-checkbox-outline';
        }
        else if (route.name === 'Tool tab') {
          iconName = focused ? 'md-chatbox' : 'md-chatbox-outline';
        }
        else if (route.name === 'Setting tab') {
          iconName = focused ? 'ios-settings' : 'md-settings-outline';
        }
 
 
         return <Ionicons name={iconName} size={size} color={"#78ad92"} />;
       },
       tabBarActiveTintColor: color.white,
       tabBarInactiveTintColor:color.white,
       tabBarShowLabel:false
     })}
    
    >
      <Tab.Screen 
        options={{
          headerTitle:(props)=><Header {...props} />,
          headerStyle:{
            backgroundColor:color.lightgreen
          }
        }}
      name="Home tab" component={HomeStackComponent} />
      <Tab.Screen name="Second tab" component={SecondStackComponent} />
      <Tab.Screen name="Tool tab" component={ToolStackComponent} />
      <Tab.Screen name="Setting tab" component={SettingStackComponent} />
    </Tab.Navigator>
  )
}




const HomeStackComponent=()=>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="stack home" component={Home} />
      </Stack.Navigator>
  )
}

const SecondStackComponent=()=>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="stack second" component={Second} />
      </Stack.Navigator>
  )
}

const ToolStackComponent=()=>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="stack tool" component={Tool} />
      </Stack.Navigator>
  )
}

const SettingStackComponent=()=>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="stack Setting" component={Setting} />
      </Stack.Navigator>
  )
}



