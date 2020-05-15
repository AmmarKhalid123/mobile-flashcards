import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { Header } from 'react-native-elements';
import DeckCard from './DeckCard';
import { getDecks } from '../utils/_decks';
import { setDecks } from '../redux/ActionCreators';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen ({navigation}) {
    const dispatch = useDispatch()
    useEffect(() => {
        getDecks().then(results => dispatch(setDecks(JSON.parse(results))))
    }, [getDecks])

    const decks = useSelector((state) => state)
    console.log(decks)
    const renderCard = ({ item, index }) => {
        return(
            <TouchableOpacity
                // style={{backgroundColor: '#121212'}}
                    key={item}
                    onPress={() => navigation.navigate('DeckScreen', {
                        deck: decks[item]
                    })}>
                        <DeckCard 
                        title={decks[item].title} 
                        cards={decks[item].questions && decks[item].questions.length}
                        />
            </TouchableOpacity>
        )
    }

    if (decks &&  Object.keys(decks).length > 0) {

        const decksNames = Object.keys(decks)
        
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#303030'}}>
                
                <Header
                containerStyle={{
                    backgroundColor: '#212121',
                    borderBottomColor: '#212121'
                }}
                barStyle='default'
                centerComponent={{ text: 'Your UdaciCards', style: { color: '#fff', fontSize: 24 } }}
                
                />
                <FlatList
                keyExtractor={item => item}
                data={decksNames}
                renderItem={renderCard}
                />
            </SafeAreaView>            
        )
    }
    else {
        return (
            <View style={{flex: 1, backgroundColor: '#303030'}}>
                
                <Header
                containerStyle={{
                    backgroundColor: '#212121',
                    borderBottomColor: '#212121'
                }}
                centerComponent={{ text: 'Your UdaciCards', style: { color: '#fff', fontSize: 24 } }}
                />
                <DeckCard title={'No Decks Available!'} />
            </View>
        )
    }    
}
