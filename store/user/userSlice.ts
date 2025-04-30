// redux/slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '@/types/types';

const initialState: UserState = {
  maskedId: null,
  role: null,
  fullname: null,
  isVerified: null,
  email: null,
  password: null,
  profileImage: null,
  bannerImage: null,
  description: null,
  createdAt: null,
  updatedAt: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      // Se mezclan los datos comunes y los datos específicos (si existen)
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
