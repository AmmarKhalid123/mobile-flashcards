import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function DeckCard ({title, cards}) {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>{title}</Text>
            {typeof cards === 'number' &&
                <Text style={styles.text}>{cards} cards</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        backgroundColor: '#424242',
        margin: 10,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: "center",
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    },
    text: {
        color: '#818181'
    },
    cards: {
        textAlign: 'center',
        color: '#757575',
        color: '#fff'
    }
})