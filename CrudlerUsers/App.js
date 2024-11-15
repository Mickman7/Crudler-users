import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Module screens
import  ModuleListScreen  from './src/components/screens/ModuleListScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';

//User screens
import UserListScreen from './src/components/screens/UserListScreen';
// import UserAddScreen from './src/components/screens/UserAddScreen';
import UserViewScreen from './src/components/screens/UserViewScreen';
// import UserModifyScreen from './src/components/screens/UserModifyScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>

      <Stack.Navigator initialRouteName='UserListScreen' screenOptions={{
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


        {/* User screens */}
        
        <Stack.Screen
          name='UserListScreen'
          component={UserListScreen}
          options={{title: 'List Users'}}
        />


        {/* <Stack.Screen
          name='UserAddScreen'
          component={UserAddScreen}
          options={{title: 'Add Users'}}
        /> */}

        <Stack.Screen
          name='UserViewScreen'
          component={UserViewScreen}
          options={{title: 'View Users'}}
        />
{/* 
        <Stack.Screen
          name='UserModifyScreen'
          component={UserModifyScreen}
          options={{title: 'Modify Users'}}
        />  */}



      </Stack.Navigator>
    </NavigationContainer>
  );
}
