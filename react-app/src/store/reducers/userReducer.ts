
interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}


const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}


const userReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_USERS":
            return { users: action.payload }
    }
}

export default userReducer()