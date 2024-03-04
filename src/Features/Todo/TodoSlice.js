import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo", //name ... it is redux property
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);

      if (todoToUpdate) {
        // If the todo is found, update its text
        todoToUpdate.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
