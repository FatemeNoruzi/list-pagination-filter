import "./styles.css";
import List from "./views/list";
import { Provider } from "react-redux";
import { absent } from "./application";
import { createStore } from "redux";

export default function App() {
  const store = createStore(absent, ["Use Redux"]);

  return (
    <Provider store={store}>
      <div className="App">
        <List />
      </div>
    </Provider>
  );
}
