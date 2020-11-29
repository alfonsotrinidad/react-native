import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
const  Stack = createStackNavigator() 
import  Userlist from './screens/Userlist';
import  crear from './screens/crear';
import  userdetails from './screens/userdetails';
function Ventanas(){
return(
  <Stack.Navigator>
      <Stack.Screen name="createusers" component = {crear} />
  
    <Stack.Screen 
      name="userlist"
      component = {Userlist}
      options={{ title: 'Lista de usuarios' }} />
    <Stack.Screen name="detaillist" component = {userdetails} />
  </Stack.Navigator>
)
}


export default function App() {
  return (
  <NavigationContainer>
    <Ventanas/>
  </NavigationContainer>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
