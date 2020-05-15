import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import AddDeck from './AddDeck';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator()


export default function Main () {
    return(
            <Tab.Navigator
            
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = 'home';
                  if (route.name === 'HomeScreen') {
                    iconName = 'home';
                  } else if (route.name === 'Add Deck') {
                    iconName = 'book';
                  }
                  return <Entypo name={iconName} size={size} color={color} />;
                }
              })
            }
            
            tabBarOptions={{
              style: {
                backgroundColor: '#000', 
                borderTopColor: '#212121'
              },
              activeTintColor: '#fff',
              inactiveTintColor: '#818181'
            }}
            >
                <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                />    
                
                <Tab.Screen 
                name='Add Deck' 
                component={AddDeck} 
                />
            </Tab.Navigator>
    );
}