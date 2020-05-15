import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { addCardToDeckAsync } from '../utils/_decks';
import { addCardToDeck } from '../redux/ActionCreators';

// a view for adding a card to a specific deck

export default function AddCard ({ route, navigation }) {
    const [question, changeQue] = useState('')
    const [answer, changeAns] = useState('')
    const { deckTitle } = route.params

    const dispatch = useDispatch()
    
    const submitCard = () => {
        //add to db
        addCardToDeckAsync(deckTitle, question, answer)
        //update redux store
        dispatch(addCardToDeck(deckTitle, question, answer))
        //navigate to 'DeckScreen'
        navigation.navigate('Main', {screen: 'HomeScreen'})
        changeQue('');
        changeAns('');

    } 
    
    return (
        <View style={{flex: 1, backgroundColor: '#303030'}}>
            <ScrollView contentContainerStyle={styles.container}>

                <Input
                placeholder='Add your Question'
                onChangeText={value => changeQue(value)}
                inputStyle={{color: '#fff'}}
                />

                <Input
                placeholder='Enter your answer'
                onChangeText={value => changeAns(value)}
                inputStyle={{color: '#fff'}}
                />

                <Button
                disabled={question === '' || answer === ''}
                buttonStyle={styles.btn}
                title='SUBMIT'
                onPress={() => submitCard()}
                />

            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: '#424242',
        margin: 10,
        borderRadius: 7,
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
        marginBottom: 30,
        marginTop: 30
    },
    btn: {
        backgroundColor: '#212121',
        marginBottom: 30,
        width: 120
    }
})
