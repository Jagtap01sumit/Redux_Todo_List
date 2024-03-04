import { Provider } from "react-redux";
import "./App.css";
import AddTodos from "./components/AddTodos";
import "../src/index.css";
import { store } from "./app/store";
import Todos from "./components/Todos";

function App() {
  return (
    //we  wrap provider in the main.jsx
    <Provider store={store}>
      <AddTodos />
      <Todos />
    </Provider>
  );
}

export default App;
