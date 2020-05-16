import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { removeDeckAsync } from '../utils/_decks';
import { removeDeck } from '../redux/ActionCreators';
import { SafeAreaView } from 'react-native-safe-area-context';

//a view about the individual deck whose information is recieved as props

export default function DeckDetail ({ route, navigation }) {
    const { deck} = route.params;
    const deckTitle  = deck.title;
    const recentDeck = useSelector(state => state[deckTitle]);
    const cards = recentDeck ? recentDeck.questions.length : 0;
    const dispatch = useDispatch();
    
    const deleteDeck = () => {
        //delete from store
        
        // //delete from db
        removeDeckAsync(deckTitle).then(res => dispatch(removeDeck(deckTitle)))
        .then(res => navigation.navigate('Main', {screen: 'HomeScreen'}))
        // //navigate to Main
        
    }

    const addCard = () => {
        navigation.navigate('AddCardScreen',{
            deckTitle: deckTitle
        })
    }

    const startQuiz = () => {
        navigation.navigate('QuizScreen', {
            deck: recentDeck
        })
    }
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#303030', }}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {deckTitle}
                </Text>
                <Text style={{color: '#818181', marginBottom: 15}}>{cards} cards</Text>
                <Button
                buttonStyle={styles.btn} 
                title='Add Card'
                onPress={() => addCard()}
                />
                
                <Button 
                buttonStyle={styles.btn} 
                title='Delete Deck' 
                onPress={() => deleteDeck()}
                />

                <Button
                buttonStyle={styles.btn}
                title='Start Quiz'
                onPress={() => startQuiz()}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        backgroundColor: '#424242',
        margin: 10,
        borderRadius: 7,
        // justifyContent: 'center',
        alignItems: "center",
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    text: {
        fontSize: 24,
        marginBottom: 10,
        marginTop: 30,
        color: '#fff'
    },
    btn: {
        backgroundColor: '#212121',
        marginBottom: 30,
        width: 120
    }
})
