

const usersReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_USERS":
            return [...state, ...action.payload]
    }
}


export default usersReducer