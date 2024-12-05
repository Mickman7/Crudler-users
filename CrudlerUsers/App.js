import "react-native-gesture-handler";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "./src/components/UI/Profile";
import Home from "./src/components/screens/HomeScreen";
import DetailsScreen from "./src/components/screens/Details";

//Module screens
import ModuleListScreen  from './src/components/screens/ModuleListScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';

//User screens
import UserListScreen from './src/components/screens/UserListScreen';
import UserAddScreen from './src/components/screens/UserAddScreen';
import UserViewScreen from './src/components/screens/UserViewScreen';
import UserModifyScreen from './src/components/screens/UserModifyScreen';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function ModuleStack() {
  return (
    <Stack.Navigator initialRouteName='ModuleListScreen' screenOptions={{
      headerStyle: {backgroundColor: 'black'},
      headerTintColor: 'white',
    }}>
      <Stack.Screen 
      name='ModuleListScreen' 
      component={ModuleListScreen} 
      options={{title: 'List Modules'}}
      />


      <Stack.Screen
        name='ModuleAddScreen'
        component={ModuleAddScreen}
        options={{title: 'Add Modules'}}
      >

      </Stack.Screen>

      <Stack.Screen
        name='ModuleViewScreen'
        component={ModuleViewScreen}
        options={{title: 'View Modules'}}
      >

      </Stack.Screen>

      <Stack.Screen
        name='ModuleModifyScreen'
        component={ModuleModifyScreen}
        options={{title: ' Modules'}}
      />

    </Stack.Navigator>
  );
}


function UserStack() {
  return (
    <Stack.Navigator initialRouteName='UserListScreen' screenOptions={{
      headerStyle: {backgroundColor: 'black'},
      headerTintColor: 'white',
    }}>
           
      <Stack.Screen
        name='UserListScreen'
        component={UserListScreen}
        options={{title: 'User List'}}
      />


      <Stack.Screen
        name='UserAddScreen'
        component={UserAddScreen}
        options={{title: 'Add Users'}}
      />

      <Stack.Screen
        name='UserViewScreen'
        component={UserViewScreen}
        options={{title: 'View Users'}}
      />

      <Stack.Screen
        name='UserModifyScreen'
        component={UserModifyScreen}
        options={{title: 'Modify Users'}}
      /> 



    </Stack.Navigator>
  );
}

function HomeStack(){
  return (
    <Stack.Navigator initialRouteName='DetailsScreen' screenOptions={{
      headerStyle: {backgroundColor: 'black'},
      headerTintColor: 'white',
    }}>
      <Stack.Screen
        name='HomeScreen'
        component={Home}
        options={{title: 'Home Screen'}}
      /> 
      <Stack.Screen
        name='DetailsScreen'
        component={DetailsScreen}
        options={{title: 'Details'}}
      /> 

    </Stack.Navigator>
    )
  
}


export default function App() {


  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeStack}/>
          <Drawer.Screen name='Profile' initialParams={{name: 'Graeme Jones', dob: '21/01/1984', status: 'Staff', about: '#', current: 'Senior Lecturer'}} component={Profile}/>
          <Drawer.Screen name='Module Crudler' component={ModuleStack}/>
          <Drawer.Screen name='User Crudler' component={UserStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
