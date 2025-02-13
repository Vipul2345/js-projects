import { createSlice, nanoid } from '@reduxjs/toolkit'

export const firstSlice = createSlice({
  name: 'todo',
  initialState: {
    todos : [],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = firstSlice.actions

export default firstSlice.reducer