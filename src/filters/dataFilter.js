export const dataFilter = {
    filterDate(date, options){
        if(!options) {
            options = { weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"}
        }
        return (new Intl.DateTimeFormat('ru-RU', options).format(date))
    }
}