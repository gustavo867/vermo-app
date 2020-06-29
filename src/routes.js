import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Login from './Login';
import ForgotPassword from './ForgotPassword';
import CheckYourEmail from './CheckYourEmail';
import ResetPassword from './ResetPassword';

const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: "#fff"
                }
            }}
            >
                <AppStack.Screen name='Login' component={Login}/>
                <AppStack.Screen name='ForgotPassword' component={ForgotPassword}/>
                <AppStack.Screen name='CheckYourEmail' component={CheckYourEmail}/>
                <AppStack.Screen name='ResetPassword' component={ResetPassword}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes