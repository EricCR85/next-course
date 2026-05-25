import { createSlice } from '@reduxjk/toolkit';

const initialState = {
    isSuthModalOpen: false,
}

export const uiSlice = vreateSlice ({
    name: 'ui',
    initialState,
    reducers: {
        openAuthModal: (state) => {
            state.isAuthModalOpen = true;
        },
        closeAuthModal: (state) => {
            state.isAuthModalOpen = false;
        },
    },
});

export const { openAuthModal, closeAuthModal } = uiSlice.actions;
export default uiSlice.reducer;