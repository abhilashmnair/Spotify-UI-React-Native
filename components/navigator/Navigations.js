import PlayerScreen from "../../screens/PlayerScreen";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";
import LibraryScreen from "../../screens/LibraryScreen"
import ArtistScreen from '../../screens/ArtistScreen'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown : false,
    presentation: 'modal'
}
const SignedStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName = 'HomeScreen' screenOptions = {screenOptions} >
            <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
            <Stack.Screen name = 'PlayerScreen' component = {PlayerScreen} />
            <Stack.Screen name = 'SearchScreen' component = {SearchScreen} />
            <Stack.Screen name = 'LibraryScreen' component = {LibraryScreen} />
            <Stack.Screen name = 'ArtistScreen' component = {ArtistScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedStack