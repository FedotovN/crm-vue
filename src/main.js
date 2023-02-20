import { createApp } from "vue";
import { auth } from './firebase/config'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createMetaManager } from "vue-meta";
import UI from './components/UI'

let app;

auth.onAuthStateChanged(()=>{
    if(!app){
        app = createApp(App)
        app.use(store).use(router).use(createMetaManager()).mount("#app");
        for(let name in UI){ app.component(name, UI[name]) };
    }
})

