import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { getDecks } from '../utils/_decks';
import { Header } from 'react-native-elements';
import DeckCard from './DeckCard';
import { setDecks } from '../redux/ActionCreators';

export default function Home () {
    const dispatch = useDispatch()
    useEffect(() => {
        getDecks().then(results => dispatch(setDecks(JSON.parse(results))))
    })

    const decks = useSelector((state) => state)

    if (decks !== null) {
        const decksNames = Object.keys(decks); 

        return(
            <ScrollView style={{flex: 1}}>
                
                <Header
                centerComponent={{ text: 'UdaciCards', style: { color: '#fff', fontSize: 30 } }}
                />
                {decksNames.map((deckName) => (
                <DeckCard key= {deckName} title={decks[deckName].title} cards={decks[deckName].questions.length}/>
                ))}
            </ScrollView>            
        )
    }
    else {
        return (
            <View style={{flex: 1}}>
                <Header
                centerComponent={{ text: 'UdaciCards', style: { color: '#fff', fontSize: 30 } }}
                />
                <DeckCard title={'No Decks Available!'} />
            </View>
        )
    }
    
}