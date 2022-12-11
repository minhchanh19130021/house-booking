import { createSlice } from '@reduxjs/toolkit';

const avatarSlice = createSlice({
    name: 'avatar',
    initialState: {
        avatar: {
            url: 'https://preview.redd.it/zcgs03lgoy351.png?width=288&format=png&auto=webp&s=d9bf4b46713d7fdbf11b82a8e364ceee79724a9c',
        },
    },
    reducers: {
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
    },
});
export const { setAvatar } = avatarSlice.actions;
export default avatarSlice.reducer;
