import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { saveDeckTitle } from '../utils/_decks';
import { Header } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addDeck } from '../redux/ActionCreators';

export default function AddDeck () {
    const [title, changeTitle] = useState('');
    const dispatch = useDispatch();

    const submit = () => {
        saveDeckTitle(title).then((a) => dispatch(addDeck(title)))
        changeTitle('')
    }
    return(
        <KeyboardAvoidingView style={styles.container}>

            <ScrollView  contentContainerStyle={styles.container}>
            
        <Header
            centerComponent={{ text: 'UdaciCards', style: { color: '#fff', fontSize: 30 } }}
            />

            <View style={styles.container}>
                <Text style={styles.text}>What is the title of your new deck?</Text>
                <TextInput
                style={styles.input}
                onChangeText={text => changeTitle(text)}
                value={title}
                />
                
                <Button style={styles.btn}
                title='Submit'
                accessibilityLabel='Submit deck'
                disabled={title === ''}
                onPress={() => submit()}
                />
            </View>
            </ScrollView>
            
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    text: {
        fontSize: 24,
        marginBottom: 30,
        textAlign: "center"
    },
    input: {
        height: 40, 
        width: 250,
        borderRadius: 7, 
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 30
    },
    btn: {
        borderRadius: 50
    }
}) 