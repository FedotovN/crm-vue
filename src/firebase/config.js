import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
import { getAuth } from "firebase/auth";
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyCGIyA6Gv3lT7Xf5XpyMVWWfhwRjksvoW0",
    authDomain: "crm-vue-nonsense.firebaseapp.com",
    projectId: "crm-vue-nonsense",
    storageBucket: "crm-vue-nonsense.appspot.com",
    messagingSenderId: "853700122865",
    appId: "1:853700122865:web:f0724c05919ee868d13150",
    measurementId: "G-KQYCTWHHB7"
}

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp),
      database = getDatabase(firebaseApp),
      anal = getAnalytics(firebaseApp)

export { auth, database, anal }
