import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main'
import { NavigationContainer } from '@react-navigation/native'
import Quiz from './Quiz';
import DeckDetail from './DeckDetail';
import AddCard from './AddCard';

const Stack = createStackNavigator()

export default function Home () {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                
                <Stack.Screen name='Main' component={Main}
                options={{headerShown: false}} />
                
                <Stack.Screen name='DeckScreen' component={DeckDetail}
                options={{
                    title: 'Deck Details',
                    headerStyle: {backgroundColor: '#212121'},
                    headerTintColor: '#fff'
                }} />

                <Stack.Screen name='AddCardScreen' component={AddCard}
                options={{
                    title: 'Add a Card',
                    headerStyle: {backgroundColor: '#212121'},
                    headerTintColor: '#fff'
                }} />

                <Stack.Screen name='QuizScreen' component={Quiz}
                options={{
                    title: 'Quiz',
                    headerStyle: {backgroundColor: '#212121'},
                    headerTintColor: '#fff'
                }} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}
