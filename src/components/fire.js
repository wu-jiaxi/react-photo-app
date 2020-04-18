import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBp_lSinM7BnSkE_Kxj2D79Y-U0fG7ZKWM",
    authDomain: "aquatic-photo-app.firebaseapp.com",
    databaseURL: "https://aquatic-photo-app.firebaseio.com",
    projectId: "aquatic-photo-app",
    storageBucket: "aquatic-photo-app.appspot.com",
    messagingSenderId: "451942035589",
    appId: "1:451942035589:web:09e87087b04126fb6339ec"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(config);

  export default fire;