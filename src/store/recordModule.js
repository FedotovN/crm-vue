  import { database } from "@/firebase/config"
  import { get, set, ref, push } from  "firebase/database"
  export default {
    state: () => ({

    }),
    actions: {
        async fetchRecords({dispatch}){
          try {
            const uid = await dispatch('getUid'),
                    reference = ref(database, `users/${uid}/records`)
            return (await get(reference)).val()
          }
          catch(e) {
            console.log(e)
          }
        },
        async pushRecord({ dispatch }, recordObject){
          try {
            const uid = await dispatch('getUid'),
              reference = push(ref(database, `users/${uid}/records`))
            set(reference, recordObject)
          } 
          catch(e) {
            console.log(e)
          }
        },
        async fetchRecordById({dispatch}, id) {
          try {
            const uid = await dispatch('getUid'),
                    reference = ref(database, `users/${uid}/records`),
                    records = (await get(reference)).val()
            for(let name in records) { if(name === id) return records[name] }
            return null 
          }
          catch(e) {
            console.log(e)
          }
        },
        async deleteRecordById({dispatch}, id) {
          try{
            const uid = await dispatch('getUid'),
                    reference = ref(database, `users/${uid}/records/${id}`)
            set(reference, null)
          }
          catch(e) {
            console.log(e)
          }
        },
        async removeRecords({dispatch}){
          try{
            const uid = await dispatch('getUid'),
                    reference = ref(database, `users/${uid}/records`)
            set(reference, null)
          }
          catch(e) {
            console.log(e)
          }
        }
    }
  }