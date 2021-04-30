import firebase from 'firebase';

class fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                    apiKey: "AIzaSyBjByB1Ooy6PSzRNjdKsjh8eI6_miFQwiU",
                    authDomain: "wuberapp.firebaseapp.com",
                    databaseURL: "https://wuberapp-default-rtdb.firebaseio.com",
                    projectId: "wuberapp",
                    storageBucket: "wuberapp.appspot.com",
                    messagingSenderId: "798792467732",
                    appId: "1:798792467732:web:34ce681b67bc0b7fe72e01"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                //user: item.user
            }

            this.db.push(message)
        });
    };

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new fire();