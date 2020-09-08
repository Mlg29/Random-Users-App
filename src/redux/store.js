import {createStore} from "redux"
import usersReducer from "./reducers/user"

const store = createStore(usersReducer)


store.subscribe(() => {
    console.log("store data:", store.getState())
})


export default store