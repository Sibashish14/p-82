import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PostScreen from '../screens/PostScreen';
import TabNavigator from './TabNavigator';

const Stack=createStackNavigator();
export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator screenOptions={{headerShown:false}} initialRoutename="Home">
                <Stack.Screen name="Home" component={TabNavigator}/>
                <Stack.Screen name="Post" component={PostScreen}/>
            </Stack.Navigator>
        )
    }
}