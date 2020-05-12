import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons';
import { Entypo } from '@expo/vector-icons';
import Home from './Home';
import AddDeck from './AddDeck';
import { ScrollView, AsyncStorage } from 'react-native';

const Tab = createBottomTabNavigator()

export default function Main () {
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = 'home';
      
                  if (route.name === 'Home') {
                    iconName = 'home';
                  } else if (route.name === 'Add Deck') {
                    iconName = 'book';
                  }
                  // You can return any component that you like here!
                  return <Entypo name={iconName} size={size} />;
                }
              })}
            >
                <Tab.Screen name='Home' component={Home} />    
                <Tab.Screen name='Add Deck' component={AddDeck} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}