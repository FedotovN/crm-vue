import { auth, database } from '../firebase/config'
import { ref, set, get } from 'firebase/database'
import { signInWithEmailAndPassword,
         createUserWithEmailAndPassword,
          } from 'firebase/auth'
export default {
    state: {
        user: null,
        userInfo: null,
        authIsReady: false
    },
    mutations: {
        setUser(state, payload){
            state.user = payload
        },
        setUserInfo(state, payload){
            state.userInfo = payload
        },
        setUserName(state, name){
            state.userInfo.name = name
        },
        setUserBill(state, bill) {
            state.userInfo.bill = bill 
        }
    },
    actions: {
        async signIn({dispatch, commit}, {email, password}){
            try{
                await signInWithEmailAndPassword(auth, email, password)
                commit('setUser', auth.currentUser)
                const uid = await dispatch('getUid')
                commit('setUserInfo', await dispatch('getUserInfo', uid))
            }
            catch(e){
                throw(e)
            }
        },
        async signUp({dispatch}, {email, password, name}){
            try{
                await createUserWithEmailAndPassword(auth, email, password)
                const uid = await dispatch('getUid'),
                      reference = ref(database, `users/${uid}/info`)
                set(reference, {
                    bill: 0,
                    name,
                    email,
                    password
                })

            }
            catch(e){
                throw(e)
            }
        },
        getUid(){
            const user = auth.currentUser
            return user ? user.uid : null
        },
        async getUserInfo({dispatch}, uid){
            const reference = ref(database, `users/${uid}/info`)
            return (await get(reference)).val()
        },
        async setUserBill({dispatch, commit}, bill){
            const uid = await dispatch('getUid'),
                  reference = ref(database, `users/${uid}/info/bill`)
            set(reference, bill)
            commit('setUserBill', bill)
        },
        async setUserName({dispatch, commit}, name) {
            const uid = await dispatch('getUid'),
                  reference = ref(database, `users/${uid}/info/name`)
            commit('setUserName', name)
            set(reference, name)
        },
        async logOut({commit}){
            await auth.signOut()
            commit('setUser', null)
            commit('setUserInfo', null)

        },
        async checkForAuth({commit, dispatch}){
            if(auth.currentUser) {
                commit('setUser', auth.currentUser)
                commit('setUserInfo', await dispatch('getUserInfo', (await dispatch('getUid'))))
            }
        }
    },
    getters: {
        info: s => s.info
    }
}