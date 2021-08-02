import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import ProfileScreen  from '../screens/Profile.js';

const Drawer=createDrawerNavigator();
export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <Drawer.Navigator screenOptions={{headerShown:false}}>
                <Drawer.Screen name="Stories" component={StackNavigator}/>
                <Drawer.Screen name="Profile" component={ProfileScreen}/>
            </Drawer.Navigator>
        )
    }
}