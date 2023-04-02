const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'user',
    initialState: { userInfo: {
        name: 'Người dùng 1',
        gmail: '',
    }},
    reducers: {
        setInfo(state, user) {
            state.userInfo = user;
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice;