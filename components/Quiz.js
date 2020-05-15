import React, { useState, Component } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import CardFlip from 'react-native-card-flip';
import { clearLocalNotification, setLocalNotification } from '../utils/_decks';


export default class Quiz extends Component {
    state = {
        questionNum: 0,
        correctAns: 0,
        totalQues: this.props.route.params.deck.questions.length
    };
    nextQues = (correct) => {
        if (correct) {
            this.setState((state) => ({
                questionNum: state.questionNum + 1,
                correctAns: state.correctAns + 1
            }))
        }
        else {
            this.setState((state) => ({
                questionNum: state.questionNum + 1,
            }))            
        }
    }
    render () {
        const { route, navigation } = this.props;
        const { questions, title } = route.params.deck;
        const { questionNum, correctAns, totalQues } = this.state;
        if(questionNum < totalQues){
            return(
                <View style={{flex: 1, backgroundColor: '#303030'}}>
                    <CardFlip style={styles.container} ref={(card) => this.card = card} >
                        <View>
                            <Text style={{color: '#fff', fontSize: 20}}>{questionNum+1}/{totalQues}</Text>
                            <Text style={styles.text}>{questions[questionNum].question}</Text>
                            <TouchableOpacity onPress={() => this.card.flip()} >
                                <Text style={styles.text}>Tap here to view the answer!</Text>
                            </TouchableOpacity>    
                        </View>
                        <View>
                            <Text style={{color: '#fff', fontSize: 20}}>{questionNum+1}/{totalQues}</Text>
                            <Text style={styles.text}>{questions[questionNum].answer}</Text>

                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                                <TouchableOpacity onPress={() => this.card.flip()} >
                                    <Button
                                    buttonStyle={styles.btn}x
                                    title='Correct'
                                    onPress={() => this.nextQues(true)}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.card.flip()} >
                                    <Button
                                    buttonStyle={styles.btn}
                                    title='Incorrect'
                                    onPress={() => this.nextQues(false)}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </CardFlip>
                </View>
            )
        }
        else if (totalQues === 0) {
            return(
                <View style={{flex: 1, backgroundColor: '#303030'}}>
                <View style={styles.container}>
                    <Text style={[styles.text, {paddingLeft: 4, paddingRight: 4}]}>
                        Ops! You do not have any cards for quiz.
                    </Text>
                    <Button
                        buttonStyle={styles.btn}
                        title='Add Card'
                        onPress={() => {
                            navigation.navigate('AddCardScreen',{
                                deckTitle: title
                            })
                        }}
                    />
                    <Button
                        buttonStyle={styles.btn}                        
                        title='Back to Deck'
                        onPress={() => navigation.navigate('DeckScreen', {
                            deck: route.params.deck
                        })}
                    />
                </View>
                </View>
            )
        }
        else {
            return(
                <View style={{flex: 1, backgroundColor: '#303030'}}>
                    <View style={styles.container}>
                    <Text style={styles.text}>
                    Your score: {correctAns}
                    </Text>
                        <Button
                        buttonStyle={styles.btn}
                        title='Restart Quiz'
                        onPress={() => {
                           this.setState({
                               correctAns: 0,
                               questionNum: 0
                           })
                           clearLocalNotification()
                           .then(setLocalNotification)
                        }}
                        
                        />
                        <Button
                        buttonStyle={styles.btn}                        
                        title='Back to Deck'
                        onPress={() => {
                            navigation.navigate('DeckScreen', {
                            deck: route.params.deck
                            })
                           clearLocalNotification()
                           .then(setLocalNotification)
                        }}
                        />
                    </View>
                </View>
            )
        }
    }
    
    
}

const styles = StyleSheet.create({
    container : {
        height: 250,
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
        },
    },
    text: {
        fontSize: 24,
        marginBottom: 30,
        marginTop: 30,
        alignSelf: "center",
        color: '#fff',
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#212121',
        marginBottom: 30,
        width: 120,
        marginRight: 3
    }
})
