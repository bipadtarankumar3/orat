import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser as apiLoginUser } from '../../../services/User-service';

// Thunk for user login
export const loginUser = createAsyncThunk('user/login', async (userData, { rejectWithValue }) => {
  try {
    const data = await apiLoginUser(userData);
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data.data));
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  userInfo: JSON.parse(localStorage.getItem('user')) || null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
