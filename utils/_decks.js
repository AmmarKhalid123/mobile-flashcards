import { AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
const NOTIFICATION_KEY = 'udacicards:notifications'

const DECK_STORAGE_KEY = 'DECK_STORAGE_KEY';

export function getDecks () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function saveDeckTitle (title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[title]: {title: title, questions: []}}))
}

export function removeDeckAsync (title) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
        const data = JSON.parse(results)
        data[title] = undefined
        delete data[title]
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}

export function addCardToDeckAsync (title, question, answer) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
        let data = JSON.parse(results)
        data[title] = {...data[title], questions: data[title].questions.concat({question, answer})}
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync().then(() => {}))
  }

function createNotification () {
    return {
        title: 'Take a Quiz',
        body: "👋 don't forget to take quiz for today!",
        ios: {
        sound: true,
        },
        android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
        }
    }
}
  
  export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate()+1)
                tomorrow.setHours(20)
                tomorrow.setMinutes(0)
                
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }