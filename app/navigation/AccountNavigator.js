import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        option={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
