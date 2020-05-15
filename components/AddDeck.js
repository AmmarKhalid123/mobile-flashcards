import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { saveDeckTitle } from '../utils/_decks';
import { Header, Input, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addDeckTitle } from '../redux/ActionCreators';

//View for adding a deck to the application

export default function AddDeck ({ navigation }) {
    
    const [title, changeTitle] = useState('');

    const dispatch = useDispatch();

    const submit = () => {
        //storing in DB
        //dispatching to store
        //navigating to the Individual deck view
        saveDeckTitle(title).then(res => dispatch(addDeckTitle(title)))
        .then(navigation.navigate('DeckScreen',{
            deck: {title: title, questions: []}
        }))
        changeTitle('')
    }

    return(
        <View style={{flex:1}}>
            
            <Header
                containerStyle={{
                    backgroundColor: '#212121',
                    marginBottom: 0
                }}
                barStyle='default'
                centerComponent={{ text: 'Add Deck', style: { color: '#fff', fontSize: 24 } }}
                
                />

            <ScrollView  contentContainerStyle={styles.container}> 

                <Text style={styles.text}>
                    What is the title of your new deck?
                </Text>

                <Input
                style={styles.input}
                onChangeText={text => changeTitle(text)}
                value={title}
                inputStyle={{color: '#fff'}}
                />
                
                <Button 
                buttonStyle={styles.btn}
                title='Add Deck'
                accessibilityLabel='Submit deck'
                disabled={title === ''}
                onPress={() => submit()}
                />

            </ScrollView>
        </View>  
                
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: '#303030'
    },
    text: {
        fontSize: 24,
        marginBottom: 30,
        textAlign: "center",
        color: '#fff'
    },
    input: {
        borderRadius: 7, 
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 30
    },
    btn: {
        backgroundColor: '#212121',
        marginBottom: 30,
        width: 120
    }
})