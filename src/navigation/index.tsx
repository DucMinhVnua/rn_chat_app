import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  AddGroupPage,
  ChatDetailPage,
  ListChatPage,
  LoginPage,
  Register,
  RoomChatPage,
} from '../pages';
import RoutesName from '../routes';
import RegisterPage from '../pages/register';

const Stack = createNativeStackNavigator();

const NavigationSetup = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RoutesName.login}
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RoutesName.register}
          component={RegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RoutesName.addGroup}
          component={AddGroupPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RoutesName.chatDetail}
          component={ChatDetailPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RoutesName.listChat}
          component={ListChatPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RoutesName.roomChat}
          component={RoomChatPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationSetup;
