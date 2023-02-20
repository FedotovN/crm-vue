import { database } from "@/firebase/config"
import { ref, set, push, get } from "firebase/database"
export default {
    state: () => ({

    }),
    actions: {
        async fetchCategories({dispatch}){
            try {
                const uid = await dispatch('getUid'),
                    reference = ref(database,
                    `users/${uid}/categories`)
                    
                    const cats = [],
                          categories = (await get(reference)).val()
                if(categories){
                    Object.keys(categories).forEach(key => {
                        cats.push({
                            title: categories[key].name,
                            limit: categories[key].limit,
                            id: key
                        })
                    })
                    return cats
                }
                else return []
            }
            catch(e) {
                console.log(e)
            }
        },
        async fetchCategoryById({dispatch}, id){
            try{
                let res = ''
                const categories = await dispatch('fetchCategories')
                categories.forEach(el => {
                    if(el.id === id) res = el.title
                })
                return res
            }
            catch(e){
                console.log(e)
            }
        },
        async createCategory({dispatch}, {name, limit}){
           try {
            const uid = await dispatch('getUid'),
                  reference = push(ref(database,
                  `users/${uid}/categories`))
            set(reference, {name, limit}) 
            return {title: name, limit, id: reference.key}
           }
           catch(e) {
            console.log(e)
           }
        },
        async editCategory({dispatch},{name, limit, id}){
            try{
                const uid = await dispatch('getUid'),
                  reference = ref(database,
                  `users/${uid}/categories/${id}`)
                set(reference, {name, limit, id})
            }
            catch (e) {
                console.log(e)
            }
        },
        async deleteCategory({dispatch}, id){
            try{
                const uid = await dispatch('getUid'),
                  reference = ref(database,
                  `users/${uid}/categories/${id}`)
                set(reference, null)
            }
            catch (e) {
                console.log(e)
            }
        },
        async fetchPlanningInfo({dispatch}){
            const categories = await dispatch('fetchCategories'),
                  records = await dispatch('fetchRecords'),
                  resArr = categories.map((item)=>{
                    return {catId: item.id, catName: item.title,
                            catLimit: item.limit, overallAmount: 0}
                  })

            for(let name in records) {
                const r = records[name],
                      catId = r.category,
                      amount = r.amount,
                      type = r.type
                resArr.forEach((item)=>{
                    if(catId === item.catId) {
                        type === 'outcome' 
                        ? item.overallAmount += amount
                        : item.overallAmount -= amount
                    }
                })
            }
            return resArr
        },
        async fetchHistoryInfo({dispatch}) {
            try {
                const uid = await dispatch('getUid'),
                    records = await dispatch('fetchRecords'),
                    cats = await dispatch('fetchCategories')
                let info = []
                for(let name in records) {
                    const category = cats.find(el => el.id === records[name].category)?.title,
                        amount = records[name].amount,
                        date = records[name].date,
                        id = name,
                        type = records[name].type 
                    const newElement = {amount, date, category, type, id}
                    info.unshift(newElement)
                }
                return info
            }
            catch(e) {
                console.log(e)
                return []
            }   
        },
        async removeCategories({dispatch}) {
            try{
              const uid = await dispatch('getUid'),
                      reference = ref(database, `users/${uid}/categories`)
              set(reference, null)
            }
            catch(e) {
              console.log(e)
            }
        }
    }
}