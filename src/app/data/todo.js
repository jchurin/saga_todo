import { createSlice } from '@reduxjs/toolkit'

export const key = 'todo';

const initialState = {
  loading: false,
  hasError: false,
  list: [],
}

export const todoSlice = createSlice({
  name: key,
  initialState,
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload
    },
    push: (state, { payload }) => {
      state.list.push(payload)
    },
    remove: (state, { payload }) => {
      state.list = state.list.filter((i) => i.id !== payload)
    },
    toggleCheck: (state, { payload }) => {
      debugger;
      const item = state.list.find((i) => i.id === payload);
      state.list.find((i) => i.id === payload).checked = !item.checked;
    },
    toggleLoading: (state, { payload }) => {
      state.loading = payload ? payload : !state.loading;
    },
    setError: (state, { payload }) => {
      state.hasError = payload;
    },
    clear: (state) => {
      state.loading = false;
      state.hasError = false;
      state.list = [];
    },
  },
})

export const { actions: todoActions } = todoSlice

export default todoSlice.reducer