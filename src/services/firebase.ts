import firebase from 'firebase';

export default function fb(): typeof firebase {
  if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyDM4Mm-BDuMB-4oygK3P-lc0bilEmcQPUk",
      authDomain: "biotop-fe7d7.firebaseapp.com",
      projectId: "biotop-fe7d7",
      storageBucket: "biotop-fe7d7.appspot.com",
      messagingSenderId: "340950018779",
      appId: "1:340950018779:web:2d8fac9b8d5803ad937afe",
      measurementId: "G-4263T98H6B"
    };
    firebase.initializeApp(firebaseConfig);
  }
  return firebase;
}
