import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDLIdVg1BCMVm3fOOFrTQA16a3iUSV1e5Q',
    authDomain: 'hitit-challange.firebaseapp.com',
    databaseURL: 'https://hitit-challange.firebaseio.com',
    projectId: 'hitit-challange',
    storageBucket: 'hitit-challange.appspot.com',
    messagingSenderId: '914885444029',
    appId: '1:914885444029:web:ab13b231ac54b9b2'
  }
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig)

 let instance = null
  class FirebaseService {
    constructor() {
      if (!instance) {
        this.app = firebase.initializeApp(firebaseConfig)
        instance = this
        //firebase.firestore.settings({ timestampsInSnapshots: true })
      }
      return instance
    }
  }
  
  const firebaseService = new FirebaseService().app
  export default firebaseService
