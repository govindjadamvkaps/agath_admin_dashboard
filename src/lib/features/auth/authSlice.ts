import { createSlice} from "@reduxjs/toolkit";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface AuthState {
    user: null;
    error: null | string;
    loading: boolean;
}

const initialState: AuthState = {
  user: null,
  error: null, 
  loading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        testActions: () => {
         console.log('test')
        },
    }
})

export const { testActions } = authSlice.actions;
export default authSlice.reducer;