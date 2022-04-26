
// Вывносим action в отдельную константу

const FETCH_USERS = "FETCH_USERS"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"

// Интерфейс стейта

interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

// Интерфейс action

interface UserAction {
    type: string;
    payload?: any;
}

// state редьюсера

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}


const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type){
        case FETCH_USERS:
            return { loading: true, error: null, users: [] }
        case FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload}
        case FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] }
        default:
            return state
    }
}

export default userReducer()