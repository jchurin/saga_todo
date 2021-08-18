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
    setList: (state, { payload }) => {},
    remove: (state, { payload }) => {},
    push: (state, { payload }) => {},
    toggleCheck: (state, { payload }) => {},
    setListSuccess: (state, { payload }) => {
      state.list = payload
    },
    pushSuccess: (state, { payload }) => {
      state.list.push(payload)
    },
    removeSuccess: (state, { payload }) => {
      state.list = state.list.filter((i) => i.id !== payload)
    },
    toggleCheckSuccess: (state, { payload }) => {
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

export const todoActions = {...todoSlice.actions };

export default todoSlice.reducer