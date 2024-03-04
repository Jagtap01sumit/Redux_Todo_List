## when tailwind is not working then change vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteReact from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact()],
});

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Redux is an independent library which can be work with react, vue, next or many js libraries

To work with react we use react-redux which use to connect react with redux;

npm install @reduxjs/toolkit
npm install react-redux


#### start

## store

-first import configurStore ............ which is from the redux toolkit
-by using this configureStore method we create one variable  which take one object


-next step we create reducer  => Slices
## Reducers
-first import createSlice.....which is from the redux toolkit
--nanoid is used for unique id ....not imp

-then we create variable for initialState(inital value in store) . which can be a array or obj

-then we create a Slice use createSlice method.....the name which we used in this is shown is redux dev tool chrome extension

-this Slice having 3 argumets  
1. name
2. intialState
3. reducer => diff diff fuction like addtodos , remove, update and many more
   
-and then finally export the functionality which is our fuctions names 

-and second export is whole reducer(todoSlice.reducer) for the store ..to aware about the reducer ... this is we import in store...........its is manditary to export all reducers 











## useSelector and useDispatch is a react Library inbuild function 

- to add data to the store we use useDispatch
- to take data from store we use useSelectore

## configureStore & createSlice is a redux-toolkit functions or methods