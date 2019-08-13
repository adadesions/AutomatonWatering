import firebase from 'firebase/app'
import 'firebase/firestore'

if (firebase.app.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyDu39c74dn5esQbpAZUNh86SVNlBWMHzfU",
        authDomain: "automatonwatering.firebaseapp.com",
        databaseURL: "https://automatonwatering.firebaseio.com",
        projectId: "automatonwatering",
        storageBucket: "automatonwatering.appspot.com",
        messagingSenderId: "218561228964",
        appId: "1:218561228964:web:23c2857cdea70b98"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({})
}

const fireDB = firebase.firestore()
export { fireDB }