import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types";
import { fetchUsers } from "../thunk/fetchUsers";

type UserState = {
    isLoading: boolean;
    data: UserType [] | [];
    error: null | SerializedError;
  };

const initialState: UserState = {
  isLoading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
      builder.addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const usersReducer = userSlice.reducer;
